import React, { useState, useEffect } from "react";

function Card(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.handleClick(props.element.id);
      }}
    >
      /-card_{props.element.id}_{props.element.hit.toString()}_
      {props.element[props.gameFace]}-/
    </div>
  );
}

export default Card;
