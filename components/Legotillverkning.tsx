
export default function Legotillverkning() {
  return (
    <section className="bg-[#0062ae] py-24 px-10 md:px-28">
      <div className="max-w-[1728px] mx-auto">
        <h2
          className="text-[#b3ecff] font-semibold mb-12"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 92px)",
            lineHeight: 1.05,
            maxWidth: 729,
          }}
        >
          Legotillverkning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h3
              className="text-[#b3ecff] font-semibold text-[60px] leading-tight mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Lösningar som funkar
            </h3>
            <p
              className="text-white font-medium leading-[1.4] mb-10"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 20, maxWidth: 660 }}
            >
              Mer engagemang, mer precision och mer ansvar i varje samarbete.
              A-Plastgruppen är din partner för pålitliga lösningar som fungerar
              – hela vägen. Mer engagemang, mer precision och mer ansvar i
              varje samarbete. A-Plastgruppen är din partner för pålitliga
              lösningar som fungerar – hela vägen.
            </p>
            <div className="flex flex-col gap-4">
              {["Extrudering av rör och profiler", "Formsprutning av plastdetaljer"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex items-center border border-[#b3ecff] text-[#b3ecff] rounded-full px-10 py-4 text-[20px] font-medium w-fit hover:bg-[#b3ecff]/20 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3
              className="text-[#b3ecff] font-semibold text-[60px] leading-tight mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Våra kunder berättar
            </h3>
            <p
              className="text-white font-medium leading-[1.4] mb-10"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 20, maxWidth: 660 }}
            >
              Ingress och lite matigare text för referenserna. Ingress och lite
              matigare text för referenserna. Ingress och lite matigare text för
              referenserna. Ingress och lite matigare text för referenserna.
              Ingress och lite matigare text för referenserna.
            </p>
            <a
              href="#"
              className="inline-flex items-center border border-[#b3ecff] text-[#b3ecff] rounded-full px-10 py-4 text-[20px] font-medium hover:bg-[#b3ecff]/20 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Referenser
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
