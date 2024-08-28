import axios from "axios";

const CatalogueAPI = (() => {
  const BASE_URL = `http://localhost:8080/api/product`;

  const CreateCatalogue = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    CreateCatalogue,
  };
})();

export default CatalogueAPI;
