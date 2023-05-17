import React from "react";

function AdvancedConfig(props) {
  return (
    <div>
      <h3>Advanced Config:</h3>
      {JSON.stringify(props.advancedConfig)}
    </div>
  );
}

export default AdvancedConfig;
