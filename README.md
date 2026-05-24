# React Metronome

[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-metronome/ci.yml?branch=master&style=flat-square)](https://github.com/itkrivoshei/react-metronome/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-16-61dafb?style=flat-square)](react-metronome/package.json)
[![Live Demo](https://img.shields.io/badge/GitHub%20Pages-live-2ea44f?style=flat-square)](https://itkrivoshei.github.io/react-metronome/)

Browser-based metronome and tempo trainer built with React.

## Tech stack

- React 16
- JavaScript
- CSS
- Browser Audio API
- GitHub Pages
- GitHub Actions

## Features

- Adjustable tempo from 40 to 240 BPM
- Configurable beats per measure from 2/4 to 8/4
- Accent click on the first beat of each measure
- Volume control
- Visual beat indicator
- Keyboard shortcuts for playback and tempo changes
- Responsive dark UI

## Live demo

```text
https://itkrivoshei.github.io/react-metronome/
```

## Requirements

- Node.js 16
- npm

The app source is in the nested `react-metronome/` directory.

## Installation

```bash
git clone https://github.com/itkrivoshei/react-metronome.git
cd react-metronome/react-metronome
npm ci
```

## Development

Start the local development server:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

The production build is generated in:

```text
react-metronome/build/
```

## Test and verification

Run the test command:

```bash
npm test
```

Run the full local verification command used by CI:

```bash
npm run verify
```

`npm run verify` runs the test command and then creates a production build.

## Project structure

```text
.
├── .github/workflows/ci.yml
├── docs/
├── react-metronome/
│   ├── public/
│   ├── src/
│   │   ├── audio/
│   │   ├── App.js
│   │   ├── Metronome.js
│   │   ├── Metronome.css
│   │   └── index.js
│   ├── .nvmrc
│   ├── package.json
│   └── package-lock.json
├── LICENSE
└── README.md
```

## Deployment

The repository contains a committed `docs/` directory for GitHub Pages deployment.

## License

This project is licensed under the [MIT License](LICENSE).
