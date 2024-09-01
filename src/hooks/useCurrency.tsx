import React from "react";

const useCurrency = (price) => {
  const formattedPrice = price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return formattedPrice;
};

export default useCurrency;
