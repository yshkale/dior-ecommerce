import Products from "../productData";
import { Link } from "react-router-dom";
import BagFeatureImage from "../img/bag_home.webp";
import Carousel from "./BrandCarousel.js";

const HomePage = function ({
  womenProducts,
  menProducts,
  renderWomenCategory,
  renderMenCategory,
  productPageData,
  addToCart,
}) {
  return (
    <section className="main">
      <div className="hero-section">
        <div className="hero-text">
          <p>LE SAC BAGUETTE</p>

          <h1 className="hero-heading-text text-center text-6xl leading-tight">
            INSPIRED BY THE 90S
          </h1>

          <a
            className="cursor-pointer bg-[#fff] px-8 py-5 text-lg text-neutral-950 transition-all duration-300 hover:border hover:border-[#fff] hover:bg-transparent hover:text-[#fff]"
            href="#product-section"
          >
            SHOP NOW
          </a>
        </div>
      </div>

      <main className="main-section" id="product-section">
        <p className="bestseller-text">Our Best sellers</p>

        <div className="product-category">
          <a
            className={
              womenProducts
                ? "product-category-link product-category-active"
                : "product-category-link"
            }
            onClick={renderWomenCategory}
          >
            Women
          </a>
          <a
            className={`${
              menProducts
                ? "product-category-link product-category-active"
                : "product-category-link"
            }`}
            onClick={renderMenCategory}
          >
            Men
          </a>
        </div>

        <section className="products-section">
          {womenProducts &&
            Products.women.map((p) => {
              const productImage = require(`../img/product_img/${p.image}`);

              return (
                <div className="product-container" key={p.id}>
                  <Link to="/product">
                    <img
                      className="product-img cursor-pointer"
                      src={productImage}
                      alt="Product Image"
                      onClick={() => {
                        productPageData(p.id);
                        window.scrollTo(0, 0);
                      }}
                    />
                    <div className="product-info">
                      <p className="product-name tracking-wider">{p.name}</p>
                      <p className="product-price tracking-wider">
                        $ {p.price}
                      </p>
                    </div>
                  </Link>

                  <button
                    className="mt-8 border border-[#fff] bg-white px-8 py-3 text-center text-sm uppercase tracking-[2px] transition-all duration-300 hover:bg-black hover:text-white lg:px-12 lg:py-4 lg:text-lg lg:tracking-[3px]"
                    onClick={() => addToCart(p.id)}
                  >
                    Add to Bag
                  </button>
                </div>
              );
            })}

          {menProducts &&
            Products.men.map((p) => {
              const productImage = require(`../img/product_img/${p.image}`);

              return (
                <div className="product-container" key={p.id}>
                  <Link to="/product">
                    <img
                      className="product-img cursor-pointer"
                      src={productImage}
                      alt="Product Img"
                      onClick={() => {
                        productPageData(p.id);
                        window.scrollTo(0, 0);
                      }}
                    />
                    <div className="product-info">
                      <p className="product-name">{p.name}</p>
                      <p className="product-price">$ {p.price}</p>
                    </div>
                  </Link>

                  <button
                    className="mt-8 border border-[#fff] bg-white px-8 py-3 text-center text-sm uppercase tracking-[2px] transition-all duration-300 hover:bg-black hover:text-white lg:px-12 lg:py-4 lg:text-lg lg:tracking-[3px]"
                    onClick={() => addToCart(p.id)}
                  >
                    Add to Bag
                  </button>
                </div>
              );
            })}
        </section>

        <div className="bag-feature">
          <img
            className="bag-feature-img"
            src={BagFeatureImage}
            alt="Img of a featured bag"
          />

          <h2 className="bag-feature-text">
            OUR AIM: OFFER ELEGANT, TIMELESS & FUNCTIONAL PRODUCTS
          </h2>
        </div>

        <section className="featured-category">
          <div
            className="featured-category-women"
            onClick={() => renderWomenCategory()}
          >
            <a className="featured-category-text" href="#product-section">
              Women
            </a>
          </div>

          <div
            className="featured-category-men"
            onClick={() => renderMenCategory()}
          >
            <a className="featured-category-text" href="#product-section">
              Men
            </a>
          </div>
        </section>
      </main>

      <section className="offer-section mb-1">
        <div className="offer-text">
          <p className="limited-time-text">LIMITED TIME ONLY</p>
          <h4 className="offer-details">SUPER SALE UP TO 40% OFF</h4>
          <p className="offer-info">
            Shop our selection of exclusive handbags and backpacks at reduced
            price during the Super Sale. Hurry up!
          </p>
          <a className="offer-btn" href="">
            Shop Now
          </a>
        </div>
      </section>

      <Carousel />
    </section>
  );
};

export default HomePage;
