import { createContext, useReducer } from "react";
import { Sound } from "../models";
import appreducer, { AppState, PlayerState } from "./reducer";
import sounds from "../data";

type Props = {
  children: JSX.Element;
};

type ContextActions = {
  StartRecord: () => void;
  StopRecord: () => void;
  ClickSound: (sound: Sound) => void;
  PlaySound: (index: number | null) => void;
  StartPlaying: () => void;
  StopPlaying: () => void;
  CancelRecord: () => void;
};

type IAppContext = AppState & Partial<ContextActions>;

const initialState: AppState = {
  baseSounds: sounds,
  soundSequence: [],
  currentSoundIndex: null,
  playerState: PlayerState.DEFAULT,
};

export const AppContext = createContext<IAppContext>(initialState);

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(appreducer, initialState);

  const StartRecord = (): void => {
    dispatch({
      type: "START_RECORD",
    });
  };

  const StopRecord = () => {
    dispatch({
      type: "STOP_RECORD",
    });
  };

  const ClickSound = (sound: Sound) => {
    dispatch({
      type: "CLICK_SOUND",
      payload: sound,
    });
  };

  const PlaySound = (index: number | null) => {
    dispatch({
      type: "PLAY_SOUND",
      payload: index,
    });
  };

  const StartPlaying = (): void => {
    dispatch({
      type: "START_PLAYING",
    });
  };

  const StopPlaying = () => {
    dispatch({
      type: "STOP_PLAYING",
    });
  };

  const CancelRecord = () => {
    dispatch({
      type: "CANCEL_RECORD",
    });
  };

  const contextValue = {
    baseSounds: state.baseSounds,
    soundSequence: state.soundSequence,
    currentSoundIndex: state.currentSoundIndex,
    playerState: state.playerState,
    StartRecord,
    StopRecord,
    ClickSound,
    PlaySound,
    StartPlaying,
    StopPlaying,
    CancelRecord,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
