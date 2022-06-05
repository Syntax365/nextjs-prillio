import Header from "../components/Header";
// import Footer from "../components/Footer";
import Head from "../components/Head";
import Body from "../components/Body";
import Matrix from "../components/Matrix";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearGraph } from "../helpers/gridHelper";
import { toggleStartPointCTA, toggleEndPointCTA } from "../slices/toolbarSlice";
import { setGridSize } from "../slices/gridSlice";

function Homepage() {
  const dispatch = useDispatch();

  const isStartPointActive = useSelector(
    (state) => state.toolbar.isStartPointActive,
  );
  const isEndPointActive = useSelector(
    (state) => state.toolbar.isEndPointActive,
  );

  const onStartClick = () => {
    dispatch(toggleStartPointCTA());
    if (isEndPointActive) {
      dispatch(toggleEndPointCTA());
    }
  };

  const onEndClick = () => {
    dispatch(toggleEndPointCTA());
    if (isStartPointActive) {
      dispatch(toggleStartPointCTA());
    }
  };

  const handleResize = () => {
    document
      .getElementById("body")
      .style.setProperty("height", `${window.innerHeight - 120}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Prill.io</title>
      </Head>
      <Header id="header" />
      <Body id="body" className={"justify-between h-[85vh]"}>
        <Matrix className={"w-full h-full"} />
        <Toolbar
          id="toolbar"
          className={"mt-1 mb-1 h-[60px] flex justify-center"}
        >
          <Button
            id="start-point-cta"
            onClick={onStartClick}
            className={`secondary border-gradiant mx-2 ${
              isStartPointActive ? "active-button" : ""
            }`}
          >
            <span className={"hidden sm:inline-block"}>Pick&nbsp;</span> Start
          </Button>
          <Button
            onClick={clearGraph}
            className={"secondary mx-2 border-gradiant"}
          >
            Clear
          </Button>
          <Button
            id="end-point-cta"
            onClick={onEndClick}
            className={`border-gradiant secondary  mx-2 ${
              isEndPointActive ? "active-button" : ""
            }`}
          >
            <span className={"hidden sm:inline-block"}>Pick&nbsp;</span> End
          </Button>
        </Toolbar>
      </Body>
      {/* <Footer /> */}
    </>
  );
}

export default Homepage;
