import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleStartPointCTA,
  toggleEndPointCTA,
  setStartPoint,
  setEndPoint,
} from "../../slices/toolbarSlice";

function Square(props) {
  const dispatch = useDispatch();

  const [isMouseover, setIsMouseover] = useState(false);

  const isStartPointActive = useSelector(
    (state) => state.toolbar.isStartPointActive
  );
  const isEndPointActive = useSelector(
    (state) => state.toolbar.isEndPointActive
  );
  const isWallsActive = useSelector((state) => state.toolbar.isWallsActive);

  const isTouchDevice = () => {
    return window.matchMedia("(pointer: coarse)").matches;
  };

  function onMouseEnter(event) {
    setIsMouseover(true);

    if (isTouchDevice()) {
      onMouseLeave();
    }

    if (isWallsActive) {
      const target = event.target;
      if (target.classList.contains("wall")) {
        target.classList.remove("wall");
        target.setAttribute("value", "0");
      } else {
        target.classList.add("wall");
        target.setAttribute("value", "-1");
      }
    }
  }

  function onMouseLeave() {
    setTimeout(
      () => {
        setIsMouseover(false);
      },
      isEndPointActive || isStartPointActive ? 100 : 250
    );
  }

  function onMouseClick(event) {
    let target = event.target;

    if (isStartPointActive) {
      dispatch(toggleStartPointCTA());
      dispatch(setStartPoint(event.target.id));
      handleGoalLines("start", target);
    }

    if (isEndPointActive) {
      dispatch(toggleEndPointCTA());
      dispatch(setEndPoint(event.target.id));
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onMouseClick}
      className={`square`}
      key={`${props.row},${props.col}`}
      id={`${props.row},${props.col}`}
      value={0}
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
