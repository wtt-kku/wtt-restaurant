import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container col-md-5">
          <h3>About</h3>
          <p className="title text-justify mt-4 mb-4">
            เว็บไซต์นี้จัดทำขึ้นเพื่อศึกษา และฝึกการใช้งาน React.js ในการสร้าง
            Web Application โดยเป็นระบบการสั่งอาหาร ดูรายการสั่งซื้อ สามารถเพิ่ม
            ลบ และแก้ไขสินค้าได้
          </p>
        </div>
        <Footer company="WTT Developer" email="Withan@KKUmail.com" />
      </div>
    );
  }
}

export default About;
