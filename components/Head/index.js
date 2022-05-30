import Headz from "next/head";
function Head(props) {
  return <Headz>{props.children}</Headz>;
}

export default Head;
