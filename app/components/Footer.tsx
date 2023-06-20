import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
const Footer = () => {
  return (
    <Container className="color w-full bg-[center_120%] lg:bg-[right_-30%_top_20%] bg-[url('/images/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center py-[30px] gap-8">
      <div>
        <Image
          src="/images/shared/desktop/logo-light.svg"
          width={180}
          height={180}
          alt="logo"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <Link
          href="/Pricing"
          className="text-bodyText text-lightSanJuanBlue hover:text-linkWaterWhite active:text-linkWaterWhite font-semibold transition"
        >
          Pricing
        </Link>
        <Link
          href="/About"
          className="text-bodyText text-lightSanJuanBlue hover:text-linkWaterWhite active:text-linkWaterWhite font-semibold transition"
        >
          About
        </Link>
        <Link
          href="/Contact"
          className="text-bodyText text-lightSanJuanBlue hover:text-linkWaterWhite active:text-linkWaterWhite font-semibold transition"
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex items-center justify-center cursor-pointer">
          <Image
            src="/images/shared/desktop/facebook.svg"
            width={20}
            height={20}
            alt="icons"
          />
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <Image
            src="/images/shared/desktop/twitter.svg"
            width={20}
            height={20}
            alt="icons"
          />
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <Image
            src="/images/shared/desktop/linkedin.svg"
            width={20}
            height={20}
            alt="icons"
          />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
