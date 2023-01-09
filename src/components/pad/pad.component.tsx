import "./pad.styles.scss";
import sounds from "../../data";
import { Sound } from "../../models";
import { ReactNode } from "react";

function Pad() {
  const types = new Set(sounds.map((sound: Sound) => sound.type));
  const classes = ["green", "yellow", "blue", "pink", "red"];
  const typesClassesMap = new Map();
  types.forEach((type) => {
    typesClassesMap.set(
      type,
      classes[Math.floor(Math.random() * classes.length)]
    );
  });

  const playAudio = (soundName: string) => {
    new Audio(`../../assets/audio/${soundName}.webm`).play();
  };

  const soundsElements: Array<ReactNode> = sounds.map(
    (sound: Sound, index: number) => (
      <div
        key={index}
        className={`pad-item green ${typesClassesMap.get(sound.type)}`}
        onClick={() => playAudio(sound.name)}
      ></div>
    )
  );

  return <div className="pad">{soundsElements}</div>;
}

export default Pad;
