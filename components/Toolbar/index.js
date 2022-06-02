function Toolbar({ children, className = "" }) {
  return <div className={`items-center ${className}`}>{children}</div>;
}

export default Toolbar;
