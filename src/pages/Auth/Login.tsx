import React from "react";
import Input from "../../components/common/Input";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const LoginSubmit = (data: any) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="w-96" onSubmit={handleSubmit(LoginSubmit)}>
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
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
