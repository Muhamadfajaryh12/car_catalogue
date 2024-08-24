import React from "react";
import Input from "../../components/common/Input";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="w-96">
        <Input
          type="text"
          title="Username"
          placeholder="username"
          isRequired={true}
        />
        <Input
          type="password"
          title="Password"
          placeholder="password"
          isRequired={true}
        />
        <button className="bg-blue-500 p-2 text-white font-semibold rounded-sm mt-4 w-full">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
