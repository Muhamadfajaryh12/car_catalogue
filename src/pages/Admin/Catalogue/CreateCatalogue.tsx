import React, { useEffect, useState } from "react";
import Input from "../../../components/common/Input";
import { useForm } from "react-hook-form";
import CategoryAPI from "../../../api/CategoryAPI";
import CatalogueAPI from "../../../api/CatalogueAPI";

const CreateCatalogue = () => {
  const [category, setCategory] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchCategory = async () => {
    const response = await CategoryAPI.getCategory();
    setCategory(response.category);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const saveCatalogue = async (data) => {
    const formData = new FormData();
    formData.append("nama_product", data.nama_product);
    formData.append("harga", data.harga);
    formData.append("files", data.gambar_product[0]); // Akses file pertama
    formData.append("deskripsi_product", data.deskripsi_product);
    formData.append("tahun_product", data.tahun_product);
    formData.append("category_id", data.category);

    // Panggil API untuk menyimpan katalog
    const response = await CatalogueAPI.CreateCatalogue(formData);
    console.log(response);
  };
  return (
    <div className="w-auto m-4  h-screen">
      <div className="bg-white p-2 rounded-md ">
        <h2 className="text-2xl font-semibold ">Create Catalogue</h2>
        <form
          onSubmit={handleSubmit(saveCatalogue)}
          className="border-t-2 mt-2"
        >
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Input
              title="Name"
              type="text"
              isRequired={true}
              placeholder="name"
              register={register}
              name={"nama_product"}
              error={errors.nama_product}
            />
            <Input
              title="Price"
              type="number"
              isRequired={true}
              placeholder="00000"
              register={register}
              name={"harga"}
              error={errors.harga}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Input
              title="Date"
              type="number"
              isRequired={true}
              register={register}
              name={"tahun_product"}
              error={errors.tahun_product}
            />
            <div className="my-2">
              <div className=" mr-2 font-semibold">
                Category<span className="text-red-600">*</span>
              </div>
              <select
                id=""
                className="rounded-md h-12 p-1 w-full bg-gray-200 focus:outline-none"
                {...register("category", { required: true })}
              >
                <option value="">Choose</option>
                {category.map((item) => (
                  <option value={item.id}>{item.nama_category}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-2">
            <div className=" mr-2 font-semibold">
              Description<span className="text-red-600">*</span>
            </div>
            <textarea
              id=""
              className="rounded-md h-32 p-1 w-full bg-gray-200 focus:outline-none"
              {...register("deskripsi_product", { required: true })}
            ></textarea>
          </div>
          <div className="">
            <input
              type="file"
              {...register("gambar_product", { required: true })}
            />{" "}
          </div>
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

export default CreateCatalogue;
