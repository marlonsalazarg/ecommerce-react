import { editCategoriesName } from "../utils";
const BASE_URI="https://fakestoreapi.com";

export async function getProducts() {
    const response = await fetch(`${BASE_URI}/products`);
    const products = await response.json();
    return editCategoriesName(products);
}