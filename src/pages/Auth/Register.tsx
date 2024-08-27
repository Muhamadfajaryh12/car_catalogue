import React from "react";
import Input from "../../components/common/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthenticationAPI from "../../api/Authentication";
import { AuthSpec } from "../../types/AuthSpec";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const RegisterSubmit = async (data: AuthSpec) => {
    const register = async () => {
      const response = await AuthenticationAPI.register({
        username: data.username,
        password: data.password,
      });
      return response;
    };

    toast.promise(register(), {
      loading: "Saving...",
      success: (response) => <b>{response?.data.Message}</b>,
      error: "Failed Register",
    });
  };

  return (
    <div className="">
      <div>
        <Toaster />
      </div>
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
    </div>
  );
};

export default Register;
