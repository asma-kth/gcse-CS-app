# Byte Quest: GCSE Computer Science

A revision app for the **OCR GCSE Computer Science (J277)** specification, built as an immersive
dungeon adventure and packaged for the Google Play Store.

Byte, a robot cat, guides the student through the Silicon Dungeon, throws fun facts, and marks
their work.

![Byte the robot cat](assets/play-store-icon-512.png)

## What is in it

### The dungeon
Every specification topic is a floor. Every floor contains study rooms (lessons), two guardian
rooms (quizzes) and a boss room (past paper style questions). Clearing rooms earns XP and data
shards, which raise the player level and rank from Rusty Whisker to Grand Architect. A daily
streak is tracked automatically.

### Content coverage

| Floor | Topic | Paper |
|---|---|---|
| 1.1 | Systems Architecture | Paper 1 |
| 1.2 | Memory and Storage | Paper 1 |
| 1.3 | Networks, Connections and Protocols | Paper 1 |
| 1.4 | Network Security | Paper 1 |
| 1.5 | Systems Software | Paper 1 |
| 1.6 | Ethical, Legal, Cultural and Environmental Impacts | Paper 1 |
| 2.1 | Algorithms | Paper 2 |
| 2.2 | Programming Fundamentals | Paper 2 |
| 2.3 | Producing Robust Programs | Paper 2 |
| 2.4 | Boolean Logic | Paper 2 |
| 2.5 | Programming Languages and IDEs | Paper 2 |
| PY | Python Practice Unit | Skills |
| ERL | OCR Exam Reference Language | Skills |

Every topic ends with **two quizzes of ten questions each**, then **five past paper style
questions that are marked automatically** against a keyword based mark scheme, with a model
answer and an examiner tip for each one.

Explanations are written to be explicit rather than terse. Each one includes worked examples,
real life scenarios and diagrams.

### Interactive presentations
Eleven hands on labs, all built as inline SVG and React so they work offline:

- Fetch decode execute cycle, stepping through a real three instruction program register by register
- Binary and hex lab: bit flipping, hex nibbles, binary addition with overflow detection, binary shifts
- Sound representation: sample rate, bit depth and duration sliders with live file size maths
- Image representation: a pixel grid you can draw on, colour depth switching and file size maths
- Network layers: the four layer TCP IP model, sending and receiving
- Algorithm visualiser: bubble, insertion and merge sort, linear and binary search, step by step
- Logic gate simulator with live truth tables
- Characters and ASCII: type text and watch it become denary, binary and hex
- Trace table trainer, marked instantly
- Python output drill
- OCR Exam Reference Language output drill

### Design notes
- Light theme only. There is no dark mode, by request, and the Android theme forces light too.
- Palette: `#CCABD8`, `#8474A1`, `#6EC6CA`, `#08979D`, `#055B5C`.
- No em dashes anywhere in the content.
- Progress is stored in `localStorage` on the device. Nothing is uploaded and no account is needed.

## Running it locally

```bash
npm install
npm run dev        # development server
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Building the Android app for Google Play

The web app is wrapped with [Capacitor](https://capacitorjs.com), so the Android project lives in
`android/`.

```bash
npm run cap:sync   # build the web app and copy it into the Android project
npm run cap:open   # open the project in Android Studio
```

Then, to produce a release for the Play Store:

1. In Android Studio choose **Build > Generate Signed Bundle / APK**, pick **Android App Bundle**.
2. Create or select an upload keystore. Keep the keystore and its passwords safe, because Google
   Play will only accept future updates signed with the same key.
3. Set the version in `android/app/build.gradle` before each release:
   - `versionCode` must increase by at least one every upload.
   - `versionName` is the version students see, for example `1.0.1`.
4. Upload the generated `.aab` to the Play Console.

Alternatively, from the command line with a configured keystore:

```bash
npm run cap:sync
cd android && ./gradlew bundleRelease
```

### Play Console assets
- App icon 512 x 512: `assets/play-store-icon-512.png`
- Splash and feature preview: `assets/play-store-feature-preview.png`
- Source artwork: `assets/icon.svg`, `assets/icon-foreground.svg`, `assets/splash.svg`

### Suggested store listing

**Title:** Byte Quest: GCSE Computer Science

**Short description:** Revise the full OCR J277 GCSE Computer Science course as a dungeon
adventure, guided by a robot cat.

**Full description:**
Byte Quest turns the whole OCR GCSE Computer Science specification into a dungeon crawl. Every
topic is a floor, every lesson is a room, and every quiz is a guardian standing between you and
the boss fight.

Inside you get clear explanations written in plain English, with real life examples for every
idea, diagrams that show what is actually happening, eleven interactive labs you can play with,
a full Python practice unit, a guide to OCR Exam Reference Language, twenty six quizzes and
sixty five past paper style questions that mark themselves and show you the mark scheme.

Byte the robot cat travels with you and throws a fun fact whenever you least expect it.

Everything works offline. There are no accounts, no adverts and no data collection. Progress is
saved on the device.

### Data safety declaration
The app collects no personal data, requires no permissions beyond the default, has no network
calls at runtime, and stores progress only in the device browser storage used by the WebView.

## Project structure

```
src/
  content/topics/   one file per specification topic, lessons, quizzes and exam questions
  content/facts.ts  the fun facts Byte throws
  diagrams/         static SVG diagrams referenced by lesson blocks
  presentations/    the interactive labs
  components/       block renderer, quiz runner, auto marking exam runner, mascot
  screens/          dungeon map, topic, lesson, labs, facts, progress
  game/store.ts     XP, levels, ranks, streaks, saving
  types.ts          the content model
android/            the Capacitor Android project
assets/             icon and splash artwork
```

## Adding a new topic

1. Create `src/content/topics/your-topic.ts` exporting a `Topic`.
2. Add it to the array in `src/content/topics/index.ts`.
3. Reference any diagram by its id from `src/diagrams/index.tsx` and any lab by its id from
   `src/presentations/index.tsx`.

The auto marker awards one mark per mark point. A mark point is awarded when any of its `accept`
groups matches, and every keyword within a group must appear in the student answer.
