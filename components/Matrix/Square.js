import React from "react";
import { useState } from "react";

function Square(props) {
  const [isActive, setIsActive] = useState(false);

  function onMouseEnter() {
    setIsActive(true);
  }

  function onMouseLeave() {
    setTimeout(() => {
      setIsActive(false);
    }, 250);
  }

  return (
    <th
      coordinates={[props.row, props.col]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={isActive ? "color-purple" : ""}
      key={`${props.row}, ${props.col}`}
      style={{
        borderWidth: "1px",
        borderColor: "#107896",
        width: "20px",
        height: "20px",
        borderStyle: "solid",
      }}
    />
  );
}

export default Square;
