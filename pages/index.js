import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Body from "../components/Body";
import Matrix from "../components/Matrix";

function Homepage() {
  return (
    <>
      <Head>
        <title>Prill.io</title>s
      </Head>
      <Header />
      <Body className={"flex justify-between items-center"}>
        <Matrix className={"w-full h-[50vh]"} />
      </Body>
      <Footer />
    </>
  );
}

export default Homepage;
