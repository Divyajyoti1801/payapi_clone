"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsCheck } from "react-icons/bs";
import Container from "../components/Container";
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";
import Header from "../components/Header";
import Input from "../components/Input";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      title: "",
      message: "",
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};
  //Not required developing only front-end

  return (
    <div className="relative w-[100%] flex flex-col items-center justify-between h-[100%] bg-[url('/images/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-auto bg-top lg:bg-right-top gap-20">
      <Header />
      <Container>
        <h1 className="text-headingMedium w-full text-center font-serif text-sanJuanBlue font-semiBold">
          Submit a help request and we’ll get in touch shortly.
        </h1>
      </Container>
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5 justify-center items-center"
        >
          <FormInput
            id="name"
            label="Name"
            type="text"
            required
            register={register}
            errors={errors}
          />
          <FormInput
            id="email"
            label="Email"
            type="email"
            required
            register={register}
            errors={errors}
          />
          <FormInput
            id="companyName"
            label="Company Name"
            type="text"
            required
            register={register}
            errors={errors}
          />
          <FormInput
            id="title"
            label="Title"
            type="text"
            required
            register={register}
            errors={errors}
          />
          <FormInput
            id="message"
            label="Message"
            type="text"
            required
            register={register}
            errors={errors}
          />
          <div className="w-full flex flex-row justify-start items-center gap-4">
            <div
              className="flex justify-center items-center w-[30px] h-[30px] bg-lightSanJuanBlue/40  cursor-pointer rounded-md"
              onClick={checkHandler}
            >
              {isChecked && (
                <BsCheck className="text-linkWaterWhite transition" size={25} />
              )}
            </div>
            <p className="w-full flex justify-start items-center text-lightSanJuanBlue font-semibold">
              Stay up-to-date with company announcements and updates to our API
            </p>
          </div>
          <div className="w-full flex justify-start items-center">
            <button
              type="submit"
              className="border-[1px] border-sanJuanBlue bg-transparent rounded-full py-2 px-8 font-bold text-sanJuanBlue hover:bg-sanJuanBlue hover:text-linkWaterWhite transition"
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
      <Container className="flex flex-col justify-center items-center gap-8">
        <h1 className="w-full text-center text-headingSmall text-lightSanJuanBlue font-serif">
          Join the thousands of innovators already building with us
        </h1>
        <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/dark/tesla.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/dark/microsoft.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/dark/hewlett-packard.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/dark/oracle.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/dark/google.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/shared/desktop/dark/nvidia.svg"
              width={100}
              height={100}
              alt="Company Image"
            />
          </div>
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

export default Contact;
