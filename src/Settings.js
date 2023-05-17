import React from "react";
import GameConfig from "./GameConfig.js";
import StyleConfig from "./StyleConfig.js";
import AdvancedConfig from "./AdvancedConfig.js";

function Settings({ config, setConfig }) {
  //prop needed: setConfig, which will be passed as a specific setter
  //props needed: config, which is divided in gameconfig, style config and advanced config
  let setSubConfig = (key, value) => {
    setConfig((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  return (
    <div>
      <GameConfig
        gameConfig={config.game}
        setGameConfig={(value) => setSubConfig("game", value)}
      />
      <StyleConfig
        styleConfig={config.style}
        setStyleConfig={(value) => setSubConfig("style", value)}
      />
      <AdvancedConfig
        advancedConfig={config.advanced}
        setAdvancedConfig={(value) => setSubConfig("advanced", value)}
      />
    </div>
  );
}

export default Settings;
