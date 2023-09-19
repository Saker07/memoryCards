import React, { useEffect } from "react";

function GameConfig({ gameConfig, setGameConfig }) {
  let handleClick = (e) => {
    let { name, value } = e.target;
    console.log(name);
    console.log(value);
    console.log(gameConfig);
    let a = { ...gameConfig, [name]: value };
    console.log(a);
    setGameConfig((gameConfig) => {
      return { ...gameConfig, [name]: value };
    });
    console.log(gameConfig);
  };

  useEffect(() => {
    setGameConfig(gameConfig);
  }, []);

  return (
    <div>
      <h3>Game Config:</h3>
      {JSON.stringify(gameConfig)}
      <div>
        <label>
          Hints:
          <input
            type="checkbox"
            name="hintsEnabled"
            checked={gameConfig.hintsEnabled}
            onChange={(e) =>
              setGameConfig((prev) => {
                return { ...prev, [e.target.name]: e.target.checked };
              })
            }
          ></input>
        </label>
        <label>
          Hints card face:
          <select
            name="hintFace"
            value={gameConfig.hintFace}
            onChange={handleClick}
          >
            <option value="roumaji">Roumaji</option>
            <option value="hira">Hiragana</option>
            <option value="kata">Katakana</option>
          </select>
        </label>
        <label>
          Game card face:
          <select
            name="gameFace"
            value={gameConfig.gameFace}
            onChange={handleClick}
          >
            <option value="roumaji">Roumaji</option>
            <option value="hira">Hiragana</option>
            <option value="kata">Katakana</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default GameConfig;
