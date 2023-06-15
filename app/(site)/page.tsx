import React from "react";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="relative w-[100%] flex flex-col items-center justify-between h-auto bg-[url('/images/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-contain bg-y-[-50%]">
      <Header />
    </div>
  );
};

export default HomePage;
