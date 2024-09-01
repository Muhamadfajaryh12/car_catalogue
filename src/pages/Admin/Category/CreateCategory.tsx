import Input from "../../../components/common/Input";
import { useForm } from "react-hook-form";
import CategoryAPI from "../../../api/CategoryAPI";
import toast, { Toaster } from "react-hot-toast";

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createCatalogue = (data) => {
    const create = async () => {
      const response = await CategoryAPI.CreateCategory({
        nama_category: data.name,
      });

      console.log(response, data);
      return response;
    };
    toast.promise(create(), {
      loading: "Saving...",
      success: (response) => <b>Success Saving</b>,
      error: "Failed",
    });
  };

  return (
    <div className="w-auto m-4  h-screen">
      <Toaster />
      <div className="bg-white p-2 rounded-md ">
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
    </div>
  );
};

export default CreateCategory;
