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
    (state) => state.toolbar.isStartPointActive
  );
  const isEndPointActive = useSelector(
    (state) => state.toolbar.isEndPointActive
  );

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

    if (isStartPointActive) {
      dispatch(toggleStartPointCTA());
      let prevStartPoint = document.querySelector("[start]");
      if (prevStartPoint) {
        prevStartPoint.removeAttribute("start");
      }
      target.setAttribute("start", true);
      //TODO: Add Start Point to State; Remove previous start points.
    }

    if (isEndPointActive) {
      dispatch(toggleEndPointCTA());
      let prevEndPoint = document.querySelector("[end]");
      if (prevEndPoint) {
        prevEndPoint.removeAttribute("end");
      }
      target.setAttribute("end", true);
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
