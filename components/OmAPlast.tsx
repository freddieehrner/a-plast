const imgBg = "/images/hero-bg.jpg";

const knappar = ["Om oss", "Hur vi jobbar", "Vår vision"];

export default function OmAPlast() {
  return (
    <section className="relative min-h-[700px] bg-[#b3ecff] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={imgBg}
          alt="Om A-Plast"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(-66deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 70%)",
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-[1] flex flex-col justify-center min-h-[700px] py-24 px-10 md:px-28 max-w-[1728px] mx-auto">
        <p
          className="text-[#b3ecff] font-semibold text-[20px] mb-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Om A-Plast
        </p>
        <h2
          className="text-[#b3ecff] font-semibold mb-8"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 92px)",
            lineHeight: "94px",
            maxWidth: 729,
          }}
        >
          Med precision i varje uppdrag
        </h2>
        <p
          className="text-[#b3ecff] font-semibold leading-[1.4] mb-12"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 20, maxWidth: 660 }}
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
              className="inline-flex items-center justify-center border border-[#b3ecff] text-[#b3ecff] rounded-full px-10 py-4 text-[20px] font-medium hover:bg-[#b3ecff]/20 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
