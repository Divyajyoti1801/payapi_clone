import Image from "next/image";
import Button from "../components/Button";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";

const Pricing = () => {
  return (
    <div className="relative w-[100%] flex flex-col items-center justify-between h-[100%] bg-[url('/images/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-auto bg-[center_-50%] lg:bg-[right_top_-80%] gap-20">
      <Header />
      <Container>
        <h1 className="text-headingMedium w-full text-center font-serif text-sanJuanBlue font-semiBold">
          Pricing
        </h1>
      </Container>
      <Container className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <div className="w-full md:w-auto flex flex-col gap-5 justify-center items-center">
          <h1 className="w-full text-center text-customDarkPink text-headingSmall font-bold font-serif">
            Free Plan
          </h1>
          <p className="hidden md:block text-center text-bodyText text-lightSanJuanBlue">
            Build and test using our core set of products with up to 100 API
            requests
          </p>
          <div className="w-full flex text-center items-center py-2 border-b-[2px] border-gray-200">
            <h1 className="w-full text-center text-sanJuanBlue text-headingLarge font-serif font-bold">
              $0.00
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center border-b-[2px] border-gray-200 gap-5 pb-5">
            <div className="w-[40%] flex flex-row justify-between items-center ">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-sanJuanBlue font-semibold">
                Transactions
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-sanJuanBlue font-semibold">
                Auth
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-sanJuanBlue font-semibold">
                Identity
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]"></div>
              <p className="w-[50%] text-bodyText text-lightSanJuanBlue font-semibold">
                Investments
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]"></div>
              <p className="w-[50%] text-bodyText text-lightSanJuanBlue  font-semibold">
                Assets
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]"></div>
              <p className="w-[50%] text-bodyText text-lightSanJuanBlue  font-semibold">
                Liabilities
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]"></div>
              <p className="w-[50%] text-bodyText text-lightSanJuanBlue font-semibold">
                Income
              </p>
            </div>
          </div>
          <Button
            text="Request Access"
            border
            className="border-[2px] text-mirageBlue border-mirageBlue w-[50%] md:w-[80%] hover:bg-mirageBlue hover:text-linkWaterWhite active:bg-mirageBlue active:text-linkWaterWhite"
          />
        </div>
        <div className="w-full md:w-auto flex flex-col gap-5 justify-center items-center">
          <h1 className="w-full text-center text-customDarkPink text-headingSmall font-bold font-serif">
            Basic Plan
          </h1>
          <p className="hidden md:block text-center text-bodyText text-lightSanJuanBlue">
            Build and test using our core set of products with up to 100 API
            requests
          </p>
          <div className="w-full flex text-center items-center py-2 border-b-[2px] border-gray-200">
            <h1 className="w-full text-center text-sanJuanBlue text-headingLarge font-serif font-bold">
              $249.00
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center border-b-[2px] border-gray-200 gap-5 pb-5">
            <div className="w-[40%] flex flex-row justify-between items-center ">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-sanJuanBlue font-semibold">
                Transactions
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-sanJuanBlue font-semibold">
                Auth
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-sanJuanBlue font-semibold">
                Identity
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-mirageBlue font-semibold">
                Investments
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-mirageBlue  font-semibold">
                Assets
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]"></div>
              <p className="w-[50%] text-bodyText text-lightSanJuanBlue  font-semibold">
                Liabilities
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]"></div>
              <p className="w-[50%] text-bodyText text-lightSanJuanBlue font-semibold">
                Income
              </p>
            </div>
          </div>
          <Button
            text="Request Access"
            border
            className="border-[2px] text-mirageBlue border-mirageBlue w-[50%] md:w-[80%] hover:bg-mirageBlue hover:text-linkWaterWhite active:bg-mirageBlue active:text-linkWaterWhite"
          />
        </div>
        <div className="w-full md:w-auto flex flex-col gap-5 justify-center items-center">
          <h1 className="w-full text-center text-customDarkPink text-headingSmall font-bold font-serif">
            Premium Plan
          </h1>
          <p className="hidden md:block text-center text-bodyText text-lightSanJuanBlue">
            Build and test using our core set of products with up to 100 API
            requests
          </p>
          <div className="w-full flex text-center items-center py-2 border-b-[2px] border-gray-200">
            <h1 className="w-full text-center text-sanJuanBlue text-headingLarge font-serif font-bold">
              $499.00
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center border-b-[2px] border-gray-200 gap-5 pb-5">
            <div className="w-[40%] flex flex-row justify-between items-center ">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-sanJuanBlue font-semibold">
                Transactions
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-sanJuanBlue font-semibold">
                Auth
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-mirageBlue font-semibold">
                Identity
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-mirageBlue font-semibold">
                Investments
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-mirageBlue font-semibold">
                Assets
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-mirageBlue  font-semibold">
                Liabilities
              </p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <div className="w-[50%]">
                <Image
                  src="/images/shared/desktop/icon-check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
              </div>
              <p className="w-[50%] text-bodyText text-mirageBlue font-semibold">
                Income
              </p>
            </div>
          </div>
          <Button
            text="Request Access"
            border
            className="border-[2px] text-mirageBlue border-mirageBlue w-[50%] md:w-[80%] hover:bg-mirageBlue hover:text-linkWaterWhite active:bg-mirageBlue active:text-linkWaterWhite"
          />
        </div>
      </Container>
      <Container>
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

export default Pricing;
