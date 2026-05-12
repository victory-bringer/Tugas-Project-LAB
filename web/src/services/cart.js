import { HTTP_GET } from "../constants/http";
import { fetchWithAuth } from "./api";

export const getUserCart = (userId) =>
  fetchWithAuth(`/carts/${userId}`, HTTP_GET);

export const addProductToCart = (request) => {};
