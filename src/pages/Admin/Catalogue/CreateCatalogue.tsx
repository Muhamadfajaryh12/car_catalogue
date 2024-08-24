import React from "react";
import Input from "../../../components/common/Input";

const CreateCatalogue = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-semibold ">Create Catalogue</h2>
      <form action="" className="border-t-2 mt-2">
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Input
            title="Name"
            type="text"
            isRequired={true}
            placeholder="name"
          />
          <Input
            title="Price"
            type="number"
            isRequired={true}
            placeholder="00000"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Input title="Date" type="date" isRequired={true} />
          <div className="">
            <div className=" mr-2 font-semibold">
              Category<span className="text-red-600">*</span>
            </div>
            <select
              name=""
              id=""
              className="rounded-md h-10 p-1 w-full bg-gray-200 focus:outline-none"
            >
              <option value="">Choose</option>
            </select>
          </div>
        </div>
        <div className="mt-2">
          <div className=" mr-2 font-semibold">
            Description<span className="text-red-600">*</span>
          </div>
          <textarea
            name=""
            id=""
            className="rounded-md h-32 p-1 w-full bg-gray-200 focus:outline-none"
          ></textarea>
        </div>
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

export default CreateCatalogue;
