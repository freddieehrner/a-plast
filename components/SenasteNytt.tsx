const imgNews1 = "/images/news-1.jpg";
const imgNews2 = "/images/news-2.jpg";

const nyheter = [
  {
    img: imgNews1,
    title: "A-Frank AB",
    text: "A-Plast Gruppen och Frank GmbH inleder ett unikt samarbete och etablerar det gemensamma sälj- och produktionsbolaget A-Frank AB.",
  },
  {
    img: imgNews2,
    title: "A-Plast Gruppen signerar avtal med amohandboll",
    text: "Målet är att stärka klubbens satsning och bidra till utvecklingen av både föreningen och bygden.",
  },
  {
    img: imgNews1,
    title: "A-Frank AB",
    text: "A-Plast Gruppen och Frank GmbH inleder ett unikt samarbete och etablerar det gemensamma sälj- och produktionsbolaget A-Frank AB.",
  },
];

export default function SenasteNytt() {
  return (
    <section className="bg-white py-24 px-10 md:px-28">
      <div className="max-w-[1728px] mx-auto">
        <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
          <div>
            <h2
              className="text-[#0062ae] font-semibold"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 4vw, 60px)" }}
            >
              Senaste nytt
            </h2>
            <p
              className="text-black font-medium leading-[1.4] mt-2"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 20, maxWidth: 815 }}
            >
              Mer engagemang, mer precision och mer ansvar i varje samarbete.
              A-Plastgruppen är din partner för pålitliga lösningar som fungerar
              – hela vägen.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center border border-[#0062ae] text-[#0062ae] rounded-full px-8 py-4 text-[20px] font-medium hover:bg-[#0062ae]/10 transition-colors self-end"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Alla nyheter
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {nyheter.map(({ img, title, text }, i) => (
            <article key={i} className="flex flex-col">
              <div className="w-full h-[314px] overflow-hidden rounded-none mb-5">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-[#0062ae] font-semibold text-[25px] leading-[1.4] mb-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-[#0062ae] font-normal text-[18px] leading-[1.4]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
