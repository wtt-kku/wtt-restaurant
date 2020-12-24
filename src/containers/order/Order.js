import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import axios from "axios";
import { connect } from "react-redux";
import { ordersFetch, orderDelete } from "../../actions";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.ordersFetch(); //*เรียกใช้ผ่าน Action ของ Redux
    // axios.get("http://localhost:3001/orders").then((res) => {
    //   console.log(res.data);
    //   this.setState({ orders: res.data });
    // });
  }

  delOrders(order) {
    this.props.orderDelete(order.id); //*เรียกใช้ผ่าน Action ของ Redux
    // axios.delete("http://localhost:3001/orders/" + order.id).then((res) => {
    //   axios.get("http://localhost:3001/orders").then((res) => {
    //     console.log(res.data);
    //     this.setState({ orders: res.data });
    //   });
    // });
  }

  showOrders() {
    return (
      this.props.orders &&
      this.props.orders.map((order) => {
        const date = new Date(order.orderedDate);
        return (
          <div key={order.id} className="col-md-3">
            <hr />
            <p className="text-right">
              <button
                className="btn btn-danger btn-sm title"
                onClick={() => this.delOrders(order)}
              >
                X
              </button>
            </p>
            <h5>
              วันที่สั่งซื้อ : {date.toLocaleDateString()}
              {"  "}
              {date.toLocaleTimeString()}
            </h5>
            <ul>
              {order.orders &&
                order.orders.map((record) => {
                  return (
                    <li key={record.product.id}>
                      {record.product.productName} x {record.quantity} =
                      {record.product.unitPrice * record.quantity}
                    </li>
                  );
                })}
            </ul>
            <p className="title"> ยอดรวม : {order.totalPrice} บาท</p>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h2>รายการสั่งซื้อ</h2>
          <div className="row">{this.showOrders()}</div>
        </div>
        <Footer company="WTT Developer" email="Withan@KKUmail.com" />
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  //! Map State ใน Store มาเป็น Props ของ Component ปัจจุบัน
  return { orders };
}

export default connect(mapStateToProps, { ordersFetch, orderDelete })(Order); //! ทำ connect กับ Redux
