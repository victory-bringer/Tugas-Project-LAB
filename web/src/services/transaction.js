import { HTTP_GET, CONTENT_TYPE, APPLICATION_JSON, HTTP_POST } from "../constants/http";
import { fetchWithAuth } from "./api";

export const getUserTransactionHistory = (userId) =>
  fetchWithAuth(`/transaction/history/${userId}`, HTTP_GET);


export const checkoutTransaction = () => {
    const res = await fetch(`${BASE_URL}/transaction/checkout`, {
        method: HTTP_POST,
        headers: { "Content-Type": APPLICATION_JSON },
        body: JSON.stringify()
    });

    if (!res.ok) throw new Error("Failed to checkout products");
    
    return res.json();
};
