import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `w-full h-auto px-[24px] md:px-[39px] lg:px-[165px]`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
