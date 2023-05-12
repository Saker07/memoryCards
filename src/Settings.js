import React from "react";
import GameConfig from "./GameConfig.js";
import StyleConfig from "./StyleConfig.js";
import AdvancedConfig from "./AdvancedConfig.js";

function Settings(props) {
  //prop needed: setConfig, which will be passed as a specific setter
  //props needed: config, which is divided in gameconfig, style config and advanced config
  let setSubConfig = (key, value) => {
    props.setConfig((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  return (
    <div>
      <GameConfig
        gameConfig={props.config.game}
        setGameConfig={(value) => setSubConfig("game", value)}
      />
      <StyleConfig
        styleConfig={props.config.style}
        setStyleConfig={(value) => setSubConfig("style", value)}
      />
      <AdvancedConfig
        advancedConfig={props.config.advanced}
        setAdvancedConfig={(value) => setSubConfig("advanced", value)}
      />
    </div>
  );
}

export default Settings;
