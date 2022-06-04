import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStartPointCTA } from "../../slices/toolbarSlice";
import { startPointPicker } from "../../helpers/squareHelper";

function Square(props) {
  const dispatch = useDispatch();

  const isStartPointActive = useSelector(
    (state) => state.toolbar.isStartPointActive,
  );

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
    if (isStartPointActive) {
      dispatch(toggleStartPointCTA());
      target.setAttribute("start", true);
      console.log(target);
      //TODO: Add Start Point to State; Remove previous start points.
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
