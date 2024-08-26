import React from "react";
import Input from "../../components/common/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthenticationAPI from "../../api/Authentication";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const RegisterSubmit = async (data) => {
    const response = await AuthenticationAPI.register({
      username: data.username,
      password: data.password,
    });
    console.log(response);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-3 rounded-md w-96">
        <h1 className="font-bold text-3xl my-2">Create and Account</h1>
        <form className="my-2" onSubmit={handleSubmit(RegisterSubmit)}>
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
          <button className="bg-blue-500 p-2 text-white font-semibold rounded-md my-4 w-full">
            Sign up
          </button>
        </form>
        <h1 className="my-4 text-gray-500">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600 font-semibold">
            Login here
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Register;
