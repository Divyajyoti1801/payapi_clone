"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Button from "./Button";
import Container from "./Container";
const Header = () => {
  const [menuToggle, setMenuToggle] = useState(true);

  return (
    <Container className="flex flex-row justify-between items-center pt-[40px]">
      <div className="flex justify-center items-center">
        <Image
          src="/images/shared/desktop/logo.svg"
          width="120"
          height="120"
          alt="PayApi Logo"
        />
      </div>
      <div className="flex items-center justify-center md:hidden">
        <Image
          src="/images/shared/mobile/menu.svg"
          width={30}
          height={30}
          alt="Menu"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-start items-center md:hidden absolute top-0 right-0 bg-mirageBlue/95 w-[70%] h-[100vh] px-5">
        <div className="flex py-10 w-full justify-end items-center border-b-[1.8px] border-lightSanJuanBlue">
          <Image
            src="/images/shared/mobile/close.svg"
            width={20}
            height={20}
            alt="Close SVG"
          />
        </div>
        <div className="flex flex-col gap-10 w-full justify-center items-center mt-5">
          <Link
            href="/Pricing"
            className="font-bold text-linkWaterWhite text-headingExtraSmall"
          >
            Pricing
          </Link>
          <Link
            href="/About"
            className="font-bold text-linkWaterWhite text-headingExtraSmall"
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="font-bold text-linkWaterWhite text-headingExtraSmall"
          >
            Contact
          </Link>
          <Button
            text="Schedule Demo"
            className="bg-customDarkPink text-white hover:bg-charmPinkActive active:bg-charmPinkActive transition w-full"
          />
        </div>
      </div>
      <div className="hidden md:flex flex-row lg:w-full lg:ml-5 items-center gap-[40px]">
        <Link
          href="/Pricing"
          className="font-bold text-lightSanJuanBlue text-headingExtraExtraSmall"
        >
          Pricing
        </Link>
        <Link
          href="/About"
          className="font-bold text-lightSanJuanBlue text-headingExtraExtraSmall"
        >
          About
        </Link>
        <Link
          href="/Contact"
          className="font-bold text-lightSanJuanBlue text-headingExtraExtraSmall"
        >
          Contact
        </Link>
      </div>

      <Button
        text="Schedule Demo"
        className="hidden md:flex bg-customDarkPink text-white hover:bg-charmPinkActive active:bg-charmPinkActive transition"
      />
    </Container>
  );
};

export default Header;
