import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClickHandler?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClickHandler, className }) => {
  return (
    <button
      className={twMerge(
        `p-[14px] border-none rounded-full font-bold`,
        className
      )}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
