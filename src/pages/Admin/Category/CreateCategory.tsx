import React from "react";

const CreateCategory = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-semibold ">Create Catalogue</h2>
      <form action="" className="border-t-2 mt-2">
        <div className="grid  grid-cols-2  gap-1 mt-4 ">
          <label htmlFor="" className="text-right mr-2 font-semibold">
            Name
          </label>
          <input type="text" className="border-2 rounded-md h-10 p-1 " />
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

export default CreateCategory;
