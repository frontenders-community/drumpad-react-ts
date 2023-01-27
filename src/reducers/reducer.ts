import { Sound } from "../models";

export type AppState = {
  baseSounds: Array<Sound>;
  soundSequence: Array<Sound>;
  currentSoundIndex: number | null;
  playerState: PlayerState;
};

export enum PlayerState {
  DEFAULT,
  IS_RECORDING,
  IS_PLAYING,
}

export type PlayerAction =
  | { type: "START_RECORD" }
  | { type: "STOP_RECORD" }
  | { type: "CLICK_SOUND"; payload: Sound }
  | { type: "PLAY_SOUND"; payload: number | null }
  | { type: "START_PLAYING" }
  | { type: "STOP_PLAYING" }
  | { type: "CANCEL_RECORD" };

export default function reducer(state: AppState, action: PlayerAction) {
  switch (action.type) {
    case "START_RECORD":
      return { ...state, playerState: PlayerState.IS_RECORDING };
    case "STOP_RECORD":
      return { ...state, playerState: PlayerState.DEFAULT };
    case "CLICK_SOUND": {
      return {
        ...state,
        ...(state.playerState === PlayerState.IS_RECORDING && {
          soundSequence: [...state.soundSequence, action.payload],
        }),
      };
    }
    case "PLAY_SOUND": {
      return {
        ...state,
        currentSoundIndex: action.payload,
      };
    }
    case "START_PLAYING": {
      return {
        ...state,
        playerState: PlayerState.IS_PLAYING,
      };
    }
    case "STOP_PLAYING": {
      return {
        ...state,
        playerState: PlayerState.DEFAULT,
      };
    }
    case "CANCEL_RECORD": {
      return {
        ...state,
        soundSequence: [],
      };
    }
  }
}
