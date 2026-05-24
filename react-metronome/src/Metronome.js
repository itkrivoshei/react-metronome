import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Metronome.css";
import click1 from "./audio/click1.wav";
import click2 from "./audio/click2.wav";

const MIN_BPM = 40;
const MAX_BPM = 240;
const DEFAULT_BPM = 100;
const DEFAULT_BEATS_PER_MEASURE = 4;
const MIN_BEATS_PER_MEASURE = 2;
const MAX_BEATS_PER_MEASURE = 8;
const BEAT_OPTIONS = [2, 3, 4, 5, 6, 7, 8];

const clamp = (value, min, max) => Math.min(Math.max(Number(value), min), max);

function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(DEFAULT_BPM);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(DEFAULT_BEATS_PER_MEASURE);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const timerRef = useRef(null);
  const countRef = useRef(0);
  const clickRef = useRef(null);
  const accentClickRef = useRef(null);

  const intervalMs = useMemo(() => Math.round((60 / bpm) * 1000), [bpm]);
  const playbackStatus = isPlaying ? `Playing beat ${currentBeat} of ${beatsPerMeasure}` : "Stopped";

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const playSound = useCallback(
    (isAccentBeat) => {
      const sound = isAccentBeat ? accentClickRef.current : clickRef.current;

      if (!sound) {
        return;
      }

      sound.volume = volume;
      sound.currentTime = 0;
      sound.play().catch(() => {
        // Browser autoplay policies can block audio until the first user action.
      });
    },
    [volume]
  );

  const tick = useCallback(() => {
    const beatIndex = countRef.current % beatsPerMeasure;
    const isAccentBeat = beatIndex === 0;

    playSound(isAccentBeat);
    setCurrentBeat(beatIndex + 1);
    countRef.current = (beatIndex + 1) % beatsPerMeasure;
  }, [beatsPerMeasure, playSound]);

  const togglePlayback = useCallback(() => {
    setIsPlaying((wasPlaying) => {
      if (wasPlaying) {
        clearTimer();
        setCurrentBeat(0);
        countRef.current = 0;
        return false;
      }

      countRef.current = 0;
      setCurrentBeat(0);
      return true;
    });
  }, [clearTimer]);

  const updateBpm = (value) => {
    setBpm(clamp(value, MIN_BPM, MAX_BPM));
  };

  const updateBeatsPerMeasure = (value) => {
    const nextValue = clamp(value, MIN_BEATS_PER_MEASURE, MAX_BEATS_PER_MEASURE);

    setBeatsPerMeasure(nextValue);
    countRef.current = 0;
    setCurrentBeat(0);
  };

  useEffect(() => {
    clickRef.current = new Audio(click1);
    accentClickRef.current = new Audio(click2);

    return clearTimer;
  }, [clearTimer]);

  useEffect(() => {
    clearTimer();

    if (!isPlaying) {
      return undefined;
    }

    tick();
    timerRef.current = setInterval(tick, intervalMs);

    return clearTimer;
  }, [clearTimer, intervalMs, isPlaying, tick]);

  useEffect(() => {
    const handleKeyboard = (event) => {
      const tagName = event.target.tagName.toLowerCase();
      const isFormField = ["input", "select", "textarea"].includes(tagName);

      if (isFormField) {
        return;
      }

      if (event.code === "Space") {
        event.preventDefault();
        togglePlayback();
      }

      if (event.key === "ArrowRight") {
        updateBpm(bpm + 1);
      }

      if (event.key === "ArrowLeft") {
        updateBpm(bpm - 1);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [bpm, togglePlayback]);

  return (
    <main className="metronome-shell">
      <section className="metronome-card" aria-label="Browser metronome">
        <div className="metronome-header">
          <p className="eyebrow">React tempo trainer</p>
          <h1>Metronome</h1>
          <p className="description">
            Browser-based rhythm tool for running cadence, music practice, and
            timing drills.
          </p>
        </div>

        <div className="tempo-display" aria-live="polite">
          <span className="tempo-value">{bpm}</span>
          <span className="tempo-unit">BPM</span>
        </div>

        <div className="measure-chip" aria-hidden="true">
          {beatsPerMeasure}/4 · {intervalMs} ms per beat
        </div>
        <span className="sr-only" aria-live="polite">
          {playbackStatus}
        </span>

        <div className="beat-row" aria-label="Beat indicator">
          {Array.from({ length: beatsPerMeasure }, (_, index) => {
            const beatNumber = index + 1;
            const isActive = isPlaying && currentBeat === beatNumber;

            return (
              <span
                key={beatNumber}
                className={`beat-dot${isActive ? " active" : ""}${
                  index === 0 ? " accent" : ""
                }`}
                aria-label={`Beat ${beatNumber}`}
              />
            );
          })}
        </div>

        <div className="control-group">
          <label htmlFor="bpm-range">Tempo</label>
          <input
            id="bpm-range"
            type="range"
            min={MIN_BPM}
            max={MAX_BPM}
            value={bpm}
            onChange={(event) => updateBpm(event.target.value)}
          />
          <div className="range-meta">
            <span>{MIN_BPM}</span>
            <span>{MAX_BPM}</span>
          </div>
        </div>

        <div className="settings-grid">
          <label className="field" htmlFor="bpm-number">
            <span>BPM</span>
            <input
              id="bpm-number"
              type="number"
              min={MIN_BPM}
              max={MAX_BPM}
              value={bpm}
              onChange={(event) => updateBpm(event.target.value)}
            />
          </label>

          <label className="field" htmlFor="beats-per-measure">
            <span>Beats</span>
            <select
              id="beats-per-measure"
              value={beatsPerMeasure}
              onChange={(event) => updateBeatsPerMeasure(event.target.value)}
            >
              {BEAT_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {value}/4
                </option>
              ))}
            </select>
          </label>

          <label className="field" htmlFor="volume">
            <span>Volume</span>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
            />
          </label>
        </div>

        <button
          className={`primary-action${isPlaying ? " is-playing" : ""}`}
          type="button"
          onClick={togglePlayback}
          aria-pressed={isPlaying}
        >
          {isPlaying ? "Stop" : "Start"}
        </button>

        <footer className="metronome-footer">
          <span>Space: start/stop</span>
          <span>← / →: adjust tempo</span>
        </footer>
      </section>
    </main>
  );
}

export default Metronome;
