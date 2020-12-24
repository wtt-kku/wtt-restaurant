import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { productName, unitPrice, thumbnail } = this.props.product;
    return (
      <div className="col-md-3 col-sm-6">
        <img className="img-fluid img-thumbnail" alt="" src={thumbnail} />
        <h5 className="mt-2"> {productName}</h5>
        <p className="text-right title"> {unitPrice} บาท</p>

        {this.props.onAddOrder && (
          <button
            className="btn btn-block btn-secondary title"
            onClick={() => this.props.onAddOrder(this.props.product)}
          >
            ซื้อ
          </button>
        )}

        {(this.props.onDelProduct || this.props.onEditProduct) && (
          <button
            className="btn btn-info title col-5"
            onClick={() => this.props.onEditProduct(this.props.product)}
          >
            แก้ไข
          </button>
        )}
        {(this.props.onDelProduct || this.props.onEditProduct) && (
          <button
            className="btn btn-danger title col-5 float-right"
            onClick={() => this.props.onDelProduct(this.props.product)}
          >
            ลบ
          </button>
        )}

        <hr />
      </div>
    );
  }
}

export default ProductItem;
