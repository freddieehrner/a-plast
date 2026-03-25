const imgHero = "https://www.figma.com/api/mcp/asset/7a1c74ad-83df-49a4-9286-595d13bbab6c";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#b3ecff] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={imgHero}
          alt="A-Plast"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(-66deg, rgba(0,98,174,0) 50%, rgba(0,0,0,0.5) 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[1] flex flex-col justify-end min-h-screen pb-24 px-10 md:px-28 max-w-[1728px] mx-auto">
        <h1
          className="text-[#0062ae] font-semibold leading-tight mb-6"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(3rem, 6vw, 90px)",
            maxWidth: 729,
          }}
        >
          Expect more
        </h1>
        <p
          className="text-black font-semibold leading-[1.4] mb-8"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 20,
            maxWidth: 660,
          }}
        >
          Mer engagemang, mer precision och mer ansvar i varje samarbete.
          A-Plastgruppen är din partner för pålitliga lösningar som fungerar –
          hela vägen.
        </p>
        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#0062ae] text-[#b3ecff] font-medium rounded-full px-10 py-4 text-[20px] hover:bg-[#00518f] transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Vårt uppdrag &amp; vision
          </a>
        </div>
      </div>
    </section>
  );
}
