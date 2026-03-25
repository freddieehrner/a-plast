import FadeUp from './FadeUp';

export default function Siffror() {
  return (
    <section className="bg-white py-24 px-10 md:px-[6.5vw]">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left text */}
          <FadeUp>
            <h2
              className="text-[#0062ae] font-semibold"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(2.5rem, 5.32vw, 92px)',
                lineHeight: '1.02',
                marginBottom: '2rem',
              }}
            >
              A-plast i siffror
            </h2>
            <div
              className="text-[#0062ae] font-semibold leading-[1.4] space-y-4"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, maxWidth: 660 }}
            >
              <p>
                Vi på A-Plast är stolta tillverkare av produkter i plast. Vi är en
                snabb leverantör, en tillförlitlig beställare och en ansvarstagande
                arbetsgivare med engagerad personal.
              </p>
              <p>
                Våra fabriker i Älghult, Alstermo och Fröseke i Småland har en
                total fabriksyta på 20 000 kvadratmeter. Våra plastprodukter
                tillverkas antingen genom{' '}
                <a href="#" className="underline">formsprutning</a> eller{' '}
                <a href="#" className="underline">extrudering</a>. Vi har 22 st
                extruderingslinjer och 15 st formsprutor.
              </p>
            </div>
          </FadeUp>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-12">

            <FadeUp delay={80}>
              <p
                className="text-[#0062ae] font-bold"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, marginBottom: '0.75rem' }}
              >
                Omsättning 2024
              </p>
              <img src="/images/icon-chart.svg" alt="Omsättning" className="w-[105px] h-auto mb-2" />
              <p
                className="text-[#0062ae] font-extrabold"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 70, lineHeight: 1 }}
              >
                340{' '}
                <span style={{ fontSize: 40, fontWeight: 700 }}>mkr</span>
              </p>
              <div
                className="mt-3 text-[#0062ae] font-bold space-y-0.5"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 18 }}
              >
                <p>55% Alstermo</p>
                <p>30% Fröseke</p>
                <p>15% Älghult</p>
              </div>
            </FadeUp>

            <FadeUp delay={140}>
              <p
                className="text-[#0062ae] font-bold"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, marginBottom: '0.75rem' }}
              >
                Strax över 100 anställda
              </p>
              <div className="flex items-center gap-3">
                <img src="/images/icon-anstallda.svg" alt="Anställda" className="w-[77px] h-auto" />
                <span
                  className="text-[#0062ae] font-extrabold"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 70, lineHeight: 1 }}
                >
                  100
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <p
                className="text-[#0062ae] font-bold"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, marginBottom: '0.75rem' }}
              >
                Certifieringar
              </p>
              <div
                className="text-[#0062ae] font-bold"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 42, lineHeight: 1.1 }}
              >
                <p>ISO 9001</p>
                <p>ISO 14001</p>
              </div>
            </FadeUp>

          </div>
        </div>
      </div>
    </section>
  );
}
