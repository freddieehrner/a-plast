import FadeUp from './FadeUp';

export default function Legotillverkning() {
  return (
    <section className="bg-[#0062ae] py-24 px-10 md:px-[6.5vw]">
      <div className="max-w-[1728px] mx-auto">

        <FadeUp>
          <h2
            className="text-[#b3ecff] font-semibold"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2.5rem, 5.32vw, 92px)',
              lineHeight: 1.05,
              maxWidth: 729,
              marginBottom: '3rem',
            }}
          >
            Legotillverkning
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <FadeUp delay={80}>
            <h3
              className="text-[#b3ecff] font-semibold"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.8rem, 3.47vw, 60px)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Lösningar som funkar
            </h3>
            <p
              className="text-white font-medium leading-[1.4]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 20,
                maxWidth: 660,
                marginBottom: '2.5rem',
              }}
            >
              Mer engagemang, mer precision och mer ansvar i varje samarbete.
              A-Plastgruppen är din partner för pålitliga lösningar som fungerar
              – hela vägen. Mer engagemang, mer precision och mer ansvar i varje
              samarbete. A-Plastgruppen är din partner för pålitliga lösningar
              som fungerar – hela vägen.
            </p>
            <div className="flex flex-col gap-4">
              {['Extrudering av rör och profiler', 'Formsprutning av plastdetaljer'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex items-center border border-[#b3ecff] text-[#b3ecff] rounded-full hover:bg-[#b3ecff]/20 transition-colors w-fit"
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

          {/* Right */}
          <FadeUp delay={160}>
            <h3
              className="text-[#b3ecff] font-semibold"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.8rem, 3.47vw, 60px)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Våra kunder berättar
            </h3>
            <p
              className="text-white font-medium leading-[1.4]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 20,
                maxWidth: 660,
                marginBottom: '2.5rem',
              }}
            >
              Ingress och lite matigare text för referenserna. Ingress och lite
              matigare text för referenserna. Ingress och lite matigare text för
              referenserna. Ingress och lite matigare text för referenserna.
            </p>
            <a
              href="#"
              className="inline-flex items-center border border-[#b3ecff] text-[#b3ecff] rounded-full hover:bg-[#b3ecff]/20 transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 20,
                padding: '0.9rem 2.5rem',
              }}
            >
              Referenser
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
