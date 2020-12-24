import axios from "axios";
import {
  PRODUCTS_FETCH,
  PRODUCT_FETCH,
  PRODUCT_CREATE,
  PRODUCT_UPDATE,
} from "./type";

export const productFetch = (id) => {
  //!Method สำหรับเรียกสินค้า 1 ชิ้น
  return (dispatch) => {
    axios.get(process.env.REACT_APP_API + "/products/" + id).then((res) => {
      dispatch({ type: PRODUCT_FETCH, payload: res.data });
    });
  };
};

export const productsFetch = () => {
  //!Method สำหรับเรียกสินค้าทุกชิ้น
  return (dispatch) => {
    axios.get(process.env.REACT_APP_API + "/products").then((res) => {
      dispatch({ type: PRODUCTS_FETCH, payload: res.data });
    });
  };
};

export const productDelete = (id) => {
  //!Method สำหรับลบสินค้า
  return (dispatch) => {
    axios.delete(process.env.REACT_APP_API + "/products/" + id).then((res) => {
      axios.get(process.env.REACT_APP_API + "/products").then((res) => {
        dispatch({ type: PRODUCTS_FETCH, payload: res.data });
      });
    });
  };
};

export const productCreate = (values) => {
  //!Method สำหรับเพิ่มสินค้า
  return (dispatch) => {
    axios.post(process.env.REACT_APP_API + "/products", values).then((res) => {
      dispatch({ type: PRODUCT_CREATE });
    });
  };
};

export const productUpdate = (id, values) => {
  //!Method สำหรับแก้ไขสินค้า
  return (dispatch) => {
    axios
      .put(process.env.REACT_APP_API + "/products/" + id, values)
      .then((res) => {
        dispatch({ type: PRODUCT_UPDATE });
      });
  };
};
