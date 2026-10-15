# LUNAROOM — Find your quiet

A cozy forest ambience web app for reading, studying, and slowing down. Built with React, Vite, TypeScript, and the Web Audio API. Designed as a static site and ready for GitHub Pages.

## Features

- Cinematic forest scene with layered fog, subtle drifting lights, and reduced-motion support.
- Four atmosphere presets: Misty Morning, Rainy Cabin, Deep Forest, and Nightfall.
- Working, independent procedural ambience layers for rain, wind, and bird-like chirps, with per-layer and master volume controls.
- Spotify iframe embed for user-provided track, album, or playlist links.
- Focus timer with 25, 45, and 60 minute sessions.
- Preferences saved locally in the current browser.
- Responsive layout for desktop and mobile.

## Important audio note

This MVP synthesizes soft sound textures in the browser with the Web Audio API. Rain and wind are generated noise textures; the bird layer uses synthesized chirps. They are not nature field recordings. The interface discloses this. To use real recordings instead, add appropriately licensed audio files under `public/audio/`, document their source/license in `public/audio/ASSET-LICENSES.md`, and replace the procedural generator in `src/App.tsx` with HTMLAudioElement or decoded Web Audio buffers.

No audio starts until the user clicks a control. Browser audio support and Spotify playback availability depend on the user's browser and Spotify account.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. The workflow `.github/workflows/deploy.yml` builds the project and deploys the `dist` directory. It sets Vite's base path to `/<repository-name>/` automatically.

If you host at a custom domain or the root of a domain, change the workflow's `BASE_PATH` to `/`.

## Image source

The forest background and preset thumbnails use Unsplash image URLs. They require an internet connection. For a fully self-contained deployment, download appropriately licensed images, place them in `public/images/`, and update the image paths in `src/App.tsx`. Review each asset's license/terms before redistribution.

## Accessibility and privacy

- Respects `prefers-reduced-motion`.
- Audio is opt-in and uses no microphone.
- Preferences are stored in localStorage only; there is no backend.
- Spotify links are processed client-side and embedded through Spotify's official embed player.
