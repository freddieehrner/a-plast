import FadeUp from './FadeUp';

const branscher = [
  { label: 'Bygg',         icon: '/images/icon-bygg.svg' },
  { label: 'Industri',     icon: '/images/icon-industri.svg' },
  { label: 'VVS',          icon: '/images/icon-vvs.svg' },
  { label: 'Fordon',       icon: '/images/icon-fordon.svg' },
  { label: 'Infrastruktur',icon: '/images/icon-infra.svg' },
];

export default function Branscher() {
  return (
    <section className="bg-[#b3ecff] py-24 px-10 md:px-[6.5vw] max-w-[1728px] mx-auto">
      <FadeUp>
        <h2
          className="text-[#0062ae] font-semibold"
          style={{
            fontFamily: 'Inter, sans-serif',
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
          Genom vår bredd, överkapacitet och tekniska spetskompetens kan vi möta dessa krav
          oavsett bransch eller tillämpning. Vi arbetar nära våra kunder för att förstå deras
          utmaningar och mål, med ambitionen att vara en långsiktig och värdeskapande samarbetspartner.
        </p>
      </FadeUp>

      <div className="flex justify-between w-full">
        {branscher.map(({ label, icon }, i) => (
          <FadeUp key={label} delay={i * 80}>
            <div className="flex flex-col items-center gap-4">
              <img
                src={icon}
                alt={label}
                style={{ width: 85, height: 85, objectFit: 'contain' }}
              />
              <span
                className="text-[#0062ae] font-medium"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 28 }}
              >
                {label}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
