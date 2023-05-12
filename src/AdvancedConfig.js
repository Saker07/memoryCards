import React from "react";

function AdvancedConfig(props) {
  return (
    <div>
      <h3>Config:</h3>
      {JSON.stringify(props.advancedConfig)}
    </div>
  );
}

export default AdvancedConfig;
