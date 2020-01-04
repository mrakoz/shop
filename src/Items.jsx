import React from "react";

const Product = ({ name, number, status, priceSale, priceDc }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="product">
        <a href="#" className="img-prod">
          <img
            className="img-fluid"
            src={`images/product-${number}.jpg`}
            alt={`img-${name}`}
          />
          {status ? <span className="status">{status}</span> : null}
          <div className="overlay" />
        </a>
        <div className="text py-3 pb-4 px-3 text-center">
          <h3>
            <a href="#">{name}</a>
          </h3>
          <div className="d-flex">
            <div className="pricing">
              <p className="price">
                {priceDc ? (
                  <span className="mr-2 price-dc">{`$${priceDc}`}</span>
                ) : null}
                {priceSale ? (
                  <span className="price-sale">{`$${priceSale}`}</span>
                ) : null}
              </p>
            </div>
          </div>
          <div className="bottom-area d-flex px-3">
            <div className="m-auto d-flex">
              <a
                href="#"
                className="add-to-cart d-flex justify-content-center align-items-center text-center"
              >
                <span>
                  <i className="ion-ios-menu" />
                </span>
              </a>
              <a
                href="#"
                className="buy-now d-flex justify-content-center align-items-center mx-1"
              >
                <span>
                  <i className="ion-ios-cart" />
                </span>
              </a>
              <a
                href="#"
                className="heart d-flex justify-content-center align-items-center "
              >
                <span>
                  <i className="ion-ios-heart" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class Items extends React.Component {
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
              <ul className="product-category">
                <li>
                  <a href="#" className="active">
                    All
                  </a>
                </li>
                <li>
                  <a href="#">Vegetables</a>
                </li>
                <li>
                  <a href="#">Fruits</a>
                </li>
                <li>
                  <a href="#">Juice</a>
                </li>
                <li>
                  <a href="#">Dried</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <Product
              name="Bell Pepper"
              number="1"
              status="30%"
              priceDc="120"
              priceSale="80"
            />
            <Product name="Strawberry" number="2" priceSale="120" />
            <Product name="Green Beans" number="3" priceSale="120" />
            <Product name="Purple Cabbage" number="4" priceSale="120" />
            <Product
              name="Tomatoe"
              number="5"
              status="30%"
              priceSale="120"
              priceDc="80"
            />
            <Product name="Brocolli" number="6" priceSale="120" />
            <Product name="Carrots" number="7" priceSale="120" />
            <Product name="Fruit Juice" number="8" priceSale="120" />
            <Product
              name="Onion"
              number="9"
              status="30%"
              priceSale="120"
              priceDc="80"
            />
            <Product name="Apple" number="10" priceSale="120" />
            <Product name="Garlic" number="11" priceSale="120" />
            <Product name="Chilli" number="12" priceSale="120" />
          </div>

          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Items;
