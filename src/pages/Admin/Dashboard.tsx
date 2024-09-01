import React, { useCallback, useEffect, useMemo, useState } from "react";
import Table from "../../components/Table";
import CategoryAPI from "../../api/CategoryAPI";
import CatalogueAPI from "../../api/CatalogueAPI";
import { FaTrash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import ModalContent from "../../components/common/ModalContent";
import { Button, DialogPanel, DialogTitle } from "@headlessui/react";
import { PiPencil } from "react-icons/pi";
import { FaPencil } from "react-icons/fa6";
import useCurrency from "../../hooks/useCurrency";

const Dashboard = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataCatalogue, setDataCatalogue] = useState([]);
  const [lengthDelete, setLengthDelete] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    if (lengthDelete.length == 0) {
      toast.error("Please select the item first.");
    } else {
      setIsOpen(true);
    }
  };

  const ModalDelete = () => {
    return (
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium ">
              Delete
            </DialogTitle>
            <p className="mt-2 text-sm/6 /50">
              Are you sure you want to delete this item? {lengthDelete.length}{" "}
              Items
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 py-1.5 px-3 text-sm/6 font-semibold  text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-700 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-blue-700"
                onClick={close}
              >
                Cancel
              </Button>
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold  text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
                onClick={close}
              >
                Confirm
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    );
  };

  const handleDelete = useCallback(() => {
    if (lengthDelete.length === 0) {
      toast.error("Please select the item first.");
    } else {
      console.log("Items to delete:", lengthDelete);
    }
  }, [lengthDelete]);

  useEffect(() => {
    const category = async () => {
      const response = await CategoryAPI.getCategory();
      setDataCategory(response);
    };
    category();
  }, []);

  useEffect(() => {
    const catalogue = async () => {
      const response = await CatalogueAPI.GetCatalogue();
      setDataCatalogue(response);
      console.log(response);
    };
    catalogue();
  }, []);
  const columsCategory = useMemo(
    () => [
      {
        name: "No",
        selector: (row, index) => ++index,
      },
      {
        name: "Category",
        selector: (row) => row.nama_category,
      },
      {
        name: "Action",
        selector: (row) => (
          <button
            className="bg-yellow-400 p-2 rounded-lg text-white  "
            onClick={handleDelete}
          >
            <FaPencil size={20} />
          </button>
        ),
      },
    ],
    []
  );
  const columsVehicle = useMemo(
    () => [
      {
        name: "No",
        selector: (row, index) => ++index,
      },
      {
        name: "Vehicle",
        selector: (row) => row.nama_product,
      },
      {
        name: "Year",
        selector: (row) => row.tahun_product,
      },
      {
        name: "Price",
        selector: (row) => useCurrency(row.harga),
      },
      {
        name: "Picture",
        selector: (row) => (
          <img
            src={`http://localhost:8080/${row.gambar_product}`}
            alt=""
            className="size-32 p-1"
          />
        ),
      },
      {
        name: "Action",
        selector: (row) => (
          <button
            className="bg-yellow-400 p-2 rounded-lg text-white  "
            onClick={handleDelete}
          >
            <FaPencil size={20} />
          </button>
        ),
      },
    ],
    [handleDelete]
  );

  return (
    <div className=" m-4">
      <Toaster />
      <ModalContent
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        content={ModalDelete()}
      />
      <Button
        onClick={open}
        className="rounded-md bg-red-400 py-2 px-4 text-sm font-medium  text-white focus:outline-none data-[hover]:bg-red-500 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Delete Item
      </Button>
      <div className="content-vehicle-list my-2 p-2 bg-white rounded-md">
        <Table
          rows={dataCatalogue.products}
          columns={columsVehicle}
          title={"List Vehicle"}
          setLengthDelete={setLengthDelete}
        />{" "}
      </div>

      <div className="content-category-list my-2 p-2 bg-white rounded-md">
        <Table
          rows={dataCategory.category}
          columns={columsCategory}
          title={"List Category"}
          setLengthDelete={setLengthDelete}
        />
      </div>
    </div>
  );
};

export default Dashboard;
