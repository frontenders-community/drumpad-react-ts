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
};
