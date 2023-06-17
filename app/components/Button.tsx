import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClickHandler?: () => void;
  border?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClickHandler,
  className,
  border,
}) => {
  return (
    <button
      className={twMerge(
        `py-[14px] rounded-full font-bold ${
          !border && "border-none"
        } transition`,
        className
      )}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
