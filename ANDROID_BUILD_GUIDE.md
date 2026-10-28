# Android app build guide — Lesson Plan Generator

This project is configured to package the existing React/Vite app as a native Android app using Capacitor. The Android app bundles the website files locally; it is not merely a shortcut to GitHub Pages.

## Fastest method: build an APK on GitHub

1. Create or open your GitHub repository and upload **all contents** of this ZIP to the repository root.
2. Commit and push the files to the `main` branch.
3. Open the repository's **Actions** tab.
4. Select **Build Android APK**. If it has not run automatically, click **Run workflow**.
5. Wait for the workflow to finish successfully.
6. Open the completed workflow run and scroll to **Artifacts**.
7. Download `lesson-plan-generator-debug-apk` and extract it. The file inside is `app-debug.apk`.
8. Transfer the APK to your Android phone and install it. You may need to allow installation from that source in Android settings. Only install APKs you built or trust.

The workflow builds a **debug APK** for testing, not a signed Play Store release. To publish on Google Play, create a signed Android App Bundle (AAB) using Android Studio and keep your signing key private.

## Build locally with Android Studio (optional)

Requirements: Node.js 22, npm, Android Studio, Android SDK, and Java 21 (Android Studio's bundled JDK is recommended).

From the project root, run:

```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Wait for Gradle sync, choose an emulator or connected phone, then press **Run**. To rebuild after editing web source files, run:

```bash
npm run android:sync
```

If an `android/` directory already exists, do not run `npx cap add android` again; use `npm run android:sync`.

## App identity

- Display name: `Lesson Plan Generator`
- Android application ID: `com.didactiplan.lessonplan`
- Web assets directory: `dist`

## GitHub Pages and Android

GitHub Pages continues to host the web version. The Android APK is built separately by the **Build Android APK** GitHub Actions workflow. In GitHub, open **Actions** to download the APK artifact from a successful run.

## Important notes

- This archive contains the Capacitor setup and an automated APK workflow. The native `android/` directory and APK are generated during the build; they are not precompiled into this ZIP.
- The app's current lesson-plan generation is based on the curriculum engines bundled in the project. This wrapper does not add a Gemini AI backend.
- Never embed private API keys in frontend source code, `VITE_*` variables, or an APK. Client-side secrets can be extracted. If you add Gemini or another API, call it through a secured server-side endpoint.
- Review the `LICENSE` and all bundled third-party assets before distributing the app.
