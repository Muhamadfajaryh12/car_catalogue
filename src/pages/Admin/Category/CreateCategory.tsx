import React from "react";
import Input from "../../../components/common/Input";

const CreateCategory = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-semibold ">Create Catalogue</h2>
      <form action="" className="border-t-2 mt-2">
        <Input type="text" title="Name" isRequired={true} placeholder="name" />

        <button
          className="w-full bg-blue-500 text-white font-semibold p-2 mt-4 rounded-md"
          type="submit"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
