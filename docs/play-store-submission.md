# Publishing Byte Quest to Google Play

Everything below is ready to use. Work down the list in order. The first submission usually takes
an hour of form filling, and Google's review then takes anywhere from a few hours to a few days.

---

## Step 1: Build the signed bundle

On your own computer, with the repository cloned:

```bash
npm install
./scripts/release.sh
```

The first run offers to create your upload keystore and then builds the bundle. It ends by telling
you where the file is:

```
release/app-release.aab
```

**About the keystore.** It is created at `android/app/byte-quest-upload.jks` with its password in
`android/app/keystore.properties`. Both are git ignored. Google Play will only accept future
updates signed with that same key, so back both files up somewhere private, for example a password
manager, before you go any further. If you lose the key you cannot update the app, only publish a
brand new listing under a different package name.

You need Android Studio, or at least the Android SDK, installed for the build to work. If you have
not got it, install [Android Studio](https://developer.android.com/studio) first and open the
`android` folder once so it downloads the SDK components it needs.

---

## Step 2: Create the app in the Play Console

1. Go to [play.google.com/console](https://play.google.com/console) and choose **Create app**.
2. Fill in:
   - **App name:** Byte Quest: GCSE Computer Science
   - **Default language:** English (United Kingdom)
   - **App or game:** App
   - **Free or paid:** Free
3. Accept the declarations and create it.

The package name is fixed by the bundle and is `com.bytequest.gcsecs`. It cannot be changed later.

---

## Step 3: Store listing

**Store settings → App category:** Education
**Tags:** pick Education and Study, if offered.

### App name (30 characters max)

```
Byte Quest: GCSE Comp Sci
```

### Short description (80 characters max)

```
Revise the whole OCR GCSE Computer Science course as a dungeon adventure.
```

### Full description (4000 characters max)

```
Byte Quest turns the whole OCR GCSE Computer Science specification into a dungeon adventure. Every topic is a floor, every lesson is a room, and every quiz is a guardian standing between you and the boss fight.

Byte, a robot cat, travels with you and throws a fun fact whenever you least expect it.

WHAT IS INSIDE

The complete J277 specification, split into thirteen floors:
Paper 1 covers systems architecture, memory and storage, networks, network security, systems software, and ethical, legal, cultural and environmental impacts.
Paper 2 covers algorithms, programming fundamentals, producing robust programs, Boolean logic, and programming languages and IDEs.
Two extra training halls cover Python and OCR Exam Reference Language.

EXPLANATIONS THAT ACTUALLY EXPLAIN

Forty four lessons written in plain English, with a worked example and a real life scenario for every idea, and thirty five diagrams that show what is really happening. No jargon without a translation.

PRACTICE THAT MARKS ITSELF

Twenty six quizzes of ten questions each, with an explanation for every answer.
Sixty five past paper style questions with full mark schemes, model answers and examiner tips.
Six complete mock exam papers, three for each component, each one timed and marked automatically with a section by section breakdown.

TWELVE INTERACTIVE LABS

Step through the fetch decode execute cycle one register at a time. Flip bits in the binary and hex lab, and try binary addition and shifts. Drag the sample rate and bit depth and watch sound quality fight file size. Draw on a pixel grid and work out the file size. Follow a message down the four network layers. Watch bubble, insertion and merge sort run step by step, and both searches. Flip switches on logic gates and build the truth table. Practise trace tables and have them marked instantly. Predict the output of Python and Exam Reference Language programs.

SIX ANIMATED EXPLAINERS

Short narrated scenes with chapters and a scrub bar: how a web page reaches your phone, inside the processor, sound becomes numbers, a picture becomes bits, bubble sort in motion, and wrapping a message in layers.

BUILT LIKE A GAME

Earn XP and data shards, climb ten ranks from Rusty Whisker to Grand Architect, and keep a daily streak going.

PRIVATE AND OFFLINE

No accounts, no sign up, no adverts and no data collection. The whole course works with no internet connection, and your progress is saved on your own device and never uploaded.

Byte Quest is an independent revision app. It is not affiliated with, endorsed by or connected to OCR or Cambridge University Press and Assessment.
```

### Graphics

All of these are in the repository already.

| Asset | Requirement | File |
|---|---|---|
| App icon | 512 x 512 PNG | `assets/play-store-icon-512.png` |
| Feature graphic | 1024 x 500 PNG | `assets/play/feature-graphic.png` |
| Phone screenshots | 2 to 8, 9:16 | `assets/play/screenshots/*.png` (8 supplied, 1080 x 1920) |

Upload the screenshots in numbered order. The first two are what most people actually look at.

---

## Step 4: App content declarations

This is the part that most first submissions get sent back over. Every answer below matches what
the app actually does.

### Privacy policy

Play requires a public URL, not a file. The quickest route is GitHub Pages:

1. In your repository settings, turn on **Pages**, serving from the `main` branch, `/docs` folder.
2. Your policy is then at `https://<your-username>.github.io/gcse-CS-app/privacy-policy.html`.
3. Paste that URL into the Play Console.

Before you publish it, open `docs/privacy-policy.md` and replace
`[ADD YOUR CONTACT EMAIL HERE]` with a real address. Play checks that the policy is reachable and
relevant.

### Ads

**Does your app contain ads?** No.

### App access

**All functionality is available without special access.** There is no login of any kind.

### Content rating

Complete the questionnaire. For this app the honest answers are all negative:

- Category: **Reference, News or Education**
- Violence, sexuality, profanity, controlled substances, gambling: **No** to all
- Does the app share the user's location: **No**
- Does the app allow users to interact or exchange content: **No**
- Does the app allow users to purchase digital goods: **No**

That should return a PEGI 3 or equivalent rating in every region.

### Target audience and content

- **Target age groups:** tick **13 to 15** and **16 to 17**. Do not tick the under 13 bands. The
  app is written for GCSE students, and ticking a younger band pulls the listing into the Families
  programme with a much heavier review.
- **Appeal to children:** answer that the app is not designed to appeal to children under 13.
- **Store listing preference:** not primarily aimed at children.

### Data safety

- **Does your app collect or share any of the required user data types?** **No.**
- **Is all of the user data encrypted in transit?** Not applicable, since nothing is transmitted.
- **Do you provide a way for users to request that their data is deleted?** The app stores data
  only on the device and includes a reset button, so answer that data is not collected.
- **Advertising ID:** **No**, the app does not use one.

### Government apps, financial features, health

**No** to all of them.

---

## Step 5: Release

1. Go to **Testing → Internal testing** first. Do not go straight to production.
2. **Create new release**, upload `release/app-release.aab`.
3. When asked about Play App Signing, **accept it**. Google then holds the real signing key and
   yours becomes the upload key, which means a lost key can be recovered.
4. Release name: `1.0 (1)`. Release notes: something like
   `First release. The complete OCR J277 course with quizzes, mock papers and interactive labs.`
5. Add yourself as a tester by email, save, and roll out.
6. Install it on a real phone from the tester link and check it properly: the load screen, a
   lesson, a quiz, a timed paper, the labs, and rotating the screen.

When you are happy, go to **Production**, create a release with the same bundle, choose your
countries, and submit for review.

---

## Step 6: After it is live

To ship an update:

```bash
./scripts/release.sh 1.0.1
```

Passing a version name bumps `versionCode` automatically, which Play requires to increase on every
upload, and sets the version students see. Then upload the new bundle to a new release.

---

## Things that commonly get a submission rejected

- **A privacy policy URL that does not load,** or one that talks about a different app.
- **Ticking an under 13 age band** by accident, which triggers Families policy requirements the app
  is not set up for.
- **Claiming no data collection while an SDK collects some anyway.** True here, since the app has no
  third party SDKs at all, but it stops being true the moment you add analytics or ads.
- **Using OCR branding.** The listing calls the app independent and unaffiliated, which is accurate.
  Do not add OCR or Cambridge logos, and do not imply endorsement.
- **Screenshots that are not real screens.** Ours are genuine captures of the running app.
