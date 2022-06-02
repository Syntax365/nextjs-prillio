import { useState } from "react";

import { startPointPicker } from "../../helpers/squareHelper";

function Square(props) {
  const [isActive, setIsActive] = useState(false);
  const [isMouseover, setIsMouseover] = useState(false);

  function onMouseEnter() {
    setIsMouseover(true);
  }

  function onMouseLeave() {
    setTimeout(() => {
      setIsMouseover(false);
    }, 250);
  }

  function onMouseClick(event) {
    let target = event.target;
    if (document.getElementsByClassName("active-button").length > 0) {
      startPointPicker(target);
    }
  }

  return (
    <th
      coordinates={[props.row, props.col]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onMouseClick}
      className={"square"}
      key={`${props.row}, ${props.col}`}
      style={{
        borderWidth: "1px",
        borderColor: "#107896",
        width: "20px",
        height: "20px",
        borderStyle: "solid",
        transform: isMouseover ? "scale(1.22)" : "scale(1)",
      }}
    />
  );
}

export default Square;
