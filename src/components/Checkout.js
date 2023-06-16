import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "../icons/cart-shopping.svg";
import RightArrow from "../icons/arrow-right.svg";

const Checkout = function ({ ProductsInCart, checkoutTotal, setFormData }) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    emailConcent: "",
    country: "India",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
    orderValue: checkoutTotal.toFixed(2),
  });

  const handleChange = (e) => {
    const { type, value, name, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setUserInfo((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    setFormData(userInfo);
    navigate("/thankyou");
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <div>
        <div className="flex items-center gap-4 border-y border-neutral-300 bg-[#EFEFEF] p-8 lg:px-[40rem]">
          <img className="w-6" src={CartIcon} />
          <p className="mr-auto text-[1.4rem] tracking-widest text-neutral-800">
            Order Summary
          </p>
          <p className="text-2xl font-bold tracking-wide text-neutral-800">
            $ {checkoutTotal.toFixed(2)}
          </p>
        </div>

        <div className="border-b border-neutral-300 bg-neutral-50 p-8 lg:px-[40rem]">
          {ProductsInCart &&
            ProductsInCart.map((p) => {
              let productImage = require(`../img/product_img/${p.image}`);

              return (
                <div className="mb-6 flex items-center gap-6 " key={p.id}>
                  <img
                    className="w-28"
                    src={productImage}
                    alt="product image at checkout page"
                  />
                  <div className="mr-auto flex flex-col">
                    <h3 className="text-xl  tracking-widest text-neutral-800">
                      {p.name}
                    </h3>
                    <p className="text-lg text-neutral-800">
                      Quantity: {p.quantity}
                    </p>
                  </div>

                  <p className="whitespace-nowrap text-[1.3rem] text-neutral-800">
                    $ {p.price}
                  </p>
                </div>
              );
            })}

          <div className="my-8 flex justify-between">
            <input
              className="duration-250 w-10/12 rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-widest hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
              type="text"
              placeholder="Discount code"
            />
            <button>
              <img
                className=" w-16 rounded-lg border border-neutral-300 p-4"
                src={RightArrow}
              />
            </button>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <p className="text-[1.3rem] tracking-widest text-neutral-900">
                Subtotal
              </p>
              <p className="text-[1.3rem] font-semibold tracking-wide text-neutral-800">
                $ {(checkoutTotal - 8.33).toFixed(2)}
              </p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-[1.3rem] tracking-widest text-neutral-900">
                Shipping
              </p>
              <p className="text-lg  tracking-wide text-neutral-500">
                Free shipping on all orders
              </p>
            </div>
            <div className="mb-4 flex justify-between">
              <p className="text-[1.3rem] tracking-widest text-neutral-900">
                Estimated taxes
              </p>
              <p className="text-[1.3rem]  tracking-wide text-neutral-800">
                $ 8.33
              </p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-2xl font-bold tracking-widest text-neutral-900">
                Total
              </p>
              <p className="text-[1.3rem] font-bold tracking-wide text-neutral-800">
                $ {checkoutTotal.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="border-b border-neutral-300 px-6 pt-12 lg:px-[40rem]">
            <div className="mb-12 flex flex-col gap-4">
              <h3 className="mb-2 text-2xl font-bold tracking-wide text-neutral-800">
                Contact Information
              </h3>

              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                placeholder="Email"
                className=" duration-250 block w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-widest hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                required
              />

              <div className=" flex gap-4">
                <input
                  className="w-6"
                  type="checkbox"
                  name="emailConcent"
                  value={userInfo.emailConcent}
                  onChange={handleChange}
                />
                <p className="text-[1.3rem] tracking-wide text-neutral-900">
                  Email me with news and offers
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold tracking-wide text-neutral-800">
                Shipping address
              </h3>

              <div className="flex flex-col gap-6">
                <select
                  className=" duration-250 block w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-wide hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  required
                >
                  <option value="">Country/ Region</option>
                  <option value={"India"}>India</option>
                </select>

                <input
                  className="duration-250 w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-wide hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  type="text"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                />

                <input
                  className="duration-250 w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-wide hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  type="text"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                />

                <input
                  className="duration-250 w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-wide hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                  placeholder="Address"
                  required
                />

                <input
                  className="duration-250 w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-wide hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  type="text"
                  name="apartment"
                  value={userInfo.apartment}
                  onChange={handleChange}
                  placeholder="Apartment, suite, etc. (optional)"
                />

                <input
                  className="duration-250 w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-wide hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  type="text"
                  name="city"
                  value={userInfo.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />

                <input
                  className="duration-250 w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-wide hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  type="text"
                  name="state"
                  value={userInfo.state}
                  onChange={handleChange}
                  placeholder="State"
                  required
                />

                <input
                  className="duration-250 w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-wide hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  type="number"
                  name="pinCode"
                  value={userInfo.pinCode}
                  onChange={handleChange}
                  placeholder="PIN code"
                  required
                />

                <input
                  className="duration-250 w-full rounded-lg border border-neutral-300 py-4 pl-4 text-[1.3rem] transition ease-out placeholder:pl-1  placeholder:text-[1.3rem]  placeholder:tracking-wide hover:ease-in focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  type="number"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </div>
              <div>
                <button className="my-8 w-full rounded-lg bg-black py-8 text-[1.3rem] tracking-wide text-white">
                  Complete Purchase
                </button>

                <p className="my-6 text-center text-[1.3rem] tracking-wide text-neutral-700">
                  Back to home &nbsp; &larr;
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
