import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <div className="ind_home_pro">
          <Product
            id="12321341"
            title="If you want to make a statement, wear purple."
            price={1100.96}
            rating={5}
            image="Dresses/Dress6.png"
          />
          </div>
          <div className="ind_home_pro">
          <Product
            id="49538094"
            title="The White Pheran"
            price={2390.0}
            rating={4}
            image="Dresses/Dress2.jpg"
          />
          </div>
          <div className="ind_home_pro">
          <Product
            id="49552052"
            title=""
            price={2390.0}
            rating={4}
            image="Dresses/Dress7.jpg"
          />
          </div>
        </div>

        <div className="home__row">
        <div className="ind_home_pro">
          <Product
            id="4903850"
            title=""
            price={1990.99}
            rating={3}
            image="Dresses/Dress3.jpg"
          />
        </div>
        <div className="ind_home_pro">
          <Product
            id="23445930"
            title=""
            price={980.99}
            rating={5}
            image="Dresses/Dress4.jpg"
          />
        </div>
        <div className="ind_home_pro">
          <Product
            id="3254354345"
            title=""
            price={598.99}
            rating={4}
            image="Dresses/Dress5.jpg"
          />
          </div>
        </div>

        <div className="home__row">
        <div className="ind_home_pro2">
          <Product
            id="90829332"
            title=""
            price={1094.98}
            rating={4}
            image="Dresses/Dress1.jpg"
          />
          </div>
          <div className="ind_home_pro2">
          <Product
            id="90829332"
            title=""
            price={1094.98}
            rating={4}
            image="Dresses/Dress8.jpg"
          />
          </div>
          <div className="ind_home_pro2">
          <Product
            id="90829332"
            title=""
            price={1094.98}
            rating={4}
            image="Dresses/Dress9.jpg"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;