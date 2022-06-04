import Button from "../Button";
import DropDown from "../DropDown";

function Header() {
  const runFunction = () => {
    if (typeof window != undefined) {
      window.runSpiralMatrix();
    }
  };

  return (
    <div
      className={
        "header h-[60px] border-bottom shadow-bottom w-full sticky px-4 z-10"
      }
    >
      <div className={"flex flex-row items-center h-full"}>
        <div className={"flex flex-grow"}>
          <div className={"flex items-center h-14"}>
            <img className={"h-full"} src={"./prilltech_logo.svg"} />
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
