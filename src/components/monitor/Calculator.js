import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showOders(orders) {
    if (!orders || orders.length === 0) {
      return <li className="text-right text-muted title">ไม่มีรายการสินค้า</li>;
    } else {
      return orders.map((order) => {
        return (
          <li key={order.product.id} className="text-right text-success title">
            {order.product.productName} x {order.quantity} =
            {order.product.unitPrice * order.quantity}
            <button
              className="btn btn-light btn-sm"
              onClick={() => this.props.onDelOrder(order.product)}
            >
              X
            </button>
          </li>
        );
      });
    }
  }
  render() {
    const { totalPrice, orders } = this.props;
    return (
      <div>
        <h1 className="text-right">{totalPrice}</h1>
        <hr />

        <ul className="list-unstyled">{this.showOders(orders)}</ul>
        <hr />
        <button
          className="btn btn-block btn-danger title"
          onClick={() => this.props.onConfirmOrder()}
        >
          ยืนยัน
        </button>
        <button
          className="btn btn-block btn-secondary title"
          onClick={() => this.props.onCancleOrder()}
        >
          ยกเลิก
        </button>
      </div>
    );
  }
}

export default Calculator;