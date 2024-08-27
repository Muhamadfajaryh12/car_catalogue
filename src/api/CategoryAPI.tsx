import axios from "axios";
import { CategoryInputSpec } from "../types/CategorySpec";

const CategoryAPI = (() => {
  const BASE_URL = `http://localhost:8080/api/category`;

  const CreateCategory = async ({ name }: CategoryInputSpec) => {
    try {
      const response = await axios.post(`${BASE_URL}`, {
        name,
      });
      const { data } = response;
      return data;
    } catch (error) {
      throw error;
    }
  };

  return {
    CreateCategory,
  };
})();

export default CategoryAPI;
