import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Body from "../components/Body";
import Matrix from "../components/Matrix";
import Toolbar from "../components/Toolbar";
import Button from "../components/Button";

import { startPointClick } from "../helpers/gridHelper";

function startMatrix() {
  const coord = [0, 0];
  document
    .querySelectorAll(`[coordinates="${coord[0]},${coord[1]}"]`)
    .forEach((element) => {
      element.classList.add("color-purple");
    });
}

function clearGraph() {
  let clearArr = document.getElementsByClassName("color-purple");
  for (let i = 0; i < clearArr.length; i++) {
    clearArr[i].classList.remove("color-purple");
    i--;
  }
}

function Homepage() {
  return (
    <>
      <Head>
        <title>Prill.io</title>
      </Head>
      <Header />
      <Body className={"justify-between items-center"}>
        <Toolbar className={"border h-[60px] my-4 flex justify-center"}>
          <Button onClick={startPointClick} className={"secondary mx-2"}>
            Pick Start Point
          </Button>
          <Button onClick={clearGraph} className={"secondary mx-2"}>
            Clear Graph
          </Button>
        </Toolbar>
        <Matrix className={"w-full h-[50vh]"} />
        <Toolbar className={"border h-[60px] my-4 flex justify-center"}>
          <Button onClick={startMatrix} className={"secondary mx-2"}>
            Matrix Spiral
          </Button>
        </Toolbar>
      </Body>
      <Footer />
    </>
  );
}

export default Homepage;
