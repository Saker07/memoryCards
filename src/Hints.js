import React from "react";

function Hints(props) {
  return (
    <div className="showHitCards">
      {props.hints.map((elem) => (
        // eslint-disable-next-line react/jsx-key
        <b>
          {" "}
          {elem.id}_{elem[props.hintFace]} |{" "}
        </b>
      ))}
    </div>
  );
}

export default Hints;
