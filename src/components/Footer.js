const Footer = function () {
  return (
    <>
      <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-40 lg:px-20 lg:py-20">
        <section className="section-newsletter my-14 flex flex-col gap-8 p-8">
          <h3 className="text-xl font-thin uppercase tracking-[0.5rem]">
            Newsletter
          </h3>
          <p className=" pr-10 text-xl tracking-wide text-neutral-500 lg:text-2xl">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>

          <form className="flex flex-col gap-8">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              className="my-4 border border-neutral-300 p-6 pt-7 text-2xl outline-none placeholder:text-2xl"
              required
            />

            <button className="self-start bg-[#000] px-10 py-5 text-xl uppercase tracking-widest text-[#fff]">
              Subscribe
            </button>
          </form>
        </section>

        <section className="mb-20 flex flex-col gap-8 px-8 transition-all">
          <a className="text-xl font-semibold uppercase tracking-widest">
            Shop
          </a>
          <a
            href="#product-section"
            className="cursor-pointer text-2xl font-thin tracking-wide text-neutral-500 hover:text-[#000]"
          >
            Women
          </a>
          <a
            href="#product-section"
            className="cursor-pointer text-2xl font-thin tracking-wide text-neutral-500 hover:text-[#000]"
          >
            Men
          </a>
          <a className="cursor-pointer text-2xl font-thin tracking-wide text-neutral-500 hover:text-[#000]">
            Small Leather Goods
          </a>
          <a
            href="#info"
            className="cursor-pointer text-2xl font-thin tracking-wide text-neutral-500 hover:text-[#000]"
          >
            Collaboration
          </a>
        </section>

        <section className="my-14 mb-24 mt-16 flex flex-col gap-4 px-8">
          <h3 className="mb-2 text-xl font-thin uppercase tracking-[0.5rem]">
            About the Shop
          </h3>
          <p className=" pr-8 text-xl tracking-wide text-neutral-500 lg:text-2xl">
            The story of Leo and Violette, it's ours. We are Léo Dominguez &
            Violette Polchi. Two Parisian lovers sharing our lives for more than
            8 years. Since the early days of our meeting, we always had the
            dream to develop a project together. Here it is!
          </p>
        </section>
      </div>

      <p className="m-12 text-center text-xl font-thin tracking-widest text-neutral-400 lg:text-2xl">
        &copy; 2023 &mdash; Designed and built by Yash Kale.
      </p>
    </>
  );
};

export default Footer;
