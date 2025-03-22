import classes from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  outline?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  onClick,
  outline,
  disabled,
}) => {
  const isClassName = className ?? "";
  const isOutline = outline ? classes.buttonOutline : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.button} ${isClassName} ${isOutline}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
