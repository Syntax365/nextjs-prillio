import Header from "../components/Header";
// import Footer from "../components/Footer";
import Head from "../components/Head";
import Body from "../components/Body";
import Matrix from "../components/Matrix";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";

import { clearGraph } from "../helpers/gridHelper";
import { useSelector, useDispatch } from "react-redux";
import { toggleStartPointCTA, toggleEndPointCTA } from "../slices/toolbarSlice";

function Homepage() {
  const dispatch = useDispatch();

  const isStartPointActive = useSelector(
    (state) => state.toolbar.isStartPointActive
  );
  const isEndPointActive = useSelector(
    (state) => state.toolbar.isEndPointActive
  );
  return (
    <>
      <Head>
        <title>Prill.io</title>
      </Head>
      <Header />
      <Body className={"justify-between items-center"}>
        <Toolbar className={"mt-1 mb-1 h-[60px] flex justify-center"}>
          <Button
            id="start-point-cta"
            onClick={() => dispatch(toggleStartPointCTA())}
            className={`secondary mx-2 ${
              isStartPointActive ? "active-button" : ""
            }`}
          >
            <span className={"hidden sm:inline-block"}>Pick</span> Start
          </Button>
          <Button onClick={clearGraph} className={"secondary mx-2"}>
            Clear
          </Button>
          <Button
            id="end-point-cta"
            onClick={() => dispatch(toggleEndPointCTA())}
            className={`secondary mx-2 ${
              isEndPointActive ? "active-button" : ""
            }`}
          >
            <span className={"hidden sm:inline-block"}>Pick</span> End
          </Button>
        </Toolbar>
        <Matrix className={"w-full h-[65vh]"} />
      </Body>
      {/* <Footer /> */}
    </>
  );
}

export default Homepage;
