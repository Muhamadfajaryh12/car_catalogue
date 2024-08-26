import React from "react";
import Input from "../../components/common/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionLogin } from "../../states/Auth/action";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const LoginSubmit = async (data: any) => {
    await dispatch(
      ActionLogin({
        username: data.username,
        password: data.password,
      })
    );
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-3 w-96 rounded-md">
        <h1 className="font-bold text-3xl my-2">Login Account</h1>
        <form className="my-2" onSubmit={handleSubmit(LoginSubmit)}>
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
          <button
            type="submit"
            className="bg-blue-500 p-2 text-white font-semibold rounded-md my-4 w-full"
          >
            Sign in
          </button>
        </form>
        <h1 className="my-4 text-gray-500">
          No have an account?{" "}
          <Link to={"/register"} className="text-blue-600 font-semibold">
            Register here
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
