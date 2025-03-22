import classes from "./Card.module.css";

const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, className, onClick }) => {
  return (
    <div className={`${classes.card} ${className ?? ""}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
