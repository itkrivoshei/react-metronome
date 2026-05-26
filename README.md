# React Metronome

[![Live app](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f?style=flat-square&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-metronome/)
[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-metronome/ci.yml?branch=master&style=flat-square&label=ci&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-metronome/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-metronome/deploy-pages.yml?branch=master&style=flat-square&label=deploy&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-metronome/actions/workflows/deploy-pages.yml)
[![React](https://img.shields.io/badge/React-16-61dafb?style=flat-square&logo=react&logoColor=111)](react-metronome/package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

## [Open Live Metronome ->](https://itkrivoshei.github.io/react-metronome/)

Browser metronome and tempo trainer with accent beats, keyboard shortcuts, and bundled click audio.

## Control Surface

| Control | Range / behavior |
| --- | --- |
| Tempo | `40` to `240` BPM |
| Beats per measure | `2/4` through `8/4` |
| Playback | Start/stop button and spacebar |
| Tempo nudge | Arrow left/right |
| Audio | Separate click samples for accent and regular beats |

The timing loop is handled in React with refs for interval state and `HTMLAudioElement` instances for low-overhead playback.

## Run It

The Create React App source lives in the nested `react-metronome/` directory.

```bash
git clone https://github.com/itkrivoshei/react-metronome.git
cd react-metronome/react-metronome
nvm use
npm ci
npm start
```

Open `http://localhost:3000`.

## Useful Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the React dev server |
| `npm test` | Run the CRA test command once |
| `npm run build` | Build static assets |
| `npm run verify` | Run tests and build |

## Repository Shape

```text
.
├── .github/workflows/
├── docs/                    # committed Pages artifact from earlier releases
└── react-metronome/
    ├── public/
    └── src/
        ├── audio/
        ├── App.js
        └── Metronome.js
```

## Live App

https://itkrivoshei.github.io/react-metronome/

## License

[MIT](LICENSE)
