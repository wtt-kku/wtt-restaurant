import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { productFormField } from "./formfield";

import { connect } from "react-redux";
//!เชื่อมเพื่อดึงข้อมูลสินค้าตัวที่จะแก้ไข

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderField(formfield) {
    return formfield.map(({ label, name, type, required }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type={type}
          required={required}
          component={FormField}
        />
      );
    });
  }

  render() {
    const { onProductSubmit } = this.props;
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
          {this.renderField(productFormField)}
          <button className="btn btn-block btn-info title" type="submit">
            บันทึก
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values);
  const errors = {};
  productFormField.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = "*กรุณากรอกข้อมูลให้ถูกต้อง";
    }
  });
  return errors;
}

function mapStateToProps({ products }) {
  //!เช็คว่าเป็นหน้าแกไขหรือเปล่า
  if (products && products.id) {
    //!ถ้าเป็นหน้าแก้ไช จะนำข้อมูลไปใส่ไว้ใน Input
    return { initialValues: products };
  } else {
    return {};
  }
}

ProductForm = reduxForm({ validate, form: "ProductForm" })(ProductForm);

export default connect(mapStateToProps)(ProductForm);
