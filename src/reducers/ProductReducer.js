import {
  PRODUCTS_FETCH,
  PRODUCT_FETCH,
  PRODUCT_CREATE,
  PRODUCT_UPDATE,
} from "../actions/type";

export default function (state = [], action) {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return action.payload;

    case PRODUCT_FETCH:
      return action.payload;

    case PRODUCT_CREATE:
      return { saved: true, msg: "บันทึกสินค้าเรียบร้อย" };

    case PRODUCT_UPDATE:
      return { ...state, saved: true, msg: "แก้ไขสินค้าเรียบร้อย" };

    default:
      return state;
  }
}
