/* Hero animates on load – no scroll trigger needed */
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#b3ecff] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-main.jpg"
          alt="A-Plast"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(-66deg, rgba(0,98,174,0) 50%, rgba(0,0,0,0.5) 70%)',
          }}
        />
      </div>

      <div className="relative z-[1] flex flex-col justify-end min-h-screen pb-24 px-10 md:px-[6.5vw] max-w-[1728px] mx-auto">
        <p
          className="hero-fade-1 text-[#0062ae] font-semibold"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, marginBottom: '1rem' }}
        >
          A-Plast
        </p>
        <h1
          className="hero-fade-2 text-[#0062ae] font-semibold leading-tight"
          style={{
            fontFamily: 'Inter, sans-serif',
            /* 90px @ 1728px = 5.208vw */
            fontSize: 'clamp(2.5rem, 5.2vw, 90px)',
            maxWidth: 729,
            marginBottom: '1.5rem',
          }}
        >
          Expect more
        </h1>
        <p
          className="hero-fade-2 font-semibold leading-[1.4]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 20,
            maxWidth: 660,
            marginBottom: '2rem',
            color: '#000',
          }}
        >
          Mer engagemang, mer precision och mer ansvar i varje samarbete.
          A-Plastgruppen är din partner för pålitliga lösningar som fungerar –
          hela vägen.
        </p>
        <div className="hero-fade-3">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#0062ae] text-[#b3ecff] font-medium rounded-full hover:bg-[#00518f] transition-colors"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 20,
              padding: '0.9rem 2.5rem',
            }}
          >
            Vårt uppdrag &amp; vision
          </a>
        </div>
      </div>
    </section>
  );
}
