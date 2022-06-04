import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAlgorithm } from "../../slices/toolbarSlice";

import Button from "../Button";

function DropDown({ className = "" }) {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const dispatch = useDispatch();
  const selectedAlgorithm = useSelector(
    (state) => state.toolbar.selectedAlgorithm,
  );

  const dropDownItems = ["Linear Search", "BFS (Broken)", "DFS (Broken)"];

  const onDropDownClick = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  const handleItemSelection = (event) => {
    let target = event.target;
    dispatch(selectAlgorithm(target.id));
  };

  return (
    <div className={"mx-2 relative z-10"}>
      <Button
        onClick={onDropDownClick}
        className={`pointer border-gradiant-square flex flex-col sm:w-[165px] items-center bg-white ${className}`}
      >
        <div className={"flex flex-row text-center items-center"}>
          <span className="hidden sm:inline-block">Algorithms</span>
          <div className={"sm:ml-[8px] h-[25px] w-[25px] relative"}>
            <img
              className={"absolute top-[-2px]"}
              src={"./dropdown-icon-2.png"}
            />
          </div>
        </div>
      </Button>
      <div
        id="dropdown-container"
        style={{
          transition: "all 0.4s ease-in-out",
          display: isDropDownActive ? "block" : "none",
          top: isDropDownActive ? "" : "-50px",
          animation: "growDown 300ms ease-in-out forwards",
        }}
        className={`bg-white border-gradiant-square pointer absolute w-[165px]`}
      >
        {dropDownItems.map((item) => {
          return (
            <button
              id={item}
              onClick={handleItemSelection}
              key={item}
              className={
                "w-full flex flex-row justify-start items-center py-1 border-bottom dropdown-item"
              }
            >
              <div className={"h-[18px] w-[18px] mx-2"}>
                {item === selectedAlgorithm ? (
                  <img src="./checkmark.png" />
                ) : (
                  <img src="./emptycircle.svg" />
                )}
              </div>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DropDown;