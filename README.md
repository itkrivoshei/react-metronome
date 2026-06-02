<div align="center">

# React Metronome

Browser metronome and tempo trainer with accent beats, keyboard shortcuts, and bundled click audio.

[![Live app](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-metronome/)
[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-metronome/ci.yml?branch=main&style=for-the-badge&label=ci&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-metronome/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-metronome/deploy-pages.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-metronome/actions/workflows/deploy-pages.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-metronome/codeql.yml?branch=main&style=for-the-badge&label=codeql&logo=github&logoColor=white)](https://github.com/itkrivoshei/react-metronome/actions/workflows/codeql.yml)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](react-metronome/package.json)
[![License](https://img.shields.io/github/license/itkrivoshei/react-metronome?style=for-the-badge)](LICENSE)

</div>

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

The Vite React source lives in the nested `react-metronome/` directory.

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
| `npm start` | Start the Vite dev server |
| `npm test` | Run the Vitest command once |
| `npm run build` | Build static assets |
| `npm run verify` | Run tests and build |

## Repository Shape

```text
.
├── .github/workflows/
└── react-metronome/
    ├── public/
    └── src/
        ├── audio/
        ├── App.jsx
        └── Metronome.jsx
```

## License

[MIT](LICENSE)
