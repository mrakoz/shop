import React from "react";
import ReactDOM from "react-dom";
import Head from "./Head";
import Items from "./Items";
import Subcribe from "./Subscribe";
import Footer from "./Footer";

class Shop extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Items />
        <Subcribe />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Shop />, document.getElementById("root"));
