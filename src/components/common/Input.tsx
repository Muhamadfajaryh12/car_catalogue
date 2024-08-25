import React from "react";
import { InputSpec } from "../../types/InputSpec";

const Input = ({
  type,
  title,
  isRequired,
  placeholder,
  register,
  error,
  name,
}: Partial<InputSpec>) => {
  return (
    <div className={`mt-2`}>
      <div className=" mr-2 font-semibold">
        {title} {isRequired ? <span className="text-red-600">*</span> : ""}
      </div>
      <input
        type={type}
        className={`rounded-md h-10 p-1 w-full bg-gray-200 focus:outline-none 
           ${error ? "border-red-500 border-2" : ""} `}
        placeholder={placeholder}
        name={name}
        {...register(name, { required: isRequired })}
      />
    </div>
  );
};

export default Input;
