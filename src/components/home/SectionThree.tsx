import Image from "next/image";

export default function SectionThree() {
  return (
    <>
      <section className="max-w-screen-xl px-4 mx-auto space-y-10">
        <h1 className="py-5 text-xl font-semibold text-center md:text-2xl lg:text-3xl">
          What&apos;s in Next.js?{" "}
          <span className="ml-2 lg:text-xl font-normal text-[#555353] text-sm md:text-base">
            All the tools you need to make the Web. Faster.
          </span>
        </h1>

        <div
          className={`grid grid-cols-1 grid-rows-11 gap-5 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-3 lg:grid-rows-1`}
        >
          {cardMeta.map((Item) => (
            <div
              className={`w-full p-5 flex flex-col gap-5 items-start justify-center transition-all ease-in-out border shadow-sm rounded-xl hover:border-black ${
                Item.specialCard ? "md:row-span-2" : ""
              }`}
              key={Item.title}
            >
              {Item.imageUrl && (
                <div className="relative w-full h-[12rem]">
                  <Image
                    src={Item.imageUrl}
                    fill
                    alt="Card image"
                    className="object-contain"
                  />
                </div>
              )}

              <h2 className="text-xl font-semibold">{Item.title}</h2>
              <p className="text-sm text-[#615e5e]">{Item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const cardMeta: {
  title: string;
  description: string;
  imageUrl?: string;
  specialCard?: boolean;
}[] = [
  {
    title: "Built-in Optimizations",
    description:
      "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.",
    imageUrl: "/card-one-bg.avif",
  },
  {
    title: "Dynamic HTML Streaming",
    description:
      "Deliver content faster than ever before with HTML Streaming with Next.js & Vercel",
    imageUrl: "/card-two-bg.png",
  },
  {
    title: "React Server Components",
    description:
      "Server-first. Layouts and Streaming with an intuitive file-system router.",
    imageUrl: "/card-three-bg.avif",
  },
  {
    title: "Data Fetching",
    description:
      "Data Fetching methods that run on the server and enable you to render content in different ways.",
  },
  {
    title: "CSS Support",
    description: "CSS Modules, Sass, PostCSS, and CSS-in-JS.",
  },
  {
    title: "Client and Server Rendering",
    description:
      "Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.",
  },
  {
    title: "Node.js and Edge Run times",
    description:
      "Build scalable solutions with Serverless functions, and deliver fast dynamic, personalized content with the Edge.",
  },
  {
    title: "API Routes",
    description:
      "Build API endpoints to securely connect with third party services and consume from your frontend.",
  },
  {
    title: "Next 13",
    description:
      "The power of full-stack to the frontend. Read the release notes.",
    specialCard: true,
  },
  {
    title: "Powerful Routing and Layouts",
    description: "Build complex interfaces and ship less JavaScript.",
  },
  {
    title: "Middleware",
    description:
      "Allowing you to run code before a request is completed — for authentication, A/B testing, and localization.",
  },
];
