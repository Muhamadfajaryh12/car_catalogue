import React from "react";
import Input from "../../components/common/Input";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const RegisterSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="w-96" onSubmit={handleSubmit(RegisterSubmit)}>
        <Input
          type="text"
          title="Username"
          placeholder="username"
          isRequired={true}
          register={register}
          name={"username"}
          error={errors.username}
        />
        <Input
          type="password"
          title="Password"
          placeholder="password"
          isRequired={true}
          register={register}
          name={"password"}
          error={errors.password}
        />
        <button className="bg-blue-500 p-2 text-white font-semibold rounded-sm mt-4 w-full">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
