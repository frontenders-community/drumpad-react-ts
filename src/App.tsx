import React, { Dispatch, SetStateAction, useState } from "react";
import "./App.scss";
import { Pad } from "./components/pad/pad.component";
import { Player } from "./components/player/player.component";
import { AppProvider } from "./reducers";

export const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h2 className="main-title">JS Drum Pad</h2>
        <div className="app">
          <div className="pad-container">
            <Pad />
          </div>
          <div className="actions-container">
            <Player />
          </div>
        </div>
      </div>
    </AppProvider>
  );

  //   const [recording, setRecording] = useState(false);
  //   const [recordSequence, setRecordSequence] = useState<Array<Sound>>([]);
  //   const [playing, setPlaying] = useState(false);
  //   const [currentSoundIndex, setCurrentSoundIndex] = useState<number | null>(
  //     null
  //   );
  //
  //   function startRecord() {
  //     setRecordSequence([]);
  //     setRecording(true);
  //   }
  //
  //   function stopRecord() {
  //     setRecording(false);
  //   }
  //
  //   function playRecord() {
  //     if (recordSequence.length > 0) {
  //       setPlaying(true);
  //     }
  //     recordSequence.forEach((record: Sound, index: number) => {
  //       setTimeout(() => {
  //         const soundIndex = sounds.findIndex(
  //           (sound) => sound.name === record.name
  //         );
  //         setCurrentSoundIndex(soundIndex);
  //         new Audio(`../../assets/audio/${record.name}.webm`).play();
  //         if (index === recordSequence.length - 1) {
  //           setPlaying(false);
  //           setTimeout(() => {
  //             setCurrentSoundIndex(null);
  //           }, index * 500);
  //         }
  //       }, index * 500);
  //     });
  //   }
  //
  //   function clearRecord() {
  //     setRecordSequence([]);
  //   }
  //
  //   function handlePadClick(padId: number) {
  //     if (recording) {
  //       setRecordSequence([...recordSequence, sounds[padId]]);
  //     }
  //   }
  // return (
  //   <div className="container">
  //     <h2 className="main-title">JS Drum Pad</h2>
  //     <div className="app">
  //       <div className="pad-container">
  //         <Pad
  //           sounds={sounds}
  //           padClick={handlePadClick}
  //           currentSoundIndex={currentSoundIndex}
  //         />
  //       </div>
  //       <div className="actions-container">
  //         <Player
  //           isRecording={recording}
  //           isPlaying={playing}
  //           hasRecord={recordSequence.length > 0}
  //           startRecord={startRecord}
  //           stopRecord={stopRecord}
  //           play={playRecord}
  //           clear={clearRecord}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};
