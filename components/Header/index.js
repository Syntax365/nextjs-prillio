import Button from "../Button";
import DropDown from "../DropDown";

import { useSelector } from "react-redux";
import { BFS, getShortestPath } from "../../helpers/algorithms";

function Header({ ...moreProps }) {
  const startPoint = useSelector((state) => state.toolbar.startPoint);
  const gridDemensions = useSelector((state) => state.grid.gridDemensions);
  const algorithmSelected = useSelector(
    (state) => state.toolbar.selectedAlgorithm
  );

  const runFunction = async () => {
    if (typeof window != undefined) {
      switch (algorithmSelected) {
        case "BFS":
          await BFS(
            gridDemensions.rows,
            gridDemensions.columns,
            startPoint
          ).then((endNode) => {
            if (endNode) {
              getShortestPath(endNode);
            }
          });
          break;
        default:
          break;
      }
    }
  };

  return (
    <div
      {...moreProps}
      className={
        "header h-[60px] border-bottom shadow-bottom w-full sticky px-4 z-10"
      }
    >
      <div className={"flex flex-row items-center h-full"}>
        <div className={"flex flex-grow"}>
          <div className={"flex items-center h-14"}>
            <img
              className={"h-full hidden sm:block"}
              src={"./prilltech_logo.svg"}
            />
          </div>
          <div className={"flex items-center"}>
            <h2 className={"text-3xl"}>Prill.io</h2>
          </div>
        </div>
        <DropDown />
        <Button onClick={runFunction} className={"primary"}>
          Run Code
        </Button>
      </div>
    </div>
  );
}

export default Header;
