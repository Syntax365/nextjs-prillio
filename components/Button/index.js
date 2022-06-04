function Button({ className = "", onClick, children, id = null }) {
  return (
    <button id={id} onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
}

export default Button;
