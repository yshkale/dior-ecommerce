import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Cart from "./components/Cart.js";
import SlidingMenu from "./components/SlidingMenu.js";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage.js";
import Checkout from "./components/Checkout.js";
import ThankyouPage from "./components/ThankyouPage";
import Products from "./productData";
import Footer from "./components/Footer.js";

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

  const [currentPageData, setcurrentPageData] = useState();

  const productPageData = function (id) {
    let selectedProduct = allProducts.find((p) => p.id === id);

    setcurrentPageData(selectedProduct);
  };

  // _________PRODUCT PAGE RENDERING (END)____________

  //_________CHECKOUT PAGE RENDERING (START)___________

  // const [goToCheckout, setGoToCheckout] = useState(false);

  // const initiateCheckout = function () {
  //   setGoToCheckout(true);
  // };

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

  const [formData, setFormData] = useState(null);

  return (
    <div ref={parent}>
      <BrowserRouter>
        {isCartOpen && (
          <Cart
            handleCartToggle={handleCartToggle}
            ProductsInCart={ProductsInCart}
            IncreaseQuantity={IncreaseQuantity}
            DecreaseQuantity={DecreaseQuantity}
            removeProductFromCart={removeProductFromCart}
          />
        )}

        {isMenuOpen && (
          <SlidingMenu
            handleMenuToggle={handleMenuToggle}
            renderMenCategory={renderMenCategory}
            renderWomenCategory={renderWomenCategory}
          />
        )}

        <Header
          handleCartToggle={handleCartToggle}
          handleMenuToggle={handleMenuToggle}
          ProductsInCart={ProductsInCart}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchProducts={searchProducts}
          setSearchProducts={setSearchProducts}
          productPageData={productPageData}
          renderMenCategory={renderMenCategory}
          renderWomenCategory={renderWomenCategory}
        />

        <Routes>
          <Route
            index
            element={
              <HomePage
                womenProducts={womenProducts}
                menProducts={menProducts}
                renderMenCategory={renderMenCategory}
                renderWomenCategory={renderWomenCategory}
                productPageData={productPageData}
                addToCart={addToCart}
              />
            }
          />
          <Route>
            <Route
              path="product"
              element={
                <ProductPage
                  currentPageData={currentPageData}
                  addToCart={addToCart}
                />
              }
            />

            <Route
              path="checkout"
              element={
                <Checkout
                  ProductsInCart={ProductsInCart}
                  checkoutTotal={checkoutTotal}
                  setProductsInCart={setProductsInCart}
                  setFormData={setFormData}
                />
              }
            />

            <Route
              path="thankyou"
              element={
                <ThankyouPage
                  setProductsInCart={setProductsInCart}
                  formData={formData}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer
        renderMenCategory={renderMenCategory}
        renderWomenCategory={renderWomenCategory}
      />
    </div>
  );
}

export default App;
