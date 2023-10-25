import api from "../../utils/api";

const createProduct = async (data) => {
  const response = await api.post("/seller/products", data);
  return response.data;
};

const getProducts = async () => {
  const response = await api.get("/seller/products");

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await api.delete(`/seller/products/${id}`);

  return response.data;
};

const productService = { createProduct, getProducts, deleteProduct };

export default productService;
