"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="relative w-[100%] flex flex-col items-center justify-between h-[100%] bg-[url('/images/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-auto bg-top lg:bg-right-top gap-20">
      <Header />
      <Container className="flex flex-col md:flex-row-reverse justify-center items-center">
        <div className="relative w-[100%] lg:w-[50%] aspect-square ">
          <Image
            src="/images/home/desktop/illustration-phone-mockup.svg"
            fill
            className="object-contain z-0"
            alt="Mobile Cover"
          />
        </div>
        <div className="w-[100%] lg:w-[50%] flex flex-col lg:items-start justify-center items-center lg:justify-start">
          <h1 className="w-[100%] text-center lg:text-left text-headingMedium lg:text-headingLarge  font-serif font-bold text-sanJuanBlue leading-tight">
            Start building with your APIs for absolutely free.
          </h1>
          <div className="mt-8 w-full">
            <Input />
          </div>
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
      <Container className="flex flex-col justify-center items-center w-full gap-8 bg-[url('/images/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-auto bg-right">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="relative aspect-square w-full lg:w-[50%]">
            <Image
              src="/images/home/desktop/illustration-easy-to-implement.svg"
              fill
              className="object-contain"
              alt="Easy to Implement"
            />
          </div>
          <div className="w-full lg:w-[50%] flex flex-col justify-center items-center gap-2">
            <h2 className="text-sanJuanBlue text-headingSmall font-serif font-bold w-full text-center lg:text-left">
              Easy to implement
            </h2>
            <p className="text-bodyText text-lightSanJuanBlue  w-full text-center lg:text-left">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center">
          <div className="w-full lg:w-[50%] flex flex-col justify-center items-center gap-2">
            <h2 className="text-sanJuanBlue text-headingSmall font-serif font-bold w-full text-center lg:text-left">
              Simple UI & UX
            </h2>
            <p className="text-bodyText text-lightSanJuanBlue  w-full text-center lg:text-left">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
          <div className="relative aspect-square w-full lg:w-[50%]">
            <Image
              src="/images/home/desktop/illustration-simple-ui.svg"
              fill
              alt="Easy to Implement"
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/images/home/desktop/icon-personal-finances.svg"
              width={80}
              height={80}
              alt="Icon"
            />
            <h3 className="w-full text-center text-headingExtraExtraSmall font-bold text-sanJuanBlue">
              Personal Finance
            </h3>
            <p className="w-full text-center text-bodyText text-lightSanJuanBlue">
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/images/home/desktop/icon-banking-and-coverage.svg"
              width={80}
              height={80}
              alt="Icon"
            />
            <h3 className="w-full text-center text-headingExtraExtraSmall font-bold text-sanJuanBlue">
              Banking & Coverage
            </h3>
            <p className="w-full text-center text-bodyText text-lightSanJuanBlue">
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/images/home/desktop/icon-consumer-payments.svg"
              width={80}
              height={80}
              alt="Icon"
            />
            <h3 className="w-full text-center text-headingExtraExtraSmall font-bold text-sanJuanBlue">
              Consumer Payments
            </h3>
            <p className="w-full text-center text-bodyText text-lightSanJuanBlue">
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
          <h1 className="w-full text-center lg:text-left lg:w-[50%] text-headingMedium text-sanJuanBlue font-serif font-bold">
            Ready to start?
          </h1>
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-end items-center">
            <Input prompt={false} className="w-full" />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
