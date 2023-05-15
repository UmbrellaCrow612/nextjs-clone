import Link from "next/link";

export default function SectionOne() {
  return (
    <>
      <section className="flex items-center justify-center max-w-screen-xl mx-auto h-[8rem]">
        <Link
          className="border rounded-md shadow-md border-[#efefef] md:flex items-center h-[3.7rem] hover:bg-opacity-10 hover:bg-gray-200 transition-all ease-in-out gap-3 hidden"
          href="/"
        >
          <div className="flex gap-8 px-3">
            <div className="relative flex items-center gap-2">
              <WiredRectangleSvg
                size={24}
                fill="#333333"
                className="opacity-40"
              />
              <TriangleSvg size={24} fill="#333333" className="opacity-40" />
              <CircleSvg size={24} fill="#333333" className="opacity-40" />
              <SnowFlakeSvg size={24} fill="#333333" className="opacity-40" />
              <MultiXSvg size={24} fill="#333333" className="opacity-40" />
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-base font-semibold">Vercel Ship</span>
              <span className="font-normal text-[#6A6A6A]">
                ran May 1st - May 5th. Check out our five announcements.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center h-full px-4 border-l">
            <ArrowRight size={24} />
          </div>
        </Link>

        {/* Mobile version */}

        <Link
          className="h-[6rem] border shadow-md w-[23rem] rounded-md flex justify-between items-end py-3 px-4 md:hidden relative overflow-hidden"
          href="/"
        >
          <WiredRectangleSvg
            size={64}
            className="absolute -z-10 top-3 opacity-10"
            fill="#888"
          />
          <TriangleSvg
            size={64}
            className="absolute -z-10 top-3 opacity-10 left-24"
            fill="#888"
          />
          <CircleSvg
            size={64}
            className="absolute -z-10 top-3 opacity-10 left-44"
            fill="#888"
          />
          <SnowFlakeSvg
            size={64}
            className="absolute -z-10 top-3 opacity-10 left-64"
            fill="#888"
          />
          <MultiXSvg
            size={64}
            className="absolute -z-10 top-3 opacity-10 left-80"
            fill="#888"
          />
          <div>
            <p className="flex flex-col gap-2 text-sm font-light leading-tight text-[#6A6A6A]">
              <span>
                <strong className="font-semibold text-black">
                  Vercel Ship{" "}
                </strong>
                ran May 1st - May 5th .
              </span>
              Check out our five announcements.
            </p>
          </div>
          <div className="p-1 border rounded-md">
            <ArrowRight size={15} />
          </div>
        </Link>
      </section>
    </>
  );
}

const WiredRectangleSvg = ({
  size,
  className,
  fill,
}: {
  size: number;
  className: string;
  fill: string;
}) => {
  return (
    <>
      <svg
        fill="none"
        height={size}
        width={size}
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M12.7617 14.2866L13.1367 13.6371C12.9047 13.5031 12.6188 13.5031 12.3867 13.6371C12.1547 13.7711 12.0117 14.0187 12.0117 14.2866H12.7617ZM12.7617 36.9147H12.0117C12.0117 37.1826 12.1547 37.4302 12.3867 37.5642C12.6188 37.6981 12.9047 37.6981 13.1367 37.5642L12.7617 36.9147ZM18.5238 17.6133H19.2738C19.2738 17.3454 19.1308 17.0978 18.8988 16.9638L18.5238 17.6133ZM18.5238 33.5879L18.8988 34.2375C19.1308 34.1035 19.2738 33.8559 19.2738 33.5879H18.5238ZM12.0117 14.2866V36.9147H13.5117V14.2866H12.0117ZM18.8988 16.9638L13.1367 13.6371L12.3867 14.9361L18.1488 18.2629L18.8988 16.9638ZM19.2738 33.5879V17.6133H17.7738V33.5879H19.2738ZM13.1367 37.5642L18.8988 34.2375L18.1488 32.9384L12.3867 36.2651L13.1367 37.5642Z"
          fill={fill}
        ></path>
        <path
          d="M7 4.31885L7.375 3.66933C7.14295 3.53535 6.85705 3.53535 6.625 3.66933C6.39295 3.8033 6.25 4.0509 6.25 4.31885H7ZM7 40.2419H6.25C6.25 40.5099 6.39295 40.7575 6.625 40.8914L7 40.2419ZM25.5605 50.9579L25.1855 51.6074C25.4176 51.7414 25.7035 51.7414 25.9355 51.6074C26.1676 51.4734 26.3105 51.2258 26.3105 50.9579H25.5605ZM25.5605 44.3044H26.3105C26.3105 44.0365 26.1676 43.7889 25.9355 43.6549L25.5605 44.3044ZM12.762 36.9152H12.012C12.012 37.1832 12.155 37.4308 12.387 37.5647L12.762 36.9152ZM12.762 14.2952L13.137 13.6456C12.905 13.5117 12.6191 13.5117 12.387 13.6456C12.155 13.7796 12.012 14.0272 12.012 14.2952H12.762ZM32.4766 25.6774H33.2266C33.2266 25.4094 33.0836 25.1618 32.8516 25.0278L32.4766 25.6774ZM32.4766 33.6612H31.7266C31.7266 33.9292 31.8695 34.1768 32.1016 34.3107L32.4766 33.6612ZM38.2386 36.9879L37.8636 37.6375C38.0957 37.7714 38.3816 37.7714 38.6136 37.6375C38.8457 37.5035 38.9886 37.2559 38.9886 36.9879H38.2386ZM38.2386 23.0657H38.9886C38.9886 22.6515 38.6528 22.3157 38.2386 22.3157V23.0657ZM38.2383 23.0657H37.4883C37.4883 23.4799 37.8241 23.8157 38.2383 23.8157V23.0657ZM38.2383 22.3505H38.9883C38.9883 22.0825 38.8453 21.8349 38.6133 21.7009L38.2383 22.3505ZM11.765 7.06609L12.14 6.41657C11.9677 6.31712 11.763 6.29017 11.5709 6.34165C11.3787 6.39313 11.2149 6.51883 11.1155 6.6911L11.765 7.06609ZM11.7633 7.06896L11.3883 7.71848C11.5606 7.81794 11.7653 7.84489 11.9575 7.7934C12.1496 7.74192 12.3134 7.61622 12.4129 7.44396L11.7633 7.06896ZM7.75 33.5885V4.31885H6.25V33.5885H7.75ZM7.75 39.7429V33.5885H6.25V39.7429H7.75ZM7.75 40.2419V39.7429H6.25V40.2419H7.75ZM25.9355 50.3083L7.375 39.5924L6.625 40.8914L25.1855 51.6074L25.9355 50.3083ZM24.8105 44.3044V50.9579H26.3105V44.3044H24.8105ZM12.387 37.5647L25.1855 44.954L25.9355 43.6549L13.137 36.2657L12.387 37.5647ZM12.012 14.2952V36.9152H13.512V14.2952H12.012ZM32.8516 25.0278L13.137 13.6456L12.387 14.9447L32.1016 26.3269L32.8516 25.0278ZM33.2266 33.6612V25.6774H31.7266V33.6612H33.2266ZM38.6136 36.3384L32.8516 33.0117L32.1016 34.3107L37.8636 37.6375L38.6136 36.3384ZM37.4886 23.0657V36.9879H38.9886V23.0657H37.4886ZM38.2383 23.8157H38.2386V22.3157H38.2383V23.8157ZM37.4883 22.3505V23.0657H38.9883V22.3505H37.4883ZM11.39 7.71561L37.8633 23L38.6133 21.7009L12.14 6.41657L11.39 7.71561ZM12.4129 7.44396L12.4145 7.44109L11.1155 6.6911L11.1138 6.69396L12.4129 7.44396ZM6.625 4.96837L11.3883 7.71848L12.1383 6.41944L7.375 3.66933L6.625 4.96837Z"
          fill={fill}
        ></path>
        <path
          d="M7.00098 4.32671L6.62598 3.6772C6.39393 3.81117 6.25098 4.05877 6.25098 4.32671C6.25098 4.59466 6.39393 4.84226 6.62598 4.97623L7.00098 4.32671ZM38.2262 22.3546L37.8512 23.0041C38.0832 23.1381 38.3691 23.1381 38.6012 23.0041L38.2262 22.3546ZM12.763 1L13.138 0.350481C12.906 0.216506 12.6201 0.216506 12.388 0.350481L12.763 1ZM43.9882 19.0279L44.3632 19.6774C44.5953 19.5434 44.7382 19.2958 44.7382 19.0279C44.7382 18.7599 44.5953 18.5123 44.3632 18.3784L43.9882 19.0279ZM6.62598 4.97623L37.8512 23.0041L38.6012 21.7051L7.37598 3.6772L6.62598 4.97623ZM12.388 0.350481L6.62598 3.6772L7.37598 4.97623L13.138 1.64952L12.388 0.350481ZM44.3632 18.3784L13.138 0.350481L12.388 1.64952L43.6132 19.6774L44.3632 18.3784ZM38.6012 23.0041L44.3632 19.6774L43.6132 18.3784L37.8512 21.7051L38.6012 23.0041Z"
          fill={fill}
        ></path>
        <path
          d="M19.8033 40.9816L19.4283 40.3321C19.1962 40.466 19.0533 40.7136 19.0533 40.9816C19.0533 41.2495 19.1962 41.4971 19.4283 41.6311L19.8033 40.9816ZM19.8058 40.9801L20.1808 41.6296C20.4128 41.4956 20.5558 41.248 20.5558 40.9801C20.5558 40.7122 20.4128 40.4646 20.1808 40.3306L19.8058 40.9801ZM25.5653 44.3083L25.1903 44.9578C25.4224 45.0918 25.7083 45.0918 25.9403 44.9578L25.5653 44.3083ZM38.2412 36.9899L38.6162 37.6394C38.8483 37.5054 38.9912 37.2578 38.9912 36.9899C38.9912 36.7219 38.8483 36.4743 38.6162 36.3403L38.2412 36.9899ZM32.4792 33.6631L32.8542 33.0136C32.6221 32.8796 32.3362 32.8796 32.1042 33.0136L32.4792 33.6631ZM25.5678 37.6534L25.1928 38.3029C25.4249 38.4369 25.7108 38.4369 25.9428 38.3029L25.5678 37.6534ZM18.5257 33.5876L18.9007 32.9381C18.6687 32.8042 18.3828 32.8042 18.1507 32.9381L18.5257 33.5876ZM12.7637 36.9144L12.3887 36.2648C12.1566 36.3988 12.0137 36.6464 12.0137 36.9144C12.0137 37.1823 12.1566 37.4299 12.3887 37.5639L12.7637 36.9144ZM20.1783 41.6311L20.1808 41.6296L19.4307 40.3306L19.4283 40.3321L20.1783 41.6311ZM25.9403 43.6588L20.1783 40.332L19.4283 41.6311L25.1903 44.9578L25.9403 43.6588ZM37.8662 36.3403L25.1903 43.6588L25.9403 44.9578L38.6162 37.6394L37.8662 36.3403ZM32.1042 34.3127L37.8662 37.6394L38.6162 36.3403L32.8542 33.0136L32.1042 34.3127ZM25.9428 38.3029L32.8542 34.3127L32.1042 33.0136L25.1928 37.0039L25.9428 38.3029ZM25.9428 37.0039L18.9007 32.9381L18.1507 34.2372L25.1928 38.3029L25.9428 37.0039ZM18.1507 32.9381L12.3887 36.2648L13.1387 37.5639L18.9007 34.2372L18.1507 32.9381ZM12.3887 37.5639L19.4308 41.6296L20.1808 40.3306L13.1387 36.2648L12.3887 37.5639Z"
          fill={fill}
        ></path>
        <path
          d="M38.2391 22.354L38.8283 21.8898C38.6305 21.6388 38.2954 21.5407 37.9935 21.6454C37.6916 21.75 37.4891 22.0345 37.4891 22.354H38.2391ZM38.2391 36.9877L38.6141 37.6372C38.8462 37.5032 38.9891 37.2556 38.9891 36.9877H38.2391ZM38.2394 22.3544L37.6503 22.8185C37.881 23.1113 38.2917 23.1903 38.6144 23.0039L38.2394 22.3544ZM44.0012 19.0278H44.7512C44.7512 18.7599 44.6082 18.5123 44.3762 18.3783C44.1441 18.2443 43.8582 18.2443 43.6262 18.3783L44.0012 19.0278ZM44.0012 39.9269V40.6769C44.4154 40.6769 44.7512 40.3412 44.7512 39.9269H44.0012ZM43.9997 39.9269V39.1769C43.5855 39.1769 43.2497 39.5127 43.2497 39.9269H43.9997ZM43.9997 40.3152L44.3747 40.9647C44.6068 40.8308 44.7497 40.5832 44.7497 40.3152H43.9997ZM25.5596 50.9617H24.8096C24.8096 51.2296 24.9525 51.4772 25.1846 51.6112C25.4166 51.7452 25.7025 51.7452 25.9346 51.6112L25.5596 50.9617ZM25.5596 44.3082L25.1846 43.6587C24.9525 43.7927 24.8096 44.0403 24.8096 44.3082H25.5596ZM37.4891 22.354V36.9877H38.9891V22.354H37.4891ZM38.8286 21.8902L38.8283 21.8898L37.65 22.8182L37.6503 22.8185L38.8286 21.8902ZM43.6262 18.3783L37.8644 21.7049L38.6144 23.0039L44.3762 19.6774L43.6262 18.3783ZM44.7512 39.9269V19.0278H43.2512V39.9269H44.7512ZM43.9997 40.6769H44.0012V39.1769H43.9997V40.6769ZM43.2497 39.9269V40.3152H44.7497V39.9269H43.2497ZM43.6247 39.6657L25.1846 50.3121L25.9346 51.6112L44.3747 40.9647L43.6247 39.6657ZM26.3096 50.9617V44.3082H24.8096V50.9617H26.3096ZM25.9346 44.9577L38.6141 37.6372L37.8641 36.3382L25.1846 43.6587L25.9346 44.9577Z"
          fill={fill}
        ></path>
      </svg>
    </>
  );
};

const TriangleSvg = ({
  size,
  className,
  fill,
}: {
  size: number;
  className: string;
  fill: string;
}) => {
  return (
    <>
      <svg
        fill="none"
        height={size}
        width={size}
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M37.9754 47.6614L5.26304 47.6614L1.17773 40.5855L1.17773 40.568L33.88 40.568L25.7364 26.4629L29.8319 19.3694L46.1691 47.6664H37.9783L37.9754 47.6614Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M33.957 12.1434L50.3131 40.4731L46.2278 47.5491L46.2127 47.5579L29.8615 19.2369L21.767 33.257L13.5762 33.257L29.8667 5.04095L33.9622 12.1344L33.957 12.1434Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M21.4602 4.99992V4.24992C21.1923 4.24992 20.9447 4.39287 20.8107 4.62492L21.4602 4.99992ZM5.10422 33.3294V34.0794C5.37217 34.0794 5.61976 33.9364 5.75374 33.7044L5.10422 33.3294ZM29.6312 4.99992L30.0062 4.35041C29.8922 4.28458 29.7628 4.24992 29.6312 4.24992V4.99992ZM29.6461 5.00854L30.2956 5.38354C30.5027 5.02483 30.3798 4.56615 30.0211 4.35903L29.6461 5.00854ZM13.2951 33.3294L12.6455 32.9544C12.5116 33.1864 12.5116 33.4723 12.6455 33.7044C12.7795 33.9364 13.0271 34.0794 13.2951 34.0794V33.3294ZM29.6718 33.3294L30.3213 32.9544C30.1873 32.7223 29.9397 32.5794 29.6718 32.5794V33.3294ZM33.7672 40.4228V41.1728C34.0351 41.1728 34.2827 41.0299 34.4167 40.7978C34.5507 40.5658 34.5507 40.2799 34.4167 40.0478L33.7672 40.4228ZM1 40.4228L0.350481 40.0478C0.216506 40.2799 0.216506 40.5658 0.350481 40.7978C0.484456 41.0299 0.732051 41.1728 1 41.1728V40.4228ZM5.09542 33.3294L5.09542 32.5794C4.82747 32.5794 4.57988 32.7223 4.4459 32.9544L5.09542 33.3294ZM20.8107 4.62492L4.4547 32.9544L5.75374 33.7044L22.1098 5.37492L20.8107 4.62492ZM29.6312 4.24992L21.4602 4.24992V5.74992L29.6312 5.74992V4.24992ZM30.0211 4.35903L30.0062 4.35041L29.2562 5.64943L29.2711 5.65805L30.0211 4.35903ZM13.9446 33.7044L30.2956 5.38354L28.9966 4.63354L12.6455 32.9544L13.9446 33.7044ZM29.6718 32.5794H13.2951V34.0794H29.6718V32.5794ZM34.4167 40.0478L30.3213 32.9544L29.0222 33.7044L33.1177 40.7978L34.4167 40.0478ZM1 41.1728L33.7672 41.1728V39.6728L1 39.6728L1 41.1728ZM4.4459 32.9544L0.350481 40.0478L1.64952 40.7978L5.74494 33.7044L4.4459 32.9544ZM5.10422 32.5794H5.09542L5.09542 34.0794H5.10422L5.10422 32.5794Z"
          fill={fill}
        ></path>
      </svg>
    </>
  );
};

const CircleSvg = ({
  size,
  className,
  fill,
}: {
  size: number;
  className: string;
  fill: string;
}) => {
  return (
    <>
      <svg
        fill="none"
        height={size}
        width={size}
        className={className}
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.0334 47.3032C25.2029 47.5627 24.0171 47.6665 23.3343 47.6665C11.5522 47.6665 2.00098 38.1153 2.00098 26.3332C2.00098 14.5511 11.5522 4.99988 23.3343 4.99988C35.1164 4.99988 44.6676 14.5511 44.6676 26.3332C44.6676 27.4632 44.5798 28.5727 44.4105 29.6552"
          stroke={fill}
          strokeWidth="1.5"
        ></path>
        <path
          d="M13.1586 14.395C11.0824 16.139 9.59068 19.0319 9.10437 20.2603C8.53383 22.1851 8.22754 24.2235 8.22754 26.3333C8.22754 38.1154 17.7788 47.6667 29.5609 47.6667C41.3429 47.6667 50.8942 38.1154 50.8942 26.3333C50.8942 14.5513 41.3429 5 29.5609 5C28.4128 5 27.4935 5.03302 26.3946 5.20762"
          stroke={fill}
          strokeWidth="1.5"
        ></path>
        <path
          d="M25.7716 41.6974C33.1396 40.4441 38.8519 33.9821 38.8519 26.2814C38.8519 17.6813 31.857 10.7096 23.2282 10.7096C20.1104 10.7096 17.2059 11.6198 14.7676 13.1882C14.1671 13.5745 13.5949 14.0007 13.0547 14.463"
          stroke={fill}
          strokeWidth="1.5"
        ></path>
        <path
          d="M26.3974 10.969L24.1135 11.7086C17.9011 13.7664 13.4209 19.6062 13.4209 26.4889C13.4209 35.0889 20.4159 42.0606 29.0446 42.0606C33.0045 42.0606 36.6203 40.5923 39.3739 38.1722C41.3982 36.393 43.7443 32.7591 44.4087 29.6032"
          stroke={fill}
          strokeWidth="1.5"
        ></path>
      </svg>
    </>
  );
};

const SnowFlakeSvg = ({
  size,
  className,
  fill,
}: {
  size: number;
  className: string;
  fill: string;
}) => {
  return (
    <>
      <svg
        fill="none"
        height={size}
        width={size}
        className={className}
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.992 12.1112L20.0661 8.57398L20.0661 8.53732L25.992 5.0001L31.918 8.53732L31.918 8.57398L25.992 12.1112Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M25.9718 19.364L25.2218 19.364C25.2218 19.632 25.3647 19.8796 25.5968 20.0135C25.8288 20.1475 26.1147 20.1475 26.3468 20.0135L25.9718 19.364ZM32.0566 15.8509L32.4316 16.5004C32.6637 16.3665 32.8066 16.1189 32.8066 15.8509L32.0566 15.8509ZM25.9718 12.2651L25.5968 11.6156C25.3647 11.7495 25.2218 11.9971 25.2218 12.2651L25.9718 12.2651ZM32.0566 8.75202L32.4316 9.40154C32.6636 9.26756 32.8066 9.01997 32.8066 8.75202L32.0566 8.75202ZM32.0566 8.71548L32.4281 8.06396C32.196 7.93158 31.9109 7.93273 31.6799 8.06696C31.4488 8.2012 31.3066 8.44824 31.3066 8.71548L32.0566 8.71548ZM32.0566 8.7155L32.8066 8.7155C32.8066 8.44612 32.6622 8.19742 32.4282 8.06398L32.0566 8.7155ZM26.3468 20.0135L32.4316 16.5004L31.6816 15.2014L25.5968 18.7145L26.3468 20.0135ZM25.2218 12.2651L25.2218 19.364L26.7218 19.364L26.7218 12.2651L25.2218 12.2651ZM31.6816 8.1025L25.5968 11.6156L26.3468 12.9146L32.4316 9.40154L31.6816 8.1025ZM31.3066 8.71548L31.3066 8.75202L32.8066 8.75202L32.8066 8.71548L31.3066 8.71548ZM32.4282 8.06398L32.4281 8.06396L31.6851 9.36699L31.6851 9.36702L32.4282 8.06398ZM32.8066 15.8509L32.8066 8.7155L31.3066 8.7155L31.3066 15.8509L32.8066 15.8509Z"
          fill="#333333"
        ></path>
        <path
          d="M25.9923 40.5558L31.9183 44.093V44.1297L25.9923 47.6669L20.0664 44.1297V44.093L25.9923 40.5558Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M25.9735 25.9927L26.7235 25.9927C26.7235 25.7247 26.5806 25.4771 26.3485 25.3432C26.1165 25.2092 25.8306 25.2092 25.5985 25.3432L25.9735 25.9927ZM19.8887 29.5058L19.5137 28.8563C19.2816 28.9902 19.1387 29.2378 19.1387 29.5058H19.8887ZM25.9735 40.5287L26.3485 41.1783C26.5806 41.0443 26.7235 40.7967 26.7235 40.5287H25.9735ZM19.8887 44.0418H19.1387C19.1387 44.3098 19.2816 44.5574 19.5137 44.6914C19.7457 44.8253 20.0316 44.8253 20.2637 44.6914L19.8887 44.0418ZM25.5985 25.3432L19.5137 28.8563L20.2637 30.1553L26.3485 26.6422L25.5985 25.3432ZM26.7235 40.5287L26.7235 25.9927L25.2235 25.9927L25.2235 40.5287H26.7235ZM20.2637 44.6914L26.3485 41.1783L25.5985 39.8792L19.5137 43.3923L20.2637 44.6914ZM19.1387 29.5058V44.0418H20.6387V29.5058H19.1387Z"
          fill={fill}
        ></path>
        <path
          d="M25.9718 25.9927H25.2218C25.2218 25.7247 25.3647 25.4771 25.5968 25.3432C25.8288 25.2092 26.1147 25.2092 26.3468 25.3432L25.9718 25.9927ZM32.0566 29.5058L32.4316 28.8563C32.6637 28.9902 32.8066 29.2378 32.8066 29.5058H32.0566ZM25.9718 40.5288L25.5968 41.1783C25.3647 41.0443 25.2218 40.7967 25.2218 40.5288H25.9718ZM32.0566 44.0418L32.4316 43.3923C32.6636 43.5263 32.8066 43.7739 32.8066 44.0418H32.0566ZM32.0566 44.0783L32.4259 44.7311C32.1937 44.8624 31.9092 44.8605 31.6787 44.7261C31.4483 44.5917 31.3066 44.345 31.3066 44.0783H32.0566ZM32.0566 44.0782H32.8066C32.8066 44.3486 32.6612 44.598 32.4259 44.731L32.0566 44.0782ZM26.3468 25.3432L32.4316 28.8563L31.6816 30.1553L25.5968 26.6422L26.3468 25.3432ZM25.2218 40.5288V25.9927H26.7218V40.5288H25.2218ZM31.6816 44.6914L25.5968 41.1783L26.3468 39.8792L32.4316 43.3923L31.6816 44.6914ZM31.3066 44.0783V44.0418H32.8066V44.0783H31.3066ZM32.4259 44.731L32.4259 44.7311L31.6873 43.4255L31.6874 43.4254L32.4259 44.731ZM32.8066 29.5058V44.0782H31.3066V29.5058H32.8066Z"
          fill={fill}
        ></path>
        <path
          d="M38.2055 33.0549L44.2904 29.5418L44.3219 29.56L44.3219 36.5862L38.237 40.0993L38.2055 40.0811L38.2055 33.0549Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M13.4965 33.6283L13.4965 40.6545L13.465 40.6727L7.38014 37.1596L7.38014 30.1334L7.41167 30.1152L13.4965 33.6283Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M32.0551 29.5057L32.4301 28.8562C32.1981 28.7222 31.9122 28.7222 31.6801 28.8562C31.4481 28.9902 31.3051 29.2378 31.3051 29.5057L32.0551 29.5057ZM32.0551 36.5319L31.3051 36.5319C31.3051 36.7999 31.4481 37.0475 31.6801 37.1815L32.0551 36.5319ZM38.2035 33.0555L38.9535 33.0555C38.9535 32.7875 38.8105 32.5399 38.5785 32.406L38.2035 33.0555ZM38.2035 40.0815L37.4535 40.0815C37.4535 40.3495 37.5964 40.5971 37.8285 40.731L38.2035 40.0815ZM38.2347 40.0996L38.6102 40.7488C38.8421 40.6147 38.9848 40.3671 38.9847 40.0993C38.9846 39.8314 38.8417 39.584 38.6097 39.45L38.2347 40.0996ZM38.2346 40.0996L37.8596 40.7492C38.0918 40.8832 38.378 40.8831 38.6101 40.7489L38.2346 40.0996ZM31.3051 29.5057L31.3051 36.5319L32.8051 36.5319L32.8051 29.5057L31.3051 29.5057ZM38.5785 32.406L32.4301 28.8562L31.6801 30.1553L37.8285 33.705L38.5785 32.406ZM38.9535 40.0815L38.9535 33.0555L37.4535 33.0555L37.4535 40.0815L38.9535 40.0815ZM38.6097 39.45L38.5785 39.432L37.8285 40.731L37.8597 40.7491L38.6097 39.45ZM38.6101 40.7489L38.6102 40.7488L37.8592 39.4504L37.859 39.4504L38.6101 40.7489ZM31.6801 37.1815L37.8596 40.7492L38.6096 39.4501L32.4301 35.8824L31.6801 37.1815Z"
          fill={fill}
        ></path>
        <path
          d="M19.8345 30.049L19.4595 29.3994C19.6916 29.2655 19.9775 29.2655 20.2095 29.3994C20.4416 29.5334 20.5845 29.781 20.5845 30.049L19.8345 30.049ZM19.8345 37.0752L20.5845 37.0752C20.5845 37.3431 20.4416 37.5907 20.2095 37.7247L19.8345 37.0752ZM13.8012 33.5323L13.0512 33.5323C13.0512 33.2644 13.1941 33.0168 13.4262 32.8828L13.8012 33.5323ZM13.8012 40.5583L14.5512 40.5583C14.5512 40.8262 14.4082 41.0738 14.1762 41.2078L13.8012 40.5583ZM13.7697 40.5764L13.3937 41.2254C13.1621 41.0912 13.0195 40.8436 13.0197 40.5759C13.0199 40.3081 13.1628 40.0608 13.3947 39.9269L13.7697 40.5764ZM13.7699 40.5766L14.1449 41.2261C13.9125 41.3603 13.6261 41.36 13.3939 41.2255L13.7699 40.5766ZM20.5845 30.049L20.5845 37.0752L19.0845 37.0752L19.0845 30.049L20.5845 30.049ZM13.4262 32.8828L19.4595 29.3994L20.2095 30.6985L14.1762 34.1818L13.4262 32.8828ZM13.0512 40.5583L13.0512 33.5323L14.5512 33.5323L14.5512 40.5583L13.0512 40.5583ZM13.3947 39.9269L13.4262 39.9088L14.1762 41.2078L14.1447 41.226L13.3947 39.9269ZM13.3939 41.2255L13.3937 41.2254L14.1457 39.9275L14.1459 39.9276L13.3939 41.2255ZM20.2095 37.7247L14.1449 41.2261L13.3949 39.927L19.4595 36.4256L20.2095 37.7247Z"
          fill={fill}
        ></path>
        <path
          d="M13.1587 18.905L7.07388 22.4181L7.04235 22.3999L7.04235 15.3737L13.1272 11.8606L13.1587 11.8788L13.1587 18.905Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M19.8835 15.7188H19.1335C19.1335 15.9867 19.2764 16.2343 19.5085 16.3683L19.8835 15.7188ZM25.9683 19.2319L25.5933 19.8814C25.8254 20.0154 26.1113 20.0154 26.3433 19.8814C26.5754 19.7474 26.7183 19.4998 26.7183 19.2319H25.9683ZM19.8835 8.58337L20.2585 7.93385C20.0264 7.79988 19.7405 7.79988 19.5085 7.93385C19.2764 8.06783 19.1335 8.31542 19.1335 8.58337L19.8835 8.58337ZM25.9683 12.0965H26.7183C26.7183 11.8285 26.5754 11.5809 26.3433 11.447L25.9683 12.0965ZM25.7134 19.1473H26.4634C26.4634 18.8793 26.3204 18.6317 26.0884 18.4977L25.7134 19.1473ZM25.7134 26.1734L25.3384 26.823C25.5704 26.9569 25.8563 26.9569 26.0884 26.823C26.3204 26.689 26.4634 26.4414 26.4634 26.1734H25.7134ZM13.125 11.8794L13.5 11.2299C13.268 11.0959 12.9821 11.0959 12.75 11.2299C12.518 11.3638 12.375 11.6114 12.375 11.8794H13.125ZM13.125 18.9055L13.4907 19.5604C13.728 19.4278 13.875 19.1773 13.875 18.9055H13.125ZM13.125 18.9056L12.7593 18.2507C12.5237 18.3823 12.377 18.6303 12.375 18.9002C12.3731 19.17 12.5163 19.4201 12.75 19.5551L13.125 18.9056ZM19.5085 16.3683L25.5933 19.8814L26.3433 18.5824L20.2585 15.0693L19.5085 16.3683ZM19.1335 8.58337L19.1335 15.7188H20.6335L20.6335 8.58337L19.1335 8.58337ZM26.3433 11.447L20.2585 7.93385L19.5085 9.23289L25.5933 12.746L26.3433 11.447ZM26.7183 19.2319L26.7183 12.0965H25.2183L25.2183 19.2319H26.7183ZM24.9634 19.1473L24.9634 26.1734H26.4634L26.4634 19.1473H24.9634ZM12.75 12.5289L25.3384 19.7968L26.0884 18.4977L13.5 11.2299L12.75 12.5289ZM13.875 18.9055L13.875 11.8794H12.375L12.375 18.9055H13.875ZM13.4907 19.5604L13.4907 19.5604L12.7594 18.2507L12.7593 18.2507L13.4907 19.5604ZM26.0884 25.5239L13.5 18.256L12.75 19.5551L25.3384 26.823L26.0884 25.5239Z"
          fill={fill}
        ></path>
        <path
          d="M19.6299 29.6746L19.2549 30.3241C19.487 30.458 19.7728 30.458 20.0049 30.3241L19.6299 29.6746ZM25.7148 26.1615L26.0898 26.811C26.3218 26.677 26.4648 26.4294 26.4648 26.1615C26.4648 25.8935 26.3218 25.6459 26.0898 25.5119L25.7148 26.1615ZM7.00977 22.3883H6.25977C6.25977 22.6563 6.40271 22.9039 6.63477 23.0378L7.00977 22.3883ZM7.00977 22.3883L7.38476 21.7388C7.15271 21.6048 6.86682 21.6048 6.63477 21.7388C6.40271 21.8727 6.25977 22.1203 6.25977 22.3883H7.00977ZM7.04157 22.4066L6.66657 23.0562C6.89862 23.1901 7.18452 23.1901 7.41657 23.0562L7.04157 22.4066ZM13.1264 18.8936L13.5014 18.244C13.2693 18.1101 12.9834 18.1101 12.7514 18.244L13.1264 18.8936ZM13.5248 26.3304L13.8998 25.6809C13.6677 25.5469 13.3819 25.5469 13.1498 25.6809L13.5248 26.3304ZM19.6097 29.8435L19.9847 30.493C20.2167 30.3591 20.3597 30.1115 20.3597 29.8435C20.3597 29.5756 20.2167 29.328 19.9847 29.194L19.6097 29.8435ZM7.38689 29.8741L7.01189 29.2246C6.77984 29.3586 6.63689 29.6062 6.63689 29.8741C6.63689 30.1421 6.77984 30.3897 7.01189 30.5237L7.38689 29.8741ZM13.4613 33.3812L14.2113 33.3812C14.2113 33.1133 14.0684 32.8657 13.8363 32.7317L13.4613 33.3812ZM13.4613 33.3933L12.7113 33.3932C12.7113 33.6612 12.8543 33.9088 13.0863 34.0428C13.3184 34.1767 13.6043 34.1768 13.8363 34.0428L13.4613 33.3933ZM20.0049 30.3241L26.0898 26.811L25.3398 25.5119L19.2549 29.025L20.0049 30.3241ZM6.63477 23.0378L19.2549 30.3241L20.0049 29.025L7.38477 21.7388L6.63477 23.0378ZM6.25977 22.3883V22.3883H7.75977V22.3883H6.25977ZM7.41657 21.7571L7.38476 21.7388L6.63477 23.0378L6.66657 23.0562L7.41657 21.7571ZM12.7514 18.244L6.66657 21.7571L7.41657 23.0562L13.5014 19.5431L12.7514 18.244ZM26.0898 25.5119L13.5014 18.244L12.7514 19.5431L25.3398 26.811L26.0898 25.5119ZM13.1498 26.9799L19.2347 30.493L19.9847 29.194L13.8998 25.6809L13.1498 26.9799ZM7.76189 30.5237L13.8998 26.9799L13.1498 25.6809L7.01189 29.2246L7.76189 30.5237ZM13.8363 32.7317L7.76189 29.2246L7.01189 30.5237L13.0863 34.0307L13.8363 32.7317ZM14.2113 33.3933L14.2113 33.3812L12.7113 33.3812L12.7113 33.3932L14.2113 33.3933ZM19.2347 29.194L13.0863 32.7437L13.8363 34.0428L19.9847 30.493L19.2347 29.194Z"
          fill={fill}
        ></path>
        <path
          d="M38.5601 18.9052L38.5601 11.879L38.5916 11.8608L44.6765 15.3739L44.6765 22.4001L44.645 22.4183L38.5601 18.9052Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M32.1714 29.5719L31.7964 30.2214C31.5644 30.0874 31.4214 29.8398 31.4214 29.5719C31.4214 29.3039 31.5644 29.0563 31.7964 28.9224L32.1714 29.5719ZM38.2563 26.0588L37.8813 25.4093C38.1134 25.2753 38.3992 25.2753 38.6313 25.4093L38.2563 26.0588ZM38.2048 33.0552L38.9548 33.0547C38.9549 33.3228 38.8121 33.5705 38.58 33.7046C38.3479 33.8387 38.0619 33.8388 37.8298 33.7048L38.2048 33.0552ZM38.2048 33.055L37.4548 33.0555C37.4546 32.7874 37.5975 32.5396 37.8298 32.4055L38.2048 33.055ZM44.2894 29.542L44.6644 28.8925C44.8965 29.0265 45.0394 29.2741 45.0394 29.542C45.0394 29.81 44.8965 30.0576 44.6644 30.1915L44.2894 29.542ZM31.7964 28.9224L37.8813 25.4093L38.6313 26.7083L32.5464 30.2214L31.7964 28.9224ZM37.8298 33.7048L31.7964 30.2214L32.5464 28.9224L38.5798 32.4057L37.8298 33.7048ZM38.9548 33.0545L38.9548 33.0547L37.4548 33.0558L37.4548 33.0555L38.9548 33.0545ZM44.6644 30.1915L38.5798 33.7045L37.8298 32.4055L43.9144 28.8925L44.6644 30.1915ZM38.6313 25.4093L44.6644 28.8925L43.9144 30.1915L37.8813 26.7083L38.6313 25.4093Z"
          fill={fill}
        ></path>
        <path
          d="M25.9703 26.1733L25.5953 25.5238C25.3632 25.6578 25.2203 25.9054 25.2203 26.1733C25.2203 26.4413 25.3632 26.6889 25.5953 26.8229L25.9703 26.1733ZM32.0551 29.6864L31.6801 30.336C31.9122 30.4699 32.1981 30.4699 32.4301 30.336L32.0551 29.6864ZM38.5586 18.9054L38.9336 18.2559C38.7016 18.122 38.4157 18.122 38.1836 18.2559L38.5586 18.9054ZM44.6435 22.4185L44.2685 23.068C44.5005 23.202 44.7864 23.202 45.0185 23.068L44.6435 22.4185ZM44.6753 22.4002L45.4252 22.396C45.4238 22.1288 45.2802 21.8826 45.0485 21.7496C44.8167 21.6166 44.5317 21.617 44.3003 21.7506L44.6753 22.4002ZM44.6753 22.4002L45.0503 23.0497C45.2836 22.915 45.4267 22.6655 45.4253 22.3961L44.6753 22.4002ZM25.5953 26.8229L31.6801 30.336L32.4301 29.0369L26.3453 25.5238L25.5953 26.8229ZM38.1836 18.2559L25.5953 25.5238L26.3453 26.8229L38.9336 19.555L38.1836 18.2559ZM45.0185 21.769L38.9336 18.2559L38.1836 19.555L44.2685 23.068L45.0185 21.769ZM44.3003 21.7506L44.2685 21.769L45.0185 23.068L45.0503 23.0497L44.3003 21.7506ZM45.4253 22.3961L45.4252 22.396L43.9253 22.4043L43.9253 22.4043L45.4253 22.3961ZM32.4301 30.336L45.0503 23.0497L44.3003 21.7507L31.6801 29.0369L32.4301 30.336Z"
          fill={fill}
        ></path>
        <path
          d="M25.9711 26.3423L26.3461 26.9918C26.1141 27.1258 25.8282 27.1258 25.5961 26.9918C25.3641 26.8578 25.2211 26.6102 25.2211 26.3423L25.9711 26.3423ZM25.9711 19.3161L25.2211 19.3161C25.2211 19.0481 25.3641 18.8005 25.5961 18.6666L25.9711 19.3161ZM38.5595 19.0744L38.9334 18.4242C39.1659 18.5579 39.3093 18.8055 39.3095 19.0737C39.3097 19.3419 39.1668 19.5898 38.9345 19.7239L38.5595 19.0744ZM38.5595 19.0744L38.1856 19.7245C37.9529 19.5907 37.8095 19.3428 37.8095 19.0744L38.5595 19.0744ZM38.5595 12.0482L38.1845 11.3987C38.4165 11.2647 38.7024 11.2647 38.9345 11.3987C39.1665 11.5327 39.3095 11.7803 39.3095 12.0482L38.5595 12.0482ZM25.2211 26.3423L25.2211 19.3161L26.7211 19.3161L26.7211 26.3423L25.2211 26.3423ZM38.9345 19.7239L26.3461 26.9918L25.5961 25.6928L38.1845 18.4249L38.9345 19.7239ZM38.9333 18.4242L38.9334 18.4242L38.1857 19.7246L38.1856 19.7245L38.9333 18.4242ZM39.3095 12.0482L39.3095 19.0744L37.8095 19.0744L37.8095 12.0482L39.3095 12.0482ZM25.5961 18.6666L38.1845 11.3987L38.9345 12.6977L26.3461 19.9656L25.5961 18.6666Z"
          fill={fill}
        ></path>
      </svg>
    </>
  );
};

const MultiXSvg = ({
  size,
  className,
  fill,
}: {
  size: number;
  className: string;
  fill: string;
}) => {
  return (
    <>
      <svg
        fill="none"
        height={size}
        width={size}
        className={className}
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.5568 14.0333L37.2512 8.11052L37.2692 8.07932L44.0512 7.98068L47.3568 13.9034L47.3388 13.9346L40.5568 14.0333Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M33.2861 14.7068L36.7389 20.6871L40.5616 14.0659L37.1089 8.08557L33.2861 14.7068Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M26.3212 38.702L33.1032 38.8006L33.1212 38.8318L29.8156 44.7545L23.0336 44.6559L23.0156 44.6247L26.3212 38.702Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M40.2997 38.702L47.0817 38.8006L47.0997 38.8318L43.7941 44.7545L37.0121 44.6559L36.9941 44.6247L40.2997 38.702Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M4.72795 38.2497L8.18068 44.23L15.3238 31.8577L11.8711 25.8774L4.72795 38.2497Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M5.11601 13.9705L8.56875 7.99019L26.2923 38.6884L22.8396 44.6687L5.11601 13.9705Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M19.0936 13.9705L22.5463 7.99019L40.2699 38.6884L36.8171 44.6687L19.0936 13.9705Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M15.4728 7.99011L8.56738 7.99011L26.291 38.6883L33.1964 38.6883L15.4728 7.99011Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M29.4514 7.99011L22.5459 7.99011L40.2695 38.6883L47.175 38.6883L29.4514 7.99011Z"
          stroke={fill}
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M40.3245 26.438V27.188C40.5925 27.188 40.8401 27.045 40.974 26.813L40.3245 26.438ZM40.0419 26.438L39.3924 26.813C39.5263 27.045 39.7739 27.188 40.0419 27.188V26.438ZM47.4677 14.0657L48.1172 14.4407C48.2511 14.2086 48.2511 13.9227 48.1172 13.6907C47.9832 13.4586 47.7356 13.3157 47.4677 13.3157V14.0657ZM40.5622 14.0657V13.3157C40.2942 13.3157 40.0466 13.4586 39.9127 13.6907L40.5622 14.0657ZM36.7305 20.7024L36.0809 20.3274C35.947 20.5595 35.947 20.8454 36.0809 21.0774L36.7305 20.7024ZM40.3245 25.688H40.0419V27.188H40.3245V25.688ZM46.8181 13.6907L39.675 26.063L40.974 26.813L48.1172 14.4407L46.8181 13.6907ZM40.5622 14.8157H47.4677V13.3157H40.5622V14.8157ZM37.38 21.0774L41.2117 14.4407L39.9127 13.6907L36.0809 20.3274L37.38 21.0774ZM36.0809 21.0774L39.3924 26.813L40.6914 26.063L37.38 20.3274L36.0809 21.0774Z"
          fill={fill}
        ></path>
        <path
          d="M8.17871 44.23L7.52919 43.855C7.39522 44.0871 7.39522 44.373 7.52919 44.605C7.66317 44.8371 7.91076 44.98 8.17871 44.98L8.17871 44.23ZM15.3137 31.8718L15.9632 31.4968C15.8293 31.2648 15.5817 31.1218 15.3137 31.1218C15.0458 31.1218 14.7982 31.2648 14.6642 31.4968L15.3137 31.8718ZM15.0842 44.23V44.98C15.3521 44.98 15.5997 44.8371 15.7337 44.605L15.0842 44.23ZM18.7665 37.8521L19.416 38.2271C19.55 37.9951 19.55 37.7092 19.416 37.4771L18.7665 37.8521ZM8.82823 44.605L15.9632 32.2468L14.6642 31.4968L7.52919 43.855L8.82823 44.605ZM15.0842 43.48L8.17871 43.48L8.17871 44.98L15.0842 44.98V43.48ZM18.1169 37.4771L14.4347 43.855L15.7337 44.605L19.416 38.2271L18.1169 37.4771ZM19.416 37.4771L15.9632 31.4968L14.6642 32.2468L18.1169 38.2271L19.416 37.4771Z"
          fill={fill}
        ></path>
      </svg>
    </>
  );
};

const ArrowRight = ({ size }: { size: number }) => {
  return (
    <>
      <svg
        fill="none"
        height={size}
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width={size}
      >
        <path d="M7 17L17 7"></path>
        <path d="M7 7h10v10"></path>
      </svg>
    </>
  );
};
