import { useState } from "react";
import "../App.css";
import bagsIcon from "../icons/bags-shopping.svg";
import leafIcon from "../icons/leaf.svg";
import thumbsIcon from "../icons/thumbs-up.svg";
import pingIcon from "../icons/location-dot.svg";
import plusIcon from "../icons/plus.svg";

const ProductPage = function (props) {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = function () {
    setShowDetails((prevState) => !prevState);
  };

  const productImage = require(`../img/product_img/${props.currentPageData.image}`);

  return (
    <>
      <div className="bg-[#EFEFEF] ">
        <div className=" flex flex-col border-b border-neutral-300 lg:px-96">
          <img
            className="self-center lg:w-2/5"
            src={productImage}
            alt="product Image"
          />
          <div className="mx-8 my-4">
            <h2 className="text-3xl font-thin leading-loose tracking-widest text-neutral-900">
              {props.currentPageData.name}
            </h2>
            <p className="text-3xl font-thin leading-loose tracking-widest text-neutral-500">
              $ {props.currentPageData.price}
            </p>
          </div>
        </div>

        <div className="mx-8 my-12 flex flex-col gap-8 lg:gap-10 lg:px-96 lg:py-10">
          <p className=" text-xl tracking-wide text-neutral-900 lg:text-2xl">
            {props.currentPageData.description}
          </p>

          <p className="mb-8 text-xl tracking-wide text-neutral-900">
            This is a demo store. To buy this product, visit Leo & Violette
            official store.
          </p>

          <a
            className="w-full cursor-pointer border border-neutral-300 bg-neutral-800 py-6 text-center text-xl uppercase tracking-[0.4em] text-neutral-50 duration-300 ease-in-out hover:bg-[#EFEFEF] hover:text-neutral-900"
            onClick={() => props.addToCart(props.currentPageData.id)}
          >
            Add to Bag
          </a>
        </div>

        <div className="m-8 grid grid-cols-2 gap-4 lg:px-96">
          <div className="flex items-center gap-3 border border-neutral-200 p-4">
            <img className="w-6" src={bagsIcon} alt="a icon of a bag" />
            <p>Mini bags</p>
          </div>
          <div className="flex items-center gap-3 border border-neutral-200 p-4">
            <img className="w-6" src={leafIcon} alt="a icon of a bag" />
            <p>Full Grain Leather</p>
          </div>
          <div className="flex items-center gap-3 border border-neutral-200 p-4">
            <img className="w-6" src={thumbsIcon} alt="a icon of a bag" />
            <p>Adjustable Straps</p>
          </div>
          <div className="flex items-center gap-3 border border-neutral-200 p-4">
            <img className="w-6" src={pingIcon} alt="a icon of a bag" />
            <p>Handmade in Italy</p>
          </div>
        </div>

        <div className="my-24 lg:px-96">
          <div className="mx-8">
            <div
              className="flex justify-between border-t border-neutral-300 py-10"
              onClick={handleDetails}
            >
              <h3 className="text-xl uppercase tracking-[0.3em] text-neutral-600">
                Product Details
              </h3>

              <img
                className={`mr-4 w-[1.2rem] transform transition-transform ${
                  showDetails ? "rotate-45" : ""
                }`}
                src={plusIcon}
                alt="a plus icon to expand the section"
              />
            </div>

            {showDetails && (
              <ul className="mx-8 mb-8 ">
                <li className="list-disc text-xl leading-loose tracking-widest text-neutral-700 lg:text-2xl lg:leading-loose">
                  Suédine and leather lining
                </li>
                <li className="list-disc text-xl leading-loose tracking-widest text-neutral-700 lg:text-2xl lg:leading-loose">
                  Adjustable strap(31,4 to 43,3in)
                </li>
                <li className="list-disc text-xl leading-loose tracking-widest text-neutral-700 lg:text-2xl lg:leading-loose">
                  Brass clap
                </li>
                <li className="list-disc text-xl leading-loose tracking-widest text-neutral-700 lg:text-2xl lg:leading-loose">
                  Weight : 0.4kg
                </li>
                <li className="list-disc text-xl leading-loose tracking-widest text-neutral-700 lg:text-2xl lg:leading-loose">
                  Gold-Plated metal parts
                </li>
                <li className="list-disc text-xl leading-loose tracking-widest text-neutral-700 lg:text-2xl lg:leading-loose">
                  Dimensions : 22x14x5cm / 8.7x5.5x2inch
                </li>
              </ul>
            )}
          </div>

          <div className="mx-8 ">
            <div className="flex justify-between border-t border-neutral-300 py-10">
              <h3 className="text-xl uppercase tracking-[0.3em] text-neutral-600">
                Shipping & Returns
              </h3>

              {/* <img
                className="mr-4 w-[1.2rem]"
                src={plusIcon}
                alt="a plus icon to expand the section"
              /> */}
            </div>

            {showDetails && (
              <div className="mb-12">
                <p className="mb-8  text-xl tracking-widest text-neutral-700 lg:text-2xl">
                  Delivery is free for all orders over $70. Otherwise, delivery
                  is $8.
                </p>
                <p className="mb-8 text-xl  tracking-widest text-neutral-700 lg:text-2xl">
                  Once your product has shipped, it usually takes 2 to 3
                  business days in France, 3 to 7 in Europe. 5 to 15 for the
                  rest of the world. If you have not received your products,
                  feel free to contact us using our contact page.
                </p>
                <p className="mb-8 text-xl  tracking-widest text-neutral-700 lg:text-2xl">
                  You can return your product up to 14 days after receiving your
                  order. Please make sure that the products are not worn, washed
                  or damaged.
                </p>
              </div>
            )}
          </div>

          <div className="mx-8 ">
            <div
              className={`flex justify-between ${
                !showDetails && "border-b"
              } border-t border-neutral-300 py-10`}
            >
              <h3 className="text-xl uppercase tracking-[0.3em] text-neutral-600">
                From the Studio
              </h3>

              {/* <img
                className="mr-4 w-[1.2rem]"
                src={plusIcon}
                alt="a plus icon to expand the section"
              /> */}
            </div>

            {showDetails && (
              <div className="mb-12">
                <p className="border-b border-neutral-300  pb-8 text-xl leading-relaxed tracking-widest text-neutral-700 lg:text-2xl">
                  Leo and Violette X Wendy Swan season 2.For this new
                  collaboration we have imagined a mini and colourful version,
                  while keeping what has made the Dalia a success since its
                  first day: clean lines, a contained interior and beautiful
                  Italian calf leather.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="product-page-img flex flex-col items-center justify-center gap-8 text-white">
          <p className="z-10 text-center text-2xl  uppercase tracking-[0.3em]">
            Collaboration
          </p>
          <h4 className=" z-10 mx-4 text-center text-3xl font-semibold uppercase tracking-widest ">
            LÉO ET VIOLETTE X WENDY SWAN
          </h4>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
