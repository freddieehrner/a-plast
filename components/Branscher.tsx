import FadeUp from './FadeUp';

const branscher = [
  { label: 'Bygg',         icon: '/images/icon-bygg.jpg' },
  { label: 'Industri',     icon: '/images/icon-industri.jpg' },
  { label: 'VVS',          icon: '/images/icon-vvs.jpg' },
  { label: 'Fordon',       icon: '/images/icon-fordon.jpg' },
  { label: 'Infrastruktur',icon: '/images/icon-infra.jpg' },
];

export default function Branscher() {
  return (
    <section className="bg-white py-24 px-10 md:px-[6.5vw] max-w-[1728px] mx-auto">
      <FadeUp>
        <h2
          className="text-[#0062ae] font-semibold"
          style={{
            fontFamily: 'Inter, sans-serif',
            /* 80px @ 1728px = 4.63vw */
            fontSize: 'clamp(2rem, 4.63vw, 80px)',
            lineHeight: 1.1,
            maxWidth: 1002,
            marginBottom: '1.5rem',
          }}
        >
          Branscher &amp; användningsområden
        </h2>
      </FadeUp>

      <FadeUp delay={100}>
        <p
          className="text-black font-medium leading-[1.4]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 20,
            maxWidth: 1024,
            marginBottom: '4rem',
          }}
        >
          Genom vår bredd, överkapacitet och tekniska spetskompetens kan vi möta
          dessa krav oavsett bransch eller tillämpning. Vi arbetar nära våra
          kunder för att förstå deras utmaningar och mål, med ambitionen att vara
          en långsiktig och värdeskapande samarbetspartner.
        </p>
      </FadeUp>

      <div className="flex flex-wrap gap-12 md:gap-20">
        {branscher.map(({ label, icon }, i) => (
          <FadeUp key={label} delay={i * 80} className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
              <img src={icon} alt={label} className="w-full h-full object-contain" />
            </div>
            <span
              className="text-[#0062ae] font-medium"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 28 }}
            >
              {label}
            </span>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
