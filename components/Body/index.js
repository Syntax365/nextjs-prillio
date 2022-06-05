function Body({ children = "", className = "", ...moreProps }) {
  return (
    <div className={`lg:mx-auto ${className || ""}`} {...moreProps}>
      {children}
    </div>
  );
}

export default Body;
