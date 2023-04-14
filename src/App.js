import React, {useState, useEffect} from 'react';

function App() {
  let [cards, setCards] = useState([]);
  let [currScore, setCurrScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);

  let handleClick = (id)=>{
    //card with correct id, make it hit=true if false, otherside all hit in cards set to false and currscore set to 0
    if(cards[id].hit){
      setCurrScore(0);
    } else{
      setCards((prev)=>{
        let newArr = [...prev];
        newArr[id].hit = true;
        return newArr;
      });
      setCurrScore((prev)=>{return prev+1});
    }
  }
  let createShuffledCopy = (arr)=>{
    console.log('after mount during render')
    let newArr = [...arr];

    let m = newArr.length;
    let i;
    while(m){
      let i = Math.floor(Math.random() *  m--);

      let t = newArr[m];
      newArr[m] = newArr[i];
      newArr[i] = t;
    }

    return newArr;

  }
  useEffect(()=>{
    setCards([{id: 0, hit: false},{id: 1, hit: false},{id: 2, hit: false},{id: 3, hit: false},{id: 4, hit: false},{id: 5, hit: false}])
    console.log('mount')
  }, []);
  useEffect(()=>{
    if(currScore === 0){
      setCards((prev)=>{
        let newArr = prev.map(elem=>{elem.hit = false; return elem});
        return newArr;
      })
    }else if(currScore > bestScore){
      setBestScore(currScore);
    }
  }, [currScore]);

  return (
    <div className="game">
      {createShuffledCopy(cards).map(element=>{
        return <div onClick={()=>{handleClick(element.id)}}>/-card_{element.id}_{element.hit.toString()}-/</div>
      })}
      <div>{currScore}</div>
      <div>{bestScore}</div>
    </div>
  );
}

export default App;
