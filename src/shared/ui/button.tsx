interface ButtonProps {
  handleClick: () => void;
  value: string;
}

const Button = ({ handleClick, value }: ButtonProps) => {
  return <button onClick={handleClick}>{value}</button>
}

export default Button
