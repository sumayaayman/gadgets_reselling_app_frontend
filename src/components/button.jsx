import "./button.css";

const Button = ({ children, type }) => {
  return (
    <button className={`btn btn-${type || 'primary'}`}>{children}</button>
  )
};

export default Button
