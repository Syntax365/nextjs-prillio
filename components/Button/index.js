function Button({ className = "", onClick, children }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
}

export default Button;
