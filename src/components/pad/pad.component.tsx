import "./pad.styles.scss";
import { Sound } from "../../models";
import { ReactNode, useContext, useEffect, useState } from "react";
import { AppContext } from "../../reducers";

export const Pad = () => {
  const { baseSounds, ClickSound, currentSoundIndex } = useContext(AppContext);

  const classes = ["green", "yellow", "blue", "pink", "red"];
  const [typesClassesMap, setTypesClassesMap] = useState<Map<string, string>>(
    new Map()
  );

  useEffect(() => {
    const types = new Set(baseSounds.map((sound: Sound) => sound.type));
    const typesClasses = new Map();
    types.forEach((type) => {
      typesClasses.set(
        type,
        classes[Math.floor(Math.random() * classes.length)]
      );
    });
    setTypesClassesMap(typesClasses);
  }, []);

  const playAudio = (sound: Sound, index: number) => {
    new Audio(`../../assets/audio/${sound.name}.webm`).play();
    ClickSound && ClickSound(sound);
  };

  const soundsElements: Array<ReactNode> = baseSounds.map(
    (sound: Sound, index: number) => (
      <div
        key={index}
        className={`pad-item green ${typesClassesMap.get(sound.type)} ${
          currentSoundIndex === index ? "active" : ""
        }`}
        onClick={() => playAudio(sound, index)}
      ></div>
    )
  );

  return <div className="pad">{soundsElements}</div>;
};
