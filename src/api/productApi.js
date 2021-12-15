import axios from "axios";

export const getAllProduct = async function () {

  try {
    const response = await axios.get("/api/product/get-all");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = async function (name, userId, category, price, stock, warehouseAddress, description, pictureURL) {
  let json = {
    "name": name,
    "userId": userId,
    "category": category,
    "price": price,
    "stock": stock,
    "warehouseAddress": warehouseAddress,
    "description": description,
    "pictureURL": pictureURL,
  }

  try {
    const response = await axios.post("/api/product/create", json);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

