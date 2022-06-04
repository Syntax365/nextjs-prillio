function Body({ children = "", className = "", ...moreProps }) {
  return (
    <div className={`px-4 py-4 lg:mx-auto ${className || ""}`} {...moreProps}>
      {children}
    </div>
  );
}

export default Body;
