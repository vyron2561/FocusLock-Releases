# FocusLock Releases

This repository is the public update channel for the FocusLock Android app.

## Publishing a release

Create a **published GitHub Release** with a tag matching the app version, for example `v0.2.0`.

Attach exactly one installable APK asset whose filename ends in `.apk`, for example:

`FocusLock-v0.2.0.apk`

The APK must be signed with the same release signing key used for every previous FocusLock release. Do not publish an unsigned APK or change the signing key, otherwise Android will reject the in-place update.

The in-app updater reads the latest published release from the GitHub Releases API, compares its tag with the installed app version, displays the release title and notes, downloads the APK, and opens Android's package installer. Android may require the user to allow FocusLock to install unknown apps.

## Required release metadata

- Tag: `vMAJOR.MINOR.PATCH`
- Release: published, not draft, not prerelease
- Asset: one APK file
- APK application ID: `com.vyron2561.focuslock`
- APK versionName must match the release tag without the leading `v`
- APK must be signed with the established FocusLock release certificate

No release has been published yet. The updater will remain quiet until a newer compatible release with an APK asset is available.
