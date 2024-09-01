import React from "react";

const Filter = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h6>Gunakan filter untuk memudahkan pencarian</h6>
      <div className="mt-2 flex gap-5">
        <select className="bg-gray-200 p-1 rounded-full" name="" id="">
          <option value="">Category</option>
          {data.map((item) => (
            <option value={item.id}>{item.nama_category}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
