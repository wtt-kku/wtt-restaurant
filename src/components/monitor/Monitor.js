import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import axios from "axios";

class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      orders: [],
      statusConfirm: false,
      msg: "",
    };

    //*Bind เพื่อให้ component อื่นเรียกใช้ Method ได้
    this.addOrder = this.addOrder.bind(this);
    this.DelOrder = this.DelOrder.bind(this);
    this.CancleOrder = this.CancleOrder.bind(this);
    this.ConfirmOrder = this.ConfirmOrder.bind(this);
  }

  addOrder(product) {
    let findOrder = this.state.orders.find(
      (order) => order.product.id === product.id
    );
    if (findOrder) {
      findOrder.quantity++;
    } else {
      this.state.orders.push({ product: product, quantity: 1 });
    }
    const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
    this.setState({
      totalPrice: totalPrice,
      orders: this.state.orders,
      statusConfirm: false,
    });
  }

  DelOrder(product) {
    let findOrder = this.state.orders.find(
      (order) => order.product.id === product.id
    );
    let resultOrder = this.state.orders.filter(
      (order) => order.product.id !== product.id
    );
    const totalPrice =
      this.state.totalPrice -
      findOrder.quantity * parseInt(findOrder.product.unitPrice);
    this.setState({
      totalPrice: totalPrice,
      orders: resultOrder,
      statusConfirm: false,
    });
  }

  CancleOrder() {
    this.setState({ totalPrice: 0, orders: [], statusConfirm: false });
  }

  ConfirmOrder() {
    const { totalPrice, orders } = this.state;
    if (orders && orders.length > 0) {
      axios
        .post("http://localhost:3001/orders", {
          orderedDate: new Date(),
          totalPrice,
          orders,
        })
        .then((res) => {
          this.setState({
            totalPrice: 0,
            orders: [],
            statusConfirm: true,
            msg: "บันทึกรายการสั่งซื้อเรียบร้อย",
          });
        });
    } else {
      this.setState({
        totalPrice: 0,
        orders: [],
        statusConfirm: true,
        msg: "กรุณาเลือกสินค้าก่อน",
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.statusConfirm && (
          <div className="alert alert-secondary title text-right" role="alert">
            {this.state.msg}
          </div>
        )}
        <div className="row">
          <div className="col-md-9">
            <ProductList
              products={this.props.products}
              onAddOrder={this.addOrder}
            />
          </div>
          <div className="col-md-3">
            <Calculator
              onDelOrder={this.DelOrder}
              totalPrice={this.state.totalPrice}
              orders={this.state.orders}
              onCancleOrder={this.CancleOrder}
              onConfirmOrder={this.ConfirmOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
