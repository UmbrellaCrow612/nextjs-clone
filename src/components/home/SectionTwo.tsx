export default function SectionTwo() {
  return (
    <>
      <section className="relative max-w-screen-xl grid-cols-1 grid-rows-3 mx-auto mt-10 lg:mt-20">
        <div className="flex items-center justify-center py-6 text-center">
          <h1 className="text-5xl font-extrabold leading-[2.8rem] tracking-tighter lg:text-7xl max-w-[19rem] md:max-w-none text-[#3b3b3b]">
            The React Framework for the Web
          </h1>
        </div>
        <div className="flex items-center justify-center py-5 leading-relaxed">
          <p
            className="text-[#6a6a6a] text-sm tracking-tight max-w-[24rem] text-center"
            style={{ wordSpacing: "0.24rem", lineHeight: "1.6rem" }}
          >
            Used by some of the world&apos;s largest companies, Next.js enables
            you to create{" "}
            <span className="font-semibold text-black">
              full-stack Web applications
            </span>{" "}
            by extending the latest React features, and integrating powerful
            Rust-based JavaScript tooling for the fastest builds.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 py-14">
          <div className="flex items-center gap-4">
            <button className="px-5 py-3 text-white transition-all ease-in-out bg-black border rounded-md hover:bg-white hover:text-black hover:border-black">
              Get Started{" "}
            </button>
            <button className="px-5 py-3 transition-all ease-in-out bg-white border rounded-md text-[#a3a3a3] shadow-sm hover:border-black">
              Learn Next js{" "}
            </button>
          </div>
          <button className="px-2 py-3 text-sm text-gray-500 rounded-md">▲ ~ npx create-next-app@latest</button>
        </div>
      </section>
    </>
  );
}
