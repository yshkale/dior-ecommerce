import circleCheck from "../icons/circle-check.svg";
import creditCard from "../icons/credit-card.svg";

const ThankyouPage = function ({ userInfo, goToHome, setProductsInCart }) {
  return (
    <div className="border-y border-neutral-300">
      <main className="lg:px-[40rem]">
        <div className="flex items-center gap-6  px-8 py-10 ">
          <img className="w-20" src={circleCheck} alt="a tick icon" />
          <div>
            <p className="text-2xl font-thin leading-relaxed text-neutral-700">
              Order #1573
            </p>
            <h2 className="text-[2rem] tracking-wide">
              Thank you {userInfo.firstName} {userInfo.lastName}!
            </h2>
          </div>
        </div>

        <div className="m-8 flex flex-col gap-4 rounded-lg border border-neutral-300">
          <div className="p-8">
            <p className="text-[1.8rem] leading-loose text-neutral-900">
              Your order is confirmed
            </p>
            <p className="text-[1.3rem] text-neutral-600">
              You'll receive an email when your order is ready.
            </p>
          </div>
        </div>

        <div className="m-8 flex flex-col gap-4 rounded-lg border border-neutral-300">
          <div className="p-8">
            <p className="text-3xl  leading-loose text-neutral-900">
              Order details
            </p>

            <div className="py-4">
              <h3 className="text-2xl font-semibold leading-loose tracking-wide">
                Contact information
              </h3>
              <p className="text-xl tracking-wide text-neutral-600">
                {userInfo.email}
              </p>
            </div>

            <div className="py-2">
              <h3 className="text-2xl font-semibold leading-loose tracking-wide">
                Shipping address
              </h3>
              <p className="text-xl leading-relaxed tracking-wide text-neutral-600">
                <p>{userInfo.firstName + userInfo.lastName}</p>
                <p>{userInfo.address}</p>
                <p>
                  {userInfo.pinCode + " " + userInfo.city}, {userInfo.state}
                </p>
                <p>{userInfo.country}</p>
                <p>{userInfo.phone}</p>
              </p>
            </div>

            <div className="py-2">
              <h3 className="text-2xl font-semibold leading-loose tracking-wide">
                Payment method
              </h3>
              <div className="flex items-center gap-4">
                <img className="w-8" src={creditCard} alt="credit card icon" />
                <p className="text-xl tracking-wide text-neutral-600">
                  - {userInfo.orderValue}
                </p>
              </div>
            </div>

            <div className="py-2">
              <h3 className="text-2xl font-semibold leading-loose tracking-wide">
                Shipping method
              </h3>
              <p className="text-xl tracking-wide text-neutral-600">
                Express shipping (Delivery in 4 - 5 days)
              </p>
            </div>
          </div>
        </div>

        <div className="my-12 flex flex-col items-center ">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              setProductsInCart([]);
              goToHome();
            }}
            className=" w-[90%] rounded-lg bg-black py-8 text-[1.3rem] tracking-wide text-white"
          >
            Continue shopping
          </button>

          <p className=" my-6 mb-10 text-center text-[1.3rem] tracking-wide text-neutral-700">
            Need help? Contact us
          </p>
        </div>
      </main>
    </div>
  );
};

export default ThankyouPage;
