"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import Input from "../components/Input";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="relative w-[100%] flex flex-col items-center justify-between h-[100%] bg-[url('/images/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-auto bg-top lg:bg-right-top">
      <Header />
      <Container className="flex flex-col md:flex-row-reverse justify-center items-center mt-10">
        <div className="flex w-[100%] lg:w-[50%] aspect-square justify-center lg:justify-end items-center">
          <Image
            src="/images/home/desktop/illustration-phone-mockup.svg"
            width={400}
            height={400}
            className="object-cover"
            alt="Mobile Cover"
          />
        </div>
        <div className="w-[100%] lg:w-[50%] flex flex-col lg:items-start justify-center items-center lg:justify-start">
          <h1 className="w-[100%] text-center lg:text-left text-headingMedium lg:text-headingLarge  font-serif font-bold text-sanJuanBlue leading-tight">
            Start building with your APIs for absolutely free.
          </h1>
          <Input className="mt-8 w-full" />
        </div>
      </Container>
      <Container className="bg-mirageBlue py-[100px] bg-[url('/images/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-contain bg-center lg:bg-left flex flex-col-reverse lg:flex-row justify-center items-center">
        <div className="w-[100%] lg:w-[50%] flex flex-col justify-center items-center">
          <h1 className="w-full text-headingMedium text-center lg:text-left  font-serif text-linkWaterWhite">
            Whom we work with
          </h1>
          <p className="mt-4 w-full text-center lg:text-left  text-bodyText text-lightSanJuanBlue">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <div className="w-full flex justify-center lg:justify-start items-start mt-4">
            <Button
              text="About Us"
              onClickHandler={() => router.push("/About")}
              border
              className="text-linkWaterWhite border-linkWaterWhite border-2 px-4 hover:bg-linkWaterWhite hover:text-sanJuanBlue"
            />
          </div>
        </div>
        <div className="mb-5 lg:mb-0 w-[100%] lg:w-[50%] grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/tesla.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/microsoft.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/hewlett-packard.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/oracle.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/google.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/nvidia.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
