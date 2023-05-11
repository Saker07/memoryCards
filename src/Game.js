import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import json from "./cards.json";
import Hints from "./Hints.js";

function Game() {
  let [cards, setCards] = useState([]);
  let [currScore, setCurrScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [gameFace, setGameFace] = useState("front"); //front | back | altBack
  let [hintFace, setHintFace] = useState("back");
  let [hints, setHints] = useState([]);

  const numberOfCards = 6;

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
    setCards(createShuffledCopy([...json.cards]).slice(0, numberOfCards));
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
      <Hints hints={hints} hintFace={hintFace} />
      <div className="cardsHolder">
        {cards.map((element) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Card
              element={element}
              gameFace={gameFace}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      <div>{currScore}</div>
      <div>{bestScore}</div>
    </div>
  );
}

export default Game;
