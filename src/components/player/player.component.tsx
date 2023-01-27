import { ReactElement, ReactNode, useContext, useEffect } from "react";
import { Sound } from "../../models";
import { AppContext } from "../../reducers";
import { PlayerState } from "../../reducers/reducer";
import "./player.styles.scss";

export const Player = () => {
  const {
    playerState,
    StartRecord,
    StopRecord,
    StartPlaying,
    StopPlaying,
    CancelRecord,
    PlaySound,
    soundSequence,
    baseSounds,
  } = useContext(AppContext);

  const getRecordMessage = (): ReactNode => {
    switch (playerState) {
      case PlayerState.IS_RECORDING:
        return <p>is recording ...</p>;
      case PlayerState.IS_PLAYING:
        return <p>is playing ...</p>;
    }
  };

  const playingBtnClass = () => {
    return `fa-solid fa-circle ${
      playerState == PlayerState.IS_RECORDING ? "recording" : ""
    }`;
  };

  useEffect(() => {
    console.log('effect');
    
    if(playerState == PlayerState.IS_PLAYING) {
      playRecord();
    }
  }, [playerState]);

  function playRecord() {
        soundSequence.forEach((record: Sound, index: number) => {
          setTimeout(() => {
            const soundIndex = baseSounds.findIndex(
              (sound) => sound.name === record.name
            );
            PlaySound && PlaySound(soundIndex);
            new Audio(`../../assets/audio/${record.name}.webm`).play();
            if (index === soundSequence.length - 1) {
              StopPlaying && StopPlaying();
              setTimeout(() => {
                PlaySound && PlaySound(null);
              }, index * 500);
            }
          }, index * 500);
        });
      }
  

  return (
    <div className="player">
      <h3 className="title">Record</h3>
      <div className="actions">
        <button
          className="action-button"
          onClick={() => StartRecord && StartRecord()}
        >
          <i className={playingBtnClass()}></i>
        </button>
        <button
          className="action-button"
          onClick={() => StopRecord && StopRecord()}
        >
          <i className="fa-solid fa-stop"></i>
        </button>
        <button
          className="action-button"
          onClick={() => StartPlaying && StartPlaying()}
        >
          <i className={`fa-solid fa-play`}></i>
        </button>
        <button
          className="action-button"
          onClick={() => CancelRecord && CancelRecord()}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="record-message">{getRecordMessage()}</div>
    </div>
  );
};
