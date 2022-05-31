function Button(props) {
  const className = props?.className ? props.className : "";

  return (
    <button onClick={props?.onClick} className={`button ${className}`}>
      {props?.children}
    </button>
  );
}

export default Button;
