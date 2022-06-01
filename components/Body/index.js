function Body(props) {
  return (
    <div className={`px-4 py-4 lg:mx-auto ${props?.className || ""}`}>
      {props?.children}
    </div>
  );
}

export default Body;
