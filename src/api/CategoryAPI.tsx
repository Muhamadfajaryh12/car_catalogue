import axios from "axios";
import { CategoryInputSpec } from "../types/CategorySpec";
import Utils from "../utils/utils";

const CategoryAPI = (() => {
  const BASE_URL = `http://localhost:8080/protected/category`;

  const CreateCategory = async ({ nama_category }: CategoryInputSpec) => {
    try {
      const response = await axios.post(
        `${BASE_URL}`,
        {
          nama_category,
        },
        {
          headers: {
            Authorization: `Bearer ${Utils.getToken()}`,
          },
        }
      );
      const { data } = response;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/categories`);
      const { data } = response;
      console.log(response);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    CreateCategory,
    getCategory,
  };
})();

export default CategoryAPI;
