import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Game from "./Game.js";
import Settings from "./Settings.js";

function Main() {
  let [cards, setCards] = useState([]);
  let [config, setConfig] = useState({
    game: {
      gameFace: "hira",
      hintFace: "roumaji",
      numberOfCards: 15,
      hintsEnabled: false,
    },
    style: {
      cardSize: 30,
      bgColor: "white",
      fontSize: 10,
      fontColor: "black",
    },
    advanced: {
      test: null,
    },
  });
  return (
    <>
      <div>
        {/*TEMP DIVV TO BE SCRAPPED AND PUT IN HEADER*/}
        DIVV TO BE SCRAPPED
        <Link to="/">HOME</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Game
              cards={cards}
              setCards={setCards}
              config={config}
              setConfig={setConfig}
            />
          }
        ></Route>
        <Route
          path="/settings"
          element={<Settings config={config} setConfig={setConfig} />}
        ></Route>
      </Routes>
    </>
  );
}

export default Main;
