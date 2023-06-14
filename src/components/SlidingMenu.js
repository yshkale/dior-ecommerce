import CloseIcon from "../icons/menu-close.svg";
import User from "../icons/user.svg";

const SlidingMenu = function (props) {
  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-screen w-11/12 bg-neutral-100">
        <div className="flex justify-between border-b border-neutral-300">
          <img
            className="m-8 w-5 cursor-pointer self-center"
            src={CloseIcon}
            alt="close menu icon"
            onClick={() => props.handleMenuToggle()}
          />
        </div>

        <section className="my-20 mb-20 flex flex-col gap-8 px-8 transition-all">
          <a className="text-xl font-semibold uppercase tracking-widest">
            Shop
          </a>
          <a
            onClick={() => {
              props.handleMenuToggle();
              props.goToHome();
              props.renderWomenCategory();
            }}
            href="#product-section"
            className="cursor-pointer text-2xl font-thin tracking-wide text-neutral-500 hover:text-[#000]"
          >
            Women
          </a>
          <a
            onClick={() => {
              props.handleMenuToggle();
              props.goToHome();
              props.renderMenCategory();
            }}
            href="#product-section"
            className="cursor-pointer text-2xl font-thin tracking-wide text-neutral-500 hover:text-[#000]"
          >
            Men
          </a>
          <a className="cursor-pointer text-2xl font-thin tracking-wide text-neutral-500 hover:text-[#000]">
            Small Leather Goods
          </a>
          <a
            onClick={() => {
              props.handleMenuToggle();
              props.goToHome();
            }}
            href="#info"
            className=" cursor-pointer text-2xl font-thin tracking-wide text-neutral-500 hover:text-[#000]"
          >
            Collaboration
          </a>

          <div className="mt-20 flex cursor-pointer items-center gap-4">
            <img src={User} alt="user icon" className="w-6" />
            <p className="mt-2 self-center text-lg uppercase tracking-widest">
              Account
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SlidingMenu;
