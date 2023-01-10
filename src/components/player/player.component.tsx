import { ReactElement, ReactNode } from "react";
import "./player.styles.scss";

type PlayerProps = {
  isRecording: boolean;
  isPlaying: boolean;
  hasRecord: boolean;
  startRecord: () => void;
  stopRecord: () => void;
  play: () => void;
  clear: () => void;
};

function Player({
  isRecording,
  isPlaying,
  hasRecord,
  startRecord,
  stopRecord,
  play,
  clear,
}: PlayerProps) {
  function getRecordMessage(): ReactNode {
    if (isRecording) {
      return <p>is recording ...</p>;
    } else if (isPlaying) {
      return <p>is playing ...</p>;
    } else if (hasRecord) {
      return <p>has one record</p>;
    } else {
      return <p>no record yet</p>;
    }
  }

  return (
    <div className="player">
      <h3 className="title">Record</h3>
      <div className="actions">
        <button className="action-button" onClick={() => startRecord()}>
          <i
            className={`fa-solid fa-circle ${isRecording ? "recording" : ""}`}
          ></i>
        </button>
        <button className="action-button" onClick={() => stopRecord()}>
          <i className="fa-solid fa-stop"></i>
        </button>
        <button className="action-button" onClick={() => play()}>
          <i className={`fa-solid fa-play ${isPlaying ? "playing" : ""}`}></i>
        </button>
        <button className="action-button" onClick={() => clear()}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="record-message">{getRecordMessage()}</div>
    </div>
  );
}

export default Player;
