# FocusLock — Official Website

Single-page Arabic landing page for FocusLock, inspired by the storytelling flow of modern focus-product websites.

## Stack
- Next.js App Router
- React + TypeScript
- GitHub Releases for public APK distribution

## Run locally
```bash
npm install
npm run dev
```

## One-page site
The public website is a single home page with in-page sections:
- Home / hero
- Features
- How it works
- Use cases
- Download
- FAQ

APK release metadata is fetched from the public GitHub Releases API. The page automatically displays the latest published stable release containing an APK asset.

## Update API
`GET /api/update/latest` provides version, APK URL, file size, release notes, published date, and SHA-256 when GitHub supplies an asset digest.

`GET /api/releases` returns the public release history for integrations.

## Publish a new APK
1. Build a signed release APK from the private FocusLock Android repository.
2. Keep the same application ID and release signing key for every version.
3. Increase `versionCode` and update `versionName`.
4. Create a published, non-prerelease GitHub Release here with a tag such as `v1.0.1`.
5. Attach the signed APK.
6. Include `versionCode: 2` in the release notes.

Never commit signing keys, passwords, or private access tokens.

## Deployment
Deploy as a Next.js server application (for example, on Vercel). Do not use static export because the update API needs a server runtime.
