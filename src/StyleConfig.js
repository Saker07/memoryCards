import React from "react";

function GameConfig(props) {
  return (
    <div>
      <h3>Config:</h3>
      {JSON.stringify(props.styleConfig)}
    </div>
  );
}

export default GameConfig;
