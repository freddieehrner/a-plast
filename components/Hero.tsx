/* Hero – text two-column on white, then full-width photo with A-grafik overlay */
export default function Hero() {
  return (
    <section>
      {/* ── Text row ── */}
      <div className="bg-white px-10 md:px-[6.5vw] pt-16 pb-12 max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <h1
            className="hero-fade-1 text-[#0062ae] font-semibold leading-tight"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2.5rem, 5.2vw, 90px)',
            }}
          >
            Expect more
          </h1>
          <div className="hero-fade-2 flex flex-col items-start gap-6">
            <p
              className="text-black font-semibold leading-[1.4]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, maxWidth: 660 }}
            >
              Mer engagemang, mer precision och mer ansvar i varje samarbete.
              A-Plastgruppen är din partner för pålitliga lösningar som fungerar –
              hela vägen.
            </p>
            <a
              href="#"
              className="hero-fade-3 inline-flex items-center justify-center bg-[#0062ae] text-[#b3ecff] font-medium rounded-full hover:bg-[#00518f] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, padding: '0.9rem 2.5rem' }}
            >
              Vårt uppdrag &amp; vision
            </a>
          </div>
        </div>
      </div>

      {/* ── Full-width photo + A-grafik overlay ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(420px, 55vw, 960px)' }}>
        <img
          src="/images/hero-main.jpg"
          alt="A-Plast"
          className="w-full h-full object-cover"
        />
        {/* A-shape grafik – bottom-left */}
        <img
          src="/images/aplast-grafik.svg"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-0 pointer-events-none select-none"
          style={{ height: '85%', width: 'auto', opacity: 0.55 }}
        />
      </div>
    </section>
  );
}
