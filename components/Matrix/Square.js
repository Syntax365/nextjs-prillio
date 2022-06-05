import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleStartPointCTA,
  toggleEndPointCTA,
} from "../../slices/toolbarSlice";

function Square(props) {
  const dispatch = useDispatch();

  const [isMouseover, setIsMouseover] = useState(false);
  const isStartPointActive = useSelector(
    (state) => state.toolbar.isStartPointActive,
  );
  const isEndPointActive = useSelector(
    (state) => state.toolbar.isEndPointActive,
  );

  const touchsupport =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  function onMouseEnter() {
    setIsMouseover(true);

    if (touchsupport) {
      onMouseLeave();
    }
  }

  function onMouseLeave() {
    setTimeout(
      () => {
        setIsMouseover(false);
      },
      isEndPointActive || isStartPointActive ? 100 : 250,
    );
  }

  function onMouseClick(event) {
    let target = event.target;

    if (isStartPointActive) {
      dispatch(toggleStartPointCTA());
      handleGoalLines("start", target);
    }

    if (isEndPointActive) {
      dispatch(toggleEndPointCTA());
      handleGoalLines("end", target);
    }
  }

  function handleGoalLines(goal, target) {
    let prevPoint = document.querySelector(`[${goal}]`);
    if (prevPoint) {
      prevPoint.removeAttribute(goal);
    }
    target.setAttribute(goal, true);
  }

  return (
    <th
      coordinates={[props.row, props.col]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onMouseClick}
      className={`square`}
      key={`${props.row}, ${props.col}`}
      style={{
        borderWidth: "1px",
        borderColor: "#107896",
        width: "20px",
        height: "20px",
        borderStyle: "solid",
        transform: isMouseover ? "scale(1.22)" : "scale(1)",
        backgroundColor: isMouseover
          ? isStartPointActive
            ? "#e100ff"
            : isEndPointActive
            ? "#1f4277"
            : null
          : null,
      }}
    />
  );
}

export default Square;
