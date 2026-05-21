# React Metronome

Modern browser-based metronome and tempo trainer built with React.

This repository is maintained as a compact portfolio project. It shows a small interactive frontend application with audio playback, state handling, responsive UI styling, and static deployment through GitHub Pages.

## Live Demo

```text
https://itkrivoshei.github.io/react-metronome/
```

## Overview

The app provides a simple metronome for rhythm practice, running cadence, and timing drills.

```text
User input
  ↓
React state
  ↓
Timer interval
  ↓
Audio click playback + beat indicator
```

## Tech Stack

- React
- JavaScript
- HTML
- CSS
- Web Audio through browser Audio API
- GitHub Pages

## Features

- Adjustable tempo from 40 to 240 BPM
- Start and stop playback
- Accent beat for the first beat of each measure
- Configurable beats per measure from 2/4 to 8/4
- Volume control
- Visual beat indicator
- Keyboard shortcuts for start/stop and tempo control
- Responsive dark UI
- Static deployment with GitHub Pages

## Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| `Space` | Start or stop metronome |
| `ArrowLeft` | Decrease BPM |
| `ArrowRight` | Increase BPM |

## Project Structure

```text
.
├── docs/
├── react-metronome/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── Metronome.js
│   │   ├── Metronome.css
│   │   ├── audio/
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
├── LICENSE
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/itkrivoshei/react-metronome.git
cd react-metronome/react-metronome
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Open locally:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

The production output is generated in:

```text
react-metronome/build/
```

## Portfolio Notes

This project is useful as a public portfolio repository because it demonstrates:

- React component refactoring from class-based code to hooks
- State management with `useState`, `useEffect`, `useRef`, `useMemo`, and `useCallback`
- Timer lifecycle management and cleanup
- Browser audio playback handling
- Responsive UI design with CSS variables
- Accessibility basics with labels, focus states, and keyboard controls
- Static frontend deployment through GitHub Pages

## Status

Maintained as a portfolio project.

The original version was an early React learning project. The current version keeps the same idea but refreshes the UI and code structure for a cleaner public profile.

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.
