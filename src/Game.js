import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import json from "./kana.json";
import Hints from "./Hints.js";
import Settings from "./Settings.js";

function Game() {
  let [cards, setCards] = useState([]);
  let [currScore, setCurrScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [hints, setHints] = useState([]);
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

  let handleClick = (id) => {
    //card with correct id, make it hit=true if false, otherside all hit in cards set to false and currscore set to 0
    let foundIndex = cards.findIndex((x) => x.id === id);
    if (cards[foundIndex].hit) {
      setCurrScore(0);
    } else {
      setCards((prev) => {
        let newArr = [...prev];
        newArr[foundIndex].hit = true;
        setHints((prev) => {
          return [...prev, newArr[foundIndex]];
        });
        return newArr;
      });
      setCurrScore((prev) => {
        return prev + 1;
      });
    }
  };

  useEffect(() => {
    //setCards([{id: 0, hit: false, eng: 'back', hira: 'back', kata: 'altBack'},{id: 1, hit: false, eng: 'back', hira: 'back', kata: 'altBack'},{id: 2, hit: false, eng: 'back', hira: 'back', kata: 'altBack'},{id: 3, hit: false, eng: 'back', hira: 'back', kata: 'altBack'},{id: 4, hit: false, eng: 'back', hira: 'back', kata: 'altBack'},{id: 5, hit: false, eng: 'back', hira: 'back', kata: 'altBack'}])
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
    if (currScore === 0) {
      setCards((prev) => {
        let newArr = prev.map((elem) => {
          elem.hit = false;
          return elem;
        });
        setHints([]);
        return newArr;
      });
    } else if (currScore > bestScore) {
      setCards((prev) => createShuffledCopy(prev));
      setBestScore(currScore);
    }
  }, [currScore]);

  let createShuffledCopy = (arr) => {
    let newArr = [...arr];
    let m = newArr.length;
    while (m) {
      let i = Math.floor(Math.random() * m--);

      let t = newArr[m];
      newArr[m] = newArr[i];
      newArr[i] = t;
    }
    return newArr;
  };

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
