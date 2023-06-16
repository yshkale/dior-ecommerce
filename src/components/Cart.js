import { Link } from "react-router-dom";
import CloseIcon from "../icons/menu-close.svg";
import MinusIcon from "../icons/minus.svg";
import PlusIcon from "../icons/plus.svg";

const Cart = function (props) {
  return (
    <>
      <div className="fixed right-0 top-0 z-[60] flex h-screen w-11/12 flex-col bg-neutral-100 lg:w-[30%]">
        <div className="flex justify-between border-b border-neutral-300">
          <p className=" px-8 py-8 text-3xl font-thin uppercase tracking-widest text-neutral-800 lg:px-10 lg:py-[2.35rem]">
            Bag
          </p>
          <img
            className="mr-8 w-5 cursor-pointer self-center"
            src={CloseIcon}
            alt="close menu icon"
            onClick={() => props.handleCartToggle()}
          />
        </div>

        <section className="overflow-y-scroll">
          {props.ProductsInCart.map((p) => {
            const productImage = require(`../img/product_img/${p.image}`);
            return (
              <div
                className="product m-2 my-6 flex items-center lg:mx-4 lg:my-10"
                key={p.id}
              >
                <img
                  className="w-44 p-8"
                  src={productImage}
                  alt="img of a product"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-xl tracking-widest text-neutral-700">
                    {p.name}
                  </p>
                  <p className="text-xl tracking-widest text-neutral-500">
                    $ {p.price}
                  </p>

                  <div className="my-2 flex items-center gap-6">
                    <div className="flex gap-8 border border-neutral-300 px-6 py-3">
                      <img
                        className="w-5 cursor-pointer"
                        onClick={() => props.DecreaseQuantity(p.id)}
                        src={MinusIcon}
                        alt="a minus icon to increase the quantity"
                      />

                      <p className="text-lg">{p.quantity}</p>

                      <img
                        className="w-5 cursor-pointer"
                        onClick={() => props.IncreaseQuantity(p.id)}
                        src={PlusIcon}
                        alt="a plus icon to increase the quantity"
                      />
                    </div>

                    <a
                      className="cursor-pointer border-b border-neutral-800 text-lg"
                      onClick={() => props.removeProductFromCart(p.id)}
                    >
                      Remove
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {props.ProductsInCart.length > 0 && (
          <div className="checkout sticky bottom-0 mt-auto flex  flex-col gap-6 border-t border-neutral-300 p-8 ">
            <p className="text-[1.4rem] leading-normal tracking-wide text-neutral-600">
              Taxes and shipping calculated at checkout
            </p>
            <Link to="/checkout">
              <p
                className="w-full cursor-pointer border-neutral-900 bg-black px-10 py-4 text-center text-[1.3rem] uppercase tracking-widest text-white duration-300 ease-in-out  hover:border hover:bg-neutral-100 hover:text-black"
                onClick={() => {
                  props.handleCartToggle();
                  window.scrollTo(0, 0);
                }}
              >
                Checkout
              </p>
            </Link>
          </div>
        )}

        {props.ProductsInCart.length === 0 && (
          <div className="flex h-screen items-center justify-center">
            <p className="text-2xl font-thin uppercase tracking-[0.3rem] text-neutral-500">
              Your Bag is Empty
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
