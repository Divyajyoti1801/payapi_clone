"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import Button from "./Button";
import Container from "./Container";
const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const menuOpen = useCallback(() => {
    setMenuToggle((value) => true);
  }, []);
  const menuClose = useCallback(() => {
    setMenuToggle((value) => false);
  }, []);

  return (
    <Container className="flex flex-row justify-between items-center pt-[40px]">
      <Link
        href="/"
        className="relative aspect-square flex justify-center items-center"
      >
        <Image
          src="/images/shared/desktop/logo.svg"
          width={130}
          height={130}
          alt="PayApi Logo"
        />
      </Link>
      <div className="flex items-center justify-center md:hidden">
        {!menuToggle && (
          <Image
            src="/images/shared/mobile/menu.svg"
            width={30}
            height={30}
            alt="Menu"
            className="cursor-pointer"
            onClick={menuOpen}
          />
        )}
      </div>
      {menuToggle && (
        <div className="flex flex-col justify-start items-center md:hidden absolute top-0 right-0 bg-mirageBlue/95 w-[70%] h-[100vh] px-5">
          <div className="flex py-10 w-full justify-end items-center border-b-[1.8px] border-lightSanJuanBlue">
            {menuToggle && (
              <Image
                src="/images/shared/mobile/close.svg"
                width={30}
                height={30}
                alt="Close SVG"
                onClick={menuClose}
              />
            )}
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
              className="bg-customDarkPink text-white hover:bg-charmPinkActive hover:text-white active:bg-charmPinkActive transition w-full"
            />
          </div>
        </div>
      )}
      <div className="hidden md:flex md:justify-start flex-row lg:w-full lg:ml-5 items-center gap-[40px]">
        <Link
          href="/Pricing"
          className="font-bold text-lightSanJuanBlue text-headingExtraExtraSmall hover:text-sanJuanBlue active:text-sanJuanBlue"
        >
          Pricing
        </Link>
        <Link
          href="/About"
          className="font-bold text-lightSanJuanBlue text-headingExtraExtraSmall hover:text-sanJuanBlue active:text-sanJuanBlue"
        >
          About
        </Link>
        <Link
          href="/Contact"
          className="font-bold text-lightSanJuanBlue text-headingExtraExtraSmall hover:text-sanJuanBlue active:text-sanJuanBlue"
        >
          Contact
        </Link>
      </div>

      <Button
        text="Schedule Demo"
        className="hidden md:block bg-customDarkPink text-white hover:bg-charmPinkActive active:bg-charmPinkActive hover:text-white transition px-18 md:w-[30%]"
      />
    </Container>
  );
};

export default Header;
