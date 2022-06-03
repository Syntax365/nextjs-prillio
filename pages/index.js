import Header from "../components/Header";
// import Footer from "../components/Footer";
import Head from "../components/Head";
import Body from "../components/Body";
import Matrix from "../components/Matrix";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";

import { startPointClick, clearGraph } from "../helpers/gridHelper";

function Homepage() {
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
            onClick={startPointClick}
            className={"secondary mx-2"}
          >
            Pick Start Point
          </Button>
          <Button onClick={clearGraph} className={"secondary mx-2"}>
            Clear Graph
          </Button>
          {/* <Button
            id="end-point-cta"
            onClick={endPointClick}
            className={"secondary mx-2"}
          >
            Pick End Point
          </Button> */}
        </Toolbar>
        <Matrix className={"w-full h-[65vh]"} />
      </Body>
      {/* <Footer /> */}
    </>
  );
}

export default Homepage;
