#!/usr/bin/env bash
#
# Builds a signed Android App Bundle for the Play Console.
#
# On the first run it offers to create your upload keystore. That key is the
# single most important file in the project: Google Play will only accept
# future updates signed with the same key. Back it up somewhere safe and
# private, and never commit it.
#
# Usage:  ./scripts/release.sh [versionName]
# Example: ./scripts/release.sh 1.0.1

set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="$(pwd)"
KEYSTORE="$ROOT/android/app/byte-quest-upload.jks"
PROPS="$ROOT/android/app/keystore.properties"

echo "Byte Quest release build"
echo "========================"

# ---------------------------------------------------------------- 1. the key
if [ ! -f "$KEYSTORE" ]; then
  echo
  echo "No upload keystore found at:"
  echo "  $KEYSTORE"
  echo
  echo "This key signs every release, now and for the life of the app."
  echo "If you lose it you cannot update the app on Play, only publish a new"
  echo "listing under a new package name. Back it up before you go further."
  echo
  read -r -p "Create one now? [y/N] " reply
  if [[ ! "$reply" =~ ^[Yy]$ ]]; then
    echo "Stopping. Create a keystore, then run this again."
    exit 1
  fi

  read -r -s -p "Choose a keystore password (min 6 characters): " STORE_PW; echo
  read -r -s -p "Confirm it: " STORE_PW2; echo
  if [ "$STORE_PW" != "$STORE_PW2" ]; then echo "Passwords did not match."; exit 1; fi
  if [ ${#STORE_PW} -lt 6 ]; then echo "Too short."; exit 1; fi

  read -r -p "Your name or organisation (appears in the certificate): " OWNER
  read -r -p "Two letter country code [GB]: " COUNTRY
  COUNTRY="${COUNTRY:-GB}"

  keytool -genkeypair -v \
    -keystore "$KEYSTORE" \
    -alias upload \
    -keyalg RSA -keysize 2048 -validity 10000 \
    -storepass "$STORE_PW" -keypass "$STORE_PW" \
    -dname "CN=${OWNER}, O=${OWNER}, C=${COUNTRY}"

  cat > "$PROPS" <<PROPSEOF
storeFile=$KEYSTORE
storePassword=$STORE_PW
keyAlias=upload
keyPassword=$STORE_PW
PROPSEOF
  chmod 600 "$PROPS"

  echo
  echo "Keystore created. Two files matter, both git ignored:"
  echo "  $KEYSTORE"
  echo "  $PROPS"
  echo "Copy them somewhere safe now, for example a password manager."
  echo
fi

# ------------------------------------------------------ 2. version bump
if [ $# -ge 1 ]; then
  NEW_NAME="$1"
  GRADLE="$ROOT/android/app/build.gradle"
  CURRENT_CODE=$(grep -oP 'versionCode \K\d+' "$GRADLE")
  NEXT_CODE=$((CURRENT_CODE + 1))
  sed -i "s/versionCode $CURRENT_CODE/versionCode $NEXT_CODE/" "$GRADLE"
  sed -i "s/versionName \"[^\"]*\"/versionName \"$NEW_NAME\"/" "$GRADLE"
  echo "Version set to $NEW_NAME (versionCode $NEXT_CODE)."
fi

# ------------------------------------------------------ 3. checks and build
echo
echo "Checking the content before building..."
npm run audit

echo
echo "Building the web app..."
npm run build

echo
echo "Copying it into the Android project..."
npx cap sync android

echo
echo "Building the signed bundle. The first run downloads Gradle and may take a while..."
cd android
./gradlew --no-daemon bundleRelease

AAB="$ROOT/android/app/build/outputs/bundle/release/app-release.aab"
if [ -f "$AAB" ]; then
  mkdir -p "$ROOT/release"
  cp "$AAB" "$ROOT/release/"
  echo
  echo "Done. Upload this file to the Play Console:"
  echo "  $ROOT/release/app-release.aab"
  ls -lh "$ROOT/release/app-release.aab"
else
  echo "Build finished but no bundle was produced. Check the Gradle output above."
  exit 1
fi
