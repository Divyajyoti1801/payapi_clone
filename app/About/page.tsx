import Image from "next/image";
import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="relative w-[100%] flex flex-col items-center justify-between h-[100%] bg-[url('/images/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-auto bg-top lg:bg-right-top gap-20">
      <Header />
      <Container>
        <h1 className="text-headingMedium w-full text-center font-serif text-sanJuanBlue font-semiBold">
          We empower innovators by delivering access to the financial system
        </h1>
      </Container>
      <Container className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-between gap-5">
        <h1 className="w-full md:w-[30%] text-headingSmall text-center md:text-left font-serif text-sanJuanBlue font-semiBold">
          Our Vision
        </h1>
        <p className="w-full md:w-[70%] text-lightSanJuanBlue text-center md:text-left">
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.
        </p>
      </Container>
      <Container className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-between gap-5">
        <h1 className="w-full md:w-[30%] text-headingSmall text-center md:text-left font-serif text-sanJuanBlue font-semiBold">
          Our Business
        </h1>
        <p className="w-full md:w-[70%] text-lightSanJuanBlue text-center md:text-left">
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.At the core of our
          platform is the technical infrastructure APIs that connect consumers.
          Our innovative product provides key insights for businesses and
          individuals, as well as robust reporting for traditional financial
          institutions and developers.
        </p>
      </Container>
      <div className="w-full relative aspect-square h-[50vh]">
        <Image
          src="/images/about/desktop/image-team-members.jpg"
          fill
          className="object-cover"
          alt="meeting"
        />
      </div>
      <Container className="w-full  flex flex-col md:flex-row justify-center items-center  lg:justify-space gap-4">
        <div className="w-full h-full border-t-[2px] md:border-t-[2px] md:border-b-[2px] md:border-grey-300">
          <p className="w-full md:hidden text-bodyText text-center text-lightSanJuanBlue">
            Team Members
          </p>
          <h1 className="w-full text-center md:text-left text-headingExtraLarge text-customDarkPink font-serif">
            300+
          </h1>
        </div>
        <div className="w-full h-full md:border-t-[2px] md:border-b-[2px] md:border-grey-300">
          <p className="w-full md:hidden text-bodyText text-lightSanJuanBlue text-center">
            Offices in the US
          </p>
          <h1 className="w-full text-center md:text-left text-headingExtraLarge text-customDarkPink font-serif">
            3
          </h1>
        </div>
        <div className="w-full h-full md:border-t-[2px] border-b-[2px] md:border-grey-300">
          <p className="w-full md:hidden text-bodyText text-center text-lightSanJuanBlue">
            Transactions analyzed
          </p>
          <h1 className="w-full text-center md:text-left text-headingExtraLarge text-customDarkPink font-serif">
            10M+
          </h1>
        </div>
      </Container>
      <Container className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-between gap-5">
        <h1 className="w-full md:w-[30%] text-headingSmall text-center md:text-left font-serif text-sanJuanBlue font-semiBold">
          The Culture
        </h1>
        <p className="w-full md:w-[70%] text-lightSanJuanBlue text-center md:text-left">
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
      </Container>
      <Container className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-between gap-5">
        <h1 className="w-full md:w-[30%] text-headingSmall text-center md:text-left font-serif text-sanJuanBlue font-semiBold">
          The People
        </h1>
        <p className="w-full md:w-[70%] text-lightSanJuanBlue text-center md:text-left">
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
