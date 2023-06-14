import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Cart from "./components/Cart.js";
import SlidingMenu from "./components/SlidingMenu.js";
import ProductPage from "./components/ProductPage.js";
import Checkout from "./components/Checkout.js";
import Carousel from "./components/BrandCarousel.js";
import Footer from "./components/Footer.js";
import Products from "./productData.js";
import BagFeatureImage from "./img/bag_home.webp";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const [womenProducts, setWomenProducts] = useState(false);
  const [menProducts, setMenProducts] = useState(true);
  const [allProducts] = useState([...Products.women, ...Products.men]);

  //____________Cart open & close (START)____________

  const [isCartOpen, SetisCartOpen] = useState(false);

  const handleCartToggle = function () {
    SetisCartOpen((prevState) => {
      document.body.style.overflow = isCartOpen ? "auto" : "hidden";
      return !prevState;
    });
  };

  //___________Cart open & close (END)_____________

  //___________Menu open & close (START)____________

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = function () {
    setIsMenuOpen((prevState) => !prevState);
    document.body.style.overflow = `${isMenuOpen ? "auto" : "hidden"}`;
  };

  //___________Menu open & close (END)_______________

  // HELPER FUNCTION TO CHANGE CATEGORY
  const renderWomenCategory = function () {
    setWomenProducts(true);
    setMenProducts(false);
  };

  const renderMenCategory = function () {
    setMenProducts(true);
    setWomenProducts(false);
  };

  // _________CART STATES (START)___________

  const [ProductsInCart, setProductsInCart] = useState([]);

  const addToCart = function (id) {
    const selectedProduct = allProducts.find((p) => p.id === id);

    const isProductInCart = ProductsInCart.find((p) => p.id === id);

    if (isProductInCart) {
      const updatedCart = ProductsInCart.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setProductsInCart(updatedCart);
    } else {
      setProductsInCart([
        ...ProductsInCart,
        { ...selectedProduct, quantity: 1 },
      ]);
    }
  };

  // _________CART STATES (END)___________

  // _________CART QUANTITY STATES (START)___________

  const IncreaseQuantity = function (id) {
    const selectedProduct = ProductsInCart.find((p) => p.id === id);

    if (selectedProduct && selectedProduct.quantity < 10) {
      selectedProduct.quantity += 1;
      setProductsInCart([...ProductsInCart]);
    }
  };

  const DecreaseQuantity = function (id) {
    const selectedProduct = ProductsInCart.find((p) => p.id === id);

    if (selectedProduct && selectedProduct.quantity > 1) {
      selectedProduct.quantity -= 1;
      setProductsInCart([...ProductsInCart]);
    }
  };

  // _________CART QUANTITY STATES (END)_____________

  //____________REMOVE ITEMS FROM THE CART (START)_____________

  const removeProductFromCart = function (id) {
    const updatedCart = ProductsInCart.filter((p) => {
      if (p.id === id) {
        p.quantity = 1;
      }

      return p.id !== id;
    });
    setProductsInCart(updatedCart);
  };

  //____________REMOVE ITEMS FROM THE CART (END)_____________

  // _________PRODUCT PAGE RENDERING (START)____________

  const [productPageActive, setProductPageActive] = useState(false);
  const [currentPageData, setcurrentPageData] = useState();

  const goToProductPage = function () {
    setProductPageActive(true);
    window.scrollTo(0, 0);
  };

  const productPageData = function (id) {
    let selectedProduct = allProducts.find((p) => p.id === id);

    setcurrentPageData(selectedProduct);
  };

  // _________PRODUCT PAGE RENDERING (END)____________

  //_________CHECKOUT PAGE RENDERING (START)___________

  const [goToCheckout, setGoToCheckout] = useState(false);

  const initiateCheckout = function () {
    setGoToCheckout(true);
  };

  //_________CHECKOUT PAGE RENDERING (END)___________

  //__________CHECKOUT DATA (START)______________

  const [checkoutTotal, setCheckoutTotal] = useState(0);

  useEffect(
    function () {
      let total = 8.33;

      ProductsInCart.map((p) => {
        total += p.price * p.quantity;
      });

      setCheckoutTotal(total);
    },
    [ProductsInCart]
  );

  //__________CHECKOUT DATA (END)______________

  //_________HELPER FUNCTION TO GO TO HOME SECTION__________
  const goToHome = function () {
    setProductPageActive(false);
    setGoToCheckout(false);
  };

  //________SEARCH BUTTON (START)___________

  const [searchQuery, setSearchQuery] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(
    function () {
      const searchedProducts = allProducts.filter((p) => {
        return p.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      setSearchProducts(searchedProducts);
    },
    [searchQuery]
  );

  //________SEARCH BUTTON (END)___________

  return (
    <div ref={parent}>
      {isCartOpen && (
        <Cart
          handleCartToggle={handleCartToggle}
          ProductsInCart={ProductsInCart}
          IncreaseQuantity={IncreaseQuantity}
          DecreaseQuantity={DecreaseQuantity}
          removeProductFromCart={removeProductFromCart}
          initiateCheckout={initiateCheckout}
          setProductPageActive={setProductPageActive}
        />
      )}

      {isMenuOpen && (
        <SlidingMenu
          handleMenuToggle={handleMenuToggle}
          goToHome={goToHome}
          renderMenCategory={renderMenCategory}
          renderWomenCategory={renderWomenCategory}
        />
      )}

      <Header
        handleCartToggle={handleCartToggle}
        handleMenuToggle={handleMenuToggle}
        ProductsInCart={ProductsInCart}
        goToHome={goToHome}
        goToCheckout={goToCheckout}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchProducts={searchProducts}
        setSearchProducts={setSearchProducts}
        goToProductPage={goToProductPage}
        productPageData={productPageData}
        renderMenCategory={renderMenCategory}
        renderWomenCategory={renderWomenCategory}
      />

      {productPageActive && (
        <ProductPage currentPageData={currentPageData} addToCart={addToCart} />
      )}

      {goToCheckout && (
        <Checkout
          ProductsInCart={ProductsInCart}
          checkoutTotal={checkoutTotal}
          goToHome={goToHome}
          setProductsInCart={setProductsInCart}
        />
      )}

      {!productPageActive && !goToCheckout && (
        <section className="main">
          <div className="hero-section">
            <div className="hero-text">
              <p>LE SAC BAGUETTE</p>

              <h1 className="text-center text-5xl leading-tight">
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
                  const productImage = require(`./img/product_img/${p.image}`);

                  return (
                    <div className="product-container" key={p.id}>
                      <img
                        className="product-img cursor-pointer"
                        src={productImage}
                        alt="Product Image"
                        onClick={() => {
                          goToProductPage();
                          productPageData(p.id);
                        }}
                      />
                      <div className="product-info">
                        <p className="product-name tracking-wider">{p.name}</p>
                        <p className="product-price tracking-wider">
                          $ {p.price}
                        </p>
                      </div>

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
                  const productImage = require(`./img/product_img/${p.image}`);

                  return (
                    <div className="product-container" key={p.id}>
                      <img
                        className="product-img cursor-pointer"
                        src={productImage}
                        alt="Product Img"
                        onClick={() => {
                          goToProductPage();
                          productPageData(p.id);
                        }}
                      />
                      <div className="product-info">
                        <p className="product-name">{p.name}</p>
                        <p className="product-price">$ {p.price}</p>
                      </div>

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
                Shop our selection of exclusive handbags and backpacks at
                reduced price during the Super Sale. Hurry up!
              </p>
              <a className="offer-btn" href="">
                Shop Now
              </a>
            </div>
          </section>

          <Carousel />
        </section>
      )}
      <Footer
        renderMenCategory={renderMenCategory}
        renderWomenCategory={renderWomenCategory}
      />
    </div>
  );
}

export default App;
