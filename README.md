# FocusLock Website

The official Arabic-first website and public update API for FocusLock.

## Stack

- Next.js App Router
- React + TypeScript
- GitHub Releases as the public APK distribution channel

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Release source

The site reads published, stable releases from:

`vyron2561/FocusLock-Releases`

A release is shown only when it is published, is not a prerelease/draft, and contains an APK asset.

## Update API

`GET /api/update/latest`

Returns the latest stable APK metadata:

- `version`
- `versionCode` (read from release notes when written as `versionCode: 123`)
- `apkUrl`
- `fileName`
- `sizeBytes`
- `sha256` (when GitHub provides an asset digest)
- `releaseNotes`
- `publishedAt`

If no eligible release exists, the endpoint returns HTTP 404 with `available: false`.

`GET /api/releases` returns the public release history.

## Publishing a new APK

1. Build a signed release APK in the private FocusLock source repository.
2. Keep the same Android application ID and release signing key for every update.
3. Increase `versionCode` and update `versionName`.
4. Create a published GitHub Release in this repository with a matching tag such as `v1.0.1`.
5. Attach the signed APK asset.
6. Include `versionCode: 2` in the release notes so the website API can expose it.

Never commit keystores, passwords, personal access tokens, or signing credentials to this repository.

## Deployment

Import this repository into Vercel and deploy it as a Next.js project. The website's API routes require a server runtime; do not deploy this project as a static-only export.
