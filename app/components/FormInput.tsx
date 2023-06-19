"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <input
      id={id}
      {...register(id, { required })}
      placeholder={label}
      type={type}
      required={required}
      className="w-full outline-none font-semibold border-b-[2px] border-lightSanJuanBlue/50 p-4 text-headingExtraExtraSmall text-sanJuanBlue placeholder:text-lightSanJuanBlue/50 bg-transparent"
    />
  );
};

export default FormInput;
