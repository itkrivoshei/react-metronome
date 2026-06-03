<div align="center">

# React Metronome

Browser metronome and tempo trainer with accent beats, keyboard shortcuts, and bundled click audio.

[![Live app](https://img.shields.io/badge/live-app-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-metronome/)
[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-metronome/ci.yml?branch=main&style=for-the-badge&label=ci&logo=githubactions&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-metronome/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-metronome/deploy-pages.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-metronome/actions/workflows/deploy-pages.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-metronome/codeql.yml?branch=main&style=for-the-badge&label=codeql&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-metronome/actions/workflows/codeql.yml)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](react-metronome/package.json)
[![License](https://img.shields.io/github/license/itkrivoshei/react-metronome?style=for-the-badge&labelColor=0f172a)](LICENSE)

</div>

## Control Surface

| Control           | Range / behavior                                    |
| ----------------- | --------------------------------------------------- |
| Tempo             | `40` to `240` BPM                                   |
| Beats per measure | `2/4` through `8/4`                                 |
| Playback          | Start/stop button and spacebar                      |
| Tempo nudge       | Arrow left/right                                    |
| Audio             | Separate click samples for accent and regular beats |

The timing loop is handled in [React](https://react.dev/) with refs for interval state and `HTMLAudioElement` instances for low-overhead playback.

## Tech Stack

| Area       | Tools                                                                    |
| ---------- | ------------------------------------------------------------------------ |
| Framework  | [React 19](https://react.dev/)                                           |
| Build      | [Vite](https://vite.dev/)                                                |
| Testing    | [Vitest](https://vitest.dev/)                                            |
| Hosting    | [GitHub Pages](https://pages.github.com/)                                |
| Automation | [GitHub Actions](https://github.com/itkrivoshei/react-metronome/actions) |
| Source     | [`react-metronome/`](react-metronome/)                                   |

## Local Workflow

The Vite React source lives in the nested [`react-metronome/`](react-metronome/) directory.

```bash
git clone https://github.com/itkrivoshei/react-metronome.git
cd react-metronome/react-metronome

nvm use
npm ci
npm start
```

Open `http://localhost:3000`.

## Scripts

Scripts are defined in [`react-metronome/package.json`](react-metronome/package.json).

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `npm start`      | Start the Vite dev server      |
| `npm test`       | Run the Vitest suite once      |
| `npm run build`  | Build static assets            |
| `npm run verify` | Run tests and production build |

## Repository Structure

```text
.
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── codeql.yml
│       └── deploy-pages.yml
└── react-metronome/
    ├── public/
    ├── src/
    │   ├── audio/
    │   ├── App.jsx
    │   └── Metronome.jsx
    └── package.json
```

## Automation

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs tests and production build checks.
- [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) publishes the built app to [GitHub Pages](https://itkrivoshei.github.io/react-metronome/).
- [`.github/workflows/codeql.yml`](.github/workflows/codeql.yml) runs GitHub CodeQL analysis.

## License

[MIT](LICENSE)
