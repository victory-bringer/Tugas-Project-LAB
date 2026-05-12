import { HTTP_GET } from "../constants/http";
import { fetchWithAuth } from "./api";

export const getProducts = () => fetchWithAuth("/products/", HTTP_GET);

export const getPopularProducts = () =>
  fetchWithAuth("/products/popular", HTTP_GET);

export const getProductById = (productId) =>
  fetchWithAuth(`/products/${productId}`, HTTP_GET);
