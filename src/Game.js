/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import json from "./kana.json";
import Hints from "./Hints.js";
import Settings from "./Settings.js";
import { createShuffledCopy } from "./helpers.js";

function Game({ cards, setCards, config, setConfig }) {
  let [currScore, setCurrScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [hints, setHints] = useState([]);

  let handleClick = (id) => {
    //card with correct id, make it hit=true if false, otherside all hit in cards set to false and currscore set to 0
    let cardIndex = cards.findIndex((x) => x.id === id);
    if (cards[cardIndex].hit) {
      resetGameState();
    } else {
      advanceGameState(cardIndex);
    }
  };

  function resetGameState() {
    setCurrScore(0);
    setHints([]);
    setCards((prev) => {
      let newArr = prev.map((elem) => {
        elem.hit = false;
        return elem;
      });
      return newArr;
    });
  }

  function advanceGameState(hitCard) {
    let card = cards[hitCard];
    setHints((prev) => {
      return [card, ...prev];
    });
    setCards((prev) => {
      let newArr = [...prev];
      newArr[hitCard].hit = true;
      newArr = createShuffledCopy(newArr);
      return newArr;
    });
    setCurrScore((prev) => {
      return prev + 1;
    });
  }

  useEffect(() => {
    setCards(
      createShuffledCopy([...json.cards])
        .slice(0, config.game.numberOfCards)
        .map((elem, index) => {
          elem.id = index;
          elem.hit = false;
          return elem;
        })
    );
    console.log("mount");
  }, []);

  useEffect(() => {
    if (currScore > bestScore) {
      setBestScore(currScore);
    }
  }, [currScore]);

  return (
    <div className="game">
      <Hints hints={hints} hintFace={config.game.hintFace} />
      <div className="cardsHolder">
        {cards.map((element) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Card
              element={element}
              gameFace={config.game.gameFace}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      <div>{currScore}</div>
      <div>{bestScore}</div>
      <div style={{ backgroundColor: "gray" }}>
        <Settings config={config} setConfig={setConfig} />
      </div>
    </div>
  );
}

export default Game;
