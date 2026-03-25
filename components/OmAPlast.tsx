import FadeUp from './FadeUp';

const knappar = ['Om oss', 'Hur vi jobbar', 'Vår vision'];

export default function OmAPlast() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Om A-Plast"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(-66deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 70%)',
          }}
        />
      </div>

      <div className="relative z-[1] flex flex-col justify-center min-h-[700px] py-24 px-10 md:px-[6.5vw] max-w-[1728px] mx-auto">
        <FadeUp>
          <p
            className="text-[#b3ecff] font-semibold"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, marginBottom: '1rem' }}
          >
            Om A-Plast
          </p>
          <h2
            className="text-[#b3ecff] font-semibold"
            style={{
              fontFamily: 'Inter, sans-serif',
              /* 92px @ 1728px = 5.32vw */
              fontSize: 'clamp(2.5rem, 5.32vw, 92px)',
              lineHeight: '1.02',
              maxWidth: 729,
              marginBottom: '2rem',
            }}
          >
            Med precision i varje uppdrag
          </h2>
        </FadeUp>

        <FadeUp delay={120}>
          <p
            className="text-[#b3ecff] font-semibold leading-[1.4]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 20,
              maxWidth: 660,
              marginBottom: '3rem',
            }}
          >
            Mer engagemang, mer precision och mer ansvar i varje samarbete.
            A-Plastgruppen är din partner för pålitliga lösningar som fungerar –
            hela vägen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {knappar.map((label) => (
              <a
                key={label}
                href="#"
                className="inline-flex items-center justify-center border border-[#b3ecff] text-[#b3ecff] rounded-full hover:bg-[#b3ecff]/20 transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 20,
                  padding: '0.9rem 2.5rem',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
