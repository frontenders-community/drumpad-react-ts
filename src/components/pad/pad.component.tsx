import "./pad.styles.scss";
import sounds from "../../data";
import { Sound } from "../../models";
import { ReactNode } from "react";

function Pad() {
  const playAudio = (soundName: string) => {
    new Audio(`../../assets/audio/${soundName}.webm`).play();
  };

  const soundsElements: Array<ReactNode> = sounds.map(
    (sound: Sound, index: number) => (
      <div
        key={index}
        className="pad-item green"
        onClick={() => playAudio(sound.name)}
      ></div>
    )
  );

  return <div className="pad">{soundsElements}</div>;
}

export default Pad;
