import "./pad.styles.scss";
import { Sound } from "../../models";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type PadProps = {
  sounds: Array<Sound>;
  padClick: (padId: number) => void;
};

function Pad({ sounds, padClick }: PadProps) {
  const classes = ["green", "yellow", "blue", "pink", "red"];
  const [typesClassesMap, setTypesClassesMap] = useState<Map<string, string>>(
    new Map()
  );

  useEffect(() => {
    const types = new Set(sounds.map((sound: Sound) => sound.type));
    const typesClasses = new Map();
    types.forEach((type) => {
      typesClasses.set(
        type,
        classes[Math.floor(Math.random() * classes.length)]
      );
    });
    setTypesClassesMap(typesClasses);
  }, []);

  const playAudio = (soundName: string, index: number) => {
    new Audio(`../../assets/audio/${soundName}.webm`).play();
    padClick(index);
  };

  const soundsElements: Array<ReactNode> = sounds.map(
    (sound: Sound, index: number) => (
      <div
        key={index}
        className={`pad-item green ${typesClassesMap.get(sound.type)}`}
        onClick={() => playAudio(sound.name, index)}
      ></div>
    )
  );

  return <div className="pad">{soundsElements}</div>;
}

export default Pad;
