import api from "../../utils/api";

const createCategory = async (data) => {
  const response = await api.post("/seller/categories", data);
  return response.data;
};

const getCategories = async () => {
  const response = await api.get("/seller/categories");

  return response.data;
};

const deleteCategory = async (id, deleted_cat, category_id) => {
  const response = await api.post(`/seller/categories/${id}`, {
    _method: "DELETE",
    delete: deleted_cat,
    category_id,
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
