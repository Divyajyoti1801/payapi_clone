import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface InputProps {
  className?: string;
  prompt?: boolean;
}

const Input: React.FC<InputProps> = ({ className, prompt }) => {
  return (
    <div className={twMerge(`flex flex-col gap-5`, className)}>
      <div className="w-full bg-white rounded-full pl-4 flex flex-row justify-between items-center shadow-md">
        <input
          type="email"
          placeholder="Enter email address"
          className="bg-transparent outline-none font-semibold text-bodyText font-sans text-sanJuanBlue/70 placeholder:text-lightSanJuanBlue/50 cursor-pointer w-[60%] h-full"
        />
        <Button
          text="Schedule a Demo"
          className="bg-customDarkPink text-linkWaterWhite px-2 hover:bg-charmPinkActive hover:text-white w-[40%]"
        />
      </div>
      {prompt ?? (
        <p className="w-full text-center lg:text-left text-lightSanJuanBlue pl-4 pt-3 text-bodyText">
          Have any questions?{" "}
          <Link href="/Contact" className="font-bold text-sanJuanBlue/70">
            Contact Us
          </Link>
        </p>
      )}
    </div>
  );
};

export default Input;
