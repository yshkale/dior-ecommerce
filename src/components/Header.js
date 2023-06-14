import { useState } from "react";
import menuIcon from "../icons/bars.svg";
import searchIcon from "../icons/magnifying-glass.svg";
import cartIcon from "../icons/bag-shopping.svg";
import closeIcon from "../icons/menu-close.svg";

const Header = function (props) {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchQuery = function (e) {
    props.setSearchQuery(e.target.value);
  };

  return (
    <>
      <header className="header sticky top-0 z-50 border-y border-neutral-300 bg-[#fff] lg:h-28 lg:px-32">
        {!props.goToCheckout && (
          <img
            src={menuIcon}
            className="header-icon lg:hidden"
            alt="Menu Icon"
            onClick={() => props.handleMenuToggle()}
          />
        )}

        <nav className="hidden lg:block">
          <ul className="flex cursor-pointer gap-14 transition-all duration-300">
            <a
              className="text-[1.3rem] font-thin uppercase tracking-[0.3em] text-neutral-700 transition-all duration-300  hover:border-b hover:border-neutral-900"
              onClick={() => {
                props.renderWomenCategory();
                props.goToHome();
              }}
              href="#product-section"
            >
              Women
            </a>
            <a
              className="text-[1.3rem] font-thin uppercase tracking-[0.3em] text-neutral-700 transition-all duration-300  hover:border-b hover:border-neutral-900"
              onClick={() => {
                props.renderMenCategory();
                props.goToHome();
              }}
              href="#product-section"
            >
              Men
            </a>
            <a className="text-[1.3rem] font-thin uppercase tracking-[0.3em] text-neutral-700 transition-all duration-300  hover:border-b hover:border-neutral-900">
              Collaboration
            </a>
            <a className="text-[1.3rem] font-thin uppercase tracking-[0.3em] text-neutral-700 transition-all duration-300  hover:border-b hover:border-neutral-900">
              About us
            </a>
          </ul>
        </nav>

        <div className={"logo-container cursor-pointer"}>
          <h1
            className="logo "
            onClick={() => {
              props.goToHome();
              window.scrollTo(0, 0);
            }}
          >
            Dior
          </h1>
        </div>

        <div className="header-icons relative ">
          {!props.goToCheckout && (
            <img
              src={searchIcon}
              className="header-icon"
              alt="Search Icon"
              onClick={() => {
                setIsSearchActive((prevState) => !prevState);
                props.setSearchProducts([]);
                props.setSearchQuery("");
              }}
            />
          )}
          {!props.goToCheckout && (
            <img
              onClick={() => props.handleCartToggle()}
              src={cartIcon}
              className="header-icon relative lg:relative"
              alt="Bag Icon"
            />
          )}
        </div>

        {props.ProductsInCart.length > 0 && !props.goToCheckout && (
          <div
            className="pulse cursor-pointer lg:absolute"
            onClick={() => props.handleCartToggle()}
          >
            <span className="absolute bottom-[14px] right-[18px] inline-flex h-3 w-3 animate-ping rounded-full bg-black opacity-75 lg:absolute lg:bottom-[19px] lg:right-[76px] lg:inline-flex lg:h-4 lg:w-4"></span>
            <span className="absolute bottom-[14px] right-[18px]  inline-flex h-3  w-3 rounded-full bg-black lg:absolute lg:bottom-[19px] lg:right-[76px] lg:inline-flex lg:h-4 lg:w-4"></span>
          </div>
        )}
      </header>

      {isSearchActive && (
        <>
          <div className="sticky top-20 z-50 flex w-full items-center gap-6 border-y border-neutral-300 bg-neutral-100 p-5 px-8 lg:top-28 lg:px-20 ">
            <img
              className="w-8 invert-[0.5]"
              src={searchIcon}
              alt="search icon"
            />
            <input
              type="text"
              name="searchQuery"
              value={props.searchQuery}
              onChange={handleSearchQuery}
              placeholder="search for..."
              className="mr-auto w-full bg-neutral-100 text-[1.4rem] tracking-wide placeholder:text-[1.3rem] placeholder:uppercase placeholder:tracking-widest focus:outline-none"
            />
            <img
              className="w-6 cursor-pointer invert-[0.5]"
              src={closeIcon}
              alt="close icon"
              onClick={() => {
                setIsSearchActive((prevState) => !prevState);
                props.setSearchProducts([]);
                props.setSearchQuery("");
              }}
            />
          </div>

          {props.searchQuery && (
            <div className="sticky top-40 z-50 flex h-screen w-full flex-col items-start gap-6 overflow-y-auto border-y border-neutral-300 bg-neutral-100 px-8 py-8">
              {props.searchProducts &&
                props.searchProducts.map((p) => {
                  const productImage = require(`../img/product_img/${p.image}`);
                  return (
                    <div
                      className="mb-6 flex cursor-pointer items-center gap-10 lg:px-12"
                      key={p.id}
                      onClick={() => {
                        props.goToProductPage();
                        props.productPageData(p.id);
                        setIsSearchActive((prevState) => !prevState);
                      }}
                    >
                      <img
                        className="w-28 lg:w-36"
                        src={productImage}
                        alt="product image at checkout page"
                      />
                      <div className="mr-auto">
                        <h3 className="flex-wrap text-xl uppercase tracking-widest text-neutral-800 lg:text-2xl">
                          {p.name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Header;
