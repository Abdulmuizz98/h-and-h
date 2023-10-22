const Button = ({ value, onClick, classes }) => {
  return (
    <button className={`custom-btn ${classes}`} onClick={() => onClick()}>
      {value}
    </button>
  );
};

export default Button;
