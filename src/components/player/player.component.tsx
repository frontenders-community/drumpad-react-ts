import { ReactElement, ReactNode, useContext } from "react";
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
