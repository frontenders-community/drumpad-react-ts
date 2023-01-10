import React, { Dispatch, SetStateAction, useState } from "react";
import "./App.scss";
import Pad from "./components/pad/pad.component";
import Player from "./components/player/player.component";
import sounds from "./data";
import { Sound } from "./models";

function App() {
  const [recording, setRecording]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  const [recordSequence, setRecordSequence]: [
    Array<Sound>,
    Dispatch<SetStateAction<Array<Sound>>>
  ] = useState(new Array<Sound>());

  const [playing, setPlaying]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);

  function startRecord() {
    setRecording(true);
  }

  function stopRecord() {
    setRecording(false);
  }

  function playRecord() {
    if (recordSequence.length > 0) {
      setPlaying(true);
    }
    recordSequence.forEach((record: Sound, index: number) => {
      setTimeout(() => {
        new Audio(`../../assets/audio/${record.name}.webm`).play();
        if (index === recordSequence.length - 1) {
          setPlaying(false);
        }
      }, index * 500);
    });
  }

  function clearRecord() {
    setRecordSequence([]);
  }

  function handlePadClick(padId: number) {
    if (recording) {
      setRecordSequence([...recordSequence, sounds[padId]]);
    }
  }

  return (
    <div className="container">
      <h2 className="main-title">JS Drum Pad</h2>
      <div className="app">
        <div className="pad-container">
          <Pad sounds={sounds} padClick={handlePadClick} />
        </div>
        <div className="actions-container">
          <Player
            isRecording={recording}
            isPlaying={playing}
            hasRecord={recordSequence.length > 0}
            startRecord={startRecord}
            stopRecord={stopRecord}
            play={playRecord}
            clear={clearRecord}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
