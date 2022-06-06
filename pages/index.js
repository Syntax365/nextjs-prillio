import Header from "../components/Header";
// import Footer from "../components/Footer";
import Head from "../components/Head";
import Content from "../components/Content";
import Matrix from "../components/Matrix";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";

import { useSelector, useDispatch } from "react-redux";
import { clearGraph } from "../helpers/gridHelper";
import {
  toggleStartPointCTA,
  toggleEndPointCTA,
  toggleAddWallsCTA,
} from "../slices/toolbarSlice";

function Homepage() {
  const dispatch = useDispatch();

  const isStartPointActive = useSelector(
    (state) => state.toolbar.isStartPointActive
  );
  const isEndPointActive = useSelector(
    (state) => state.toolbar.isEndPointActive
  );
  const isWallsActive = useSelector((state) => state.toolbar.isWallsActive);

  const onStartClick = () => {
    dispatch(toggleStartPointCTA());
    if (isEndPointActive) {
      dispatch(toggleEndPointCTA());
    }
    if (isWallsActive) {
      dispatch(toggleAddWallsCTA());
    }
  };

  const onEndClick = () => {
    dispatch(toggleEndPointCTA());
    if (isStartPointActive) {
      dispatch(toggleStartPointCTA());
    }
    if (isWallsActive) {
      dispatch(toggleAddWallsCTA());
    }
  };

  const onWallsClick = () => {
    dispatch(toggleAddWallsCTA());
    if (isStartPointActive) {
      dispatch(toggleStartPointCTA());
    }
    if (isEndPointActive) {
      dispatch(toggleEndPointCTA());
    }
  };

  return (
    <>
      <Head>
        <title>Prill.io</title>
        {/* <meta name="viewport" content="viewport-fit=cover" /> */}
      </Head>
      <Header id="header" />
      <Content id="body" className={"w-full jusitfy-center"}>
        <Matrix className={"h-full"} />

        <Toolbar id="toolbar" className={"h-[60px] flex justify-center"}>
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
          <Button
            id="end-point-cta"
            onClick={onWallsClick}
            className={`border-gradiant secondary  mx-2 ${
              isWallsActive ? "active-button" : ""
            }`}
          >
            <span className={"hidden sm:inline-block"}>Add&nbsp;</span> Wall
          </Button>
        </Toolbar>
      </Content>
      {/* <Footer /> */}
    </>
  );
}

export default Homepage;
