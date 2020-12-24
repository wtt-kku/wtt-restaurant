import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
// import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../actions";

class Product extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   products: null,
    // };
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    // axios.get("http://localhost:3001/products").then((res) => {
    //   this.setState({ products: res.data });
    // });

    this.props.productsFetch(); //*เรียกใช้ผ่าน Action ของ Redux
  }

  editProduct(product) {
    this.props.history.push("products/edit/" + product.id);
  }

  delProduct(product) {
    // axios.delete("http://localhost:3001/products/" + product.id).then((res) => {
    //   axios.get("http://localhost:3001/products").then((res) => {
    //     this.setState({ products: res.data });
    //   });
    // });

    this.props.productDelete(product.id); //*เรียกใช้ผ่าน Action ของ Redux
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h1>สินค้า</h1>
            </div>
            <div className="col-6">
              <button
                className="btn btn-success title float-right"
                onClick={() => this.props.history.push("products/add")}
              >
                เพิ่ม
              </button>
            </div>
          </div>

          {this.props.products && Array.isArray(this.props.products) && (
            <ProductList
              products={this.props.products}
              onDelProduct={this.delProduct}
              onEditProduct={this.editProduct}
            />
          )}
        </div>
        <Footer company="WTT Developer" email="Withan@KKUmail.com" />
      </div>
    );
  }
}
function mapStateToProps({ products }) {
  //! Map State ใน Store มาเป็น Props ของ Component ปัจจุบัน
  return { products };
}

export default withRouter(
  connect(mapStateToProps, { productsFetch, productDelete })(Product) //! ทำ connect กับ Redux
);
