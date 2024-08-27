import React from "react";
import Input from "../../../components/common/Input";
import { useForm } from "react-hook-form";
import CategoryAPI from "../../../api/CategoryAPI";

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createCatalogue = async (data) => {
    const response = await CategoryAPI.CreateCategory({
      nama_category: data.name,
    });
    console.log(response, data);
  };
  return (
    <div className="w-1/2 mx-auto mt-10 bg-white rounded-md p-2">
      <h2 className="text-2xl font-semibold ">Create Catalogue</h2>
      <form
        onSubmit={handleSubmit(createCatalogue)}
        className="border-t-2 mt-2"
      >
        <Input
          type="text"
          title="Name"
          isRequired={true}
          placeholder="name"
          register={register}
          name="name"
          error={errors.name}
        />

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
