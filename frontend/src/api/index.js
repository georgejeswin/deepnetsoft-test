import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchProducts = () => API.get("/products");

export const createProduct = (newProduct) => API.post("/products", newProduct);

export const login = (formData) => API.post("/users/login", formData);
export const register = (formData) => API.post("/users/register", formData);
