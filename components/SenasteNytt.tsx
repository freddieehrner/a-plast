import FadeUp from './FadeUp';

const nyheter = [
  {
    img: '/images/news-1.jpg',
    title: 'A-Frank AB',
    text: 'A-Plast Gruppen och Frank GmbH inleder ett unikt samarbete och etablerar det gemensamma sälj- och produktionsbolaget A-Frank AB.',
  },
  {
    img: '/images/news-2.jpg',
    title: 'A-Plast Gruppen signerar avtal med amohandboll',
    text: 'Målet är att stärka klubbens satsning och bidra till utvecklingen av både föreningen och bygden.',
  },
  {
    img: '/images/news-1.jpg',
    title: 'A-Frank AB',
    text: 'A-Plast Gruppen och Frank GmbH inleder ett unikt samarbete och etablerar det gemensamma sälj- och produktionsbolaget A-Frank AB.',
  },
];

export default function SenasteNytt() {
  return (
    <section className="bg-white py-24 px-10 md:px-[6.5vw]">
      <div className="max-w-[1728px] mx-auto">

        <FadeUp>
          <div className="flex items-start justify-between flex-wrap gap-6 mb-4">
            <h2
              className="text-[#0062ae] font-semibold"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.8rem, 3.47vw, 60px)',
                lineHeight: 1.1,
              }}
            >
              Senaste nytt
            </h2>
            <a
              href="#"
              className="self-end inline-flex items-center border border-[#0062ae] text-[#0062ae] rounded-full hover:bg-[#0062ae]/10 transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 20,
                padding: '0.9rem 2rem',
              }}
            >
              Alla nyheter
            </a>
          </div>
          <p
            className="text-black font-medium leading-[1.4]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 20,
              maxWidth: 815,
              marginBottom: '3rem',
            }}
          >
            Mer engagemang, mer precision och mer ansvar i varje samarbete.
            A-Plastgruppen är din partner för pålitliga lösningar som fungerar – hela vägen.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nyheter.map(({ img, title, text }, i) => (
            <FadeUp key={i} delay={i * 100}>
              <article className="flex flex-col">
                <div className="w-full h-[314px] img-zoom mb-5">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <h3
                  className="text-[#0062ae] font-semibold leading-[1.4]"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 25, marginBottom: '0.5rem' }}
                >
                  {title}
                </h3>
                <p
                  className="text-[#0062ae] font-normal leading-[1.4]"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 18 }}
                >
                  {text}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
