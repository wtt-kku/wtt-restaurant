import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductForm from "../../components/product/ProductForm";
import { connect } from "react-redux";
import { productCreate, productUpdate, productFetch } from "../../actions";

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //!โหลดข้อมูลเมื่อเปิดหน้าแก้ไข
    if (this.props.match.params.id) {
      //*เช็คเงื่อนไขว่าส่ง id มาหรือไม่
      this.props.productFetch(this.props.match.params.id); //*ส่ง id เพื่อดึงข้อมูลสินค้าที่จะแก้ไข
    }
  }

  render() {
    const {
      match,
      formValues,
      products,
      productCreate,
      productUpdate,
    } = this.props;
    console.log(match);
    return (
      <div>
        <Header />
        <div className="container col-md-5">
          {match.path.indexOf("add") > 0 && (
            <div>
              <h2>เพิ่มสินค้า</h2>
              {products.saved && (
                <div className="alert alert-secondary title">
                  {products.msg}
                </div>
              )}
              <ProductForm onProductSubmit={() => productCreate(formValues)} />
            </div>
          )}
          {match.path.indexOf("edit") > 0 && (
            <div>
              <h2>แก้ไขสินค้า</h2>
              {products.saved && (
                <div className="alert alert-secondary title">
                  {products.msg}
                </div>
              )}
              <ProductForm
                onProductSubmit={() => productUpdate(products.id, formValues)}
              />
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ form, products }) {
  return {
    formValues: form.ProductForm ? form.ProductForm.values : null,
    products,
  };
}

export default connect(mapStateToProps, {
  productCreate,
  productUpdate,
  productFetch,
})(ProductEdit);
