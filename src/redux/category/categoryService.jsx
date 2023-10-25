import api from "../../utils/api";

const createCategory = async (data) => {
  const response = await api.post("/seller/categories", data);
  return response.data;
};

const getCategories = async () => {
  const response = await api.get("/seller/categories");

  return response.data;
};

const deleteCategory = async (id) => {
  const response = await api.delete(`/seller/categories/${id}`, {
    _method: "PUT",
  });

  return response.data;
};

const updateCategory = async (data, id) => {
  const response = await api.post(`/seller/categories/${id}`, data);
  return response.data;
};

const categoryService = {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
};

export default categoryService;
