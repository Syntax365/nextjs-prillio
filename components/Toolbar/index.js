function Toolbar({ children, className = "", ...moreProps }) {
  return (
    <div {...moreProps} className={`items-center ${className}`}>
      {children}
    </div>
  );
}

export default Toolbar;
