import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Input } from "antd";
import { Button } from "antd";
import validator from "validator";

class Subcribe extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      isCorrect: false,
      disableButton: true,
      style: { background: "white" }
    };
  }

  render() {
    return (
      <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
        <div className="container py-4">
          <div className="row d-flex justify-content-center py-5">
            <div className="col-md-6">
              <h2 style={{ fontSize: "22px" }} className="mb-0">
                Подпишитесь на нашу рассылку
              </h2>
              <span>Введите свой номер телефона</span>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <Input
                style={this.state.style}
                placeholder="+375 xx xxx xx xx"
                maxLength="13"
                onChange={evt => {
                  this.setState({
                    phone: evt.target.value
                  });
                }}
                onFocus={evt => {
                  this.setState({
                    style: { background: "#ff797963" }
                  });
                }}
              />

              {validator.isMobilePhone(this.state.phone, "be-BY") ? (
                <Button type="primary">Подписатся</Button> 
              ) : (
                <Button disabled="true" type="primary">
                  Подписатся
                </Button>
              )}

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Subcribe;
