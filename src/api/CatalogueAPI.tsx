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

  const GetCatalogue = async () => {
    const response = await axios.get(`${BASE_URL}s`);
    const { data } = response;
    return data;
  };

  const GetCatalogueID = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    const { data } = response;
    console.log(response);
    return data;
  };
  return {
    CreateCatalogue,
    GetCatalogue,
    GetCatalogueID,
  };
})();

export default CatalogueAPI;
