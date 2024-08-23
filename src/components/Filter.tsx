import React from "react";

const Filter = () => {
  return (
    <div>
      <h6>Gunakan filter untuk memudahkan pencarian</h6>
      <div className="mt-2 flex gap-5">
        <select className="bg-gray-200 p-1 rounded-full" name="" id="">
          <option value="">Category</option>
        </select>
        <select className="bg-gray-200 p-1 rounded-full" name="" id="">
          <option value="">Harga</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
