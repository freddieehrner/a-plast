const imgCert = "https://www.figma.com/api/mcp/asset/d304397d-dc0e-413e-9add-0ab57738c33c";
const imgPie = "https://www.figma.com/api/mcp/asset/ca0f61c6-1c0e-4e61-89b5-fc3203c8a8f7";
const imgWorker = "https://www.figma.com/api/mcp/asset/e2f55ca7-63a0-48d3-83a4-19145367e116";

export default function Siffror() {
  return (
    <section className="bg-white py-24 px-10 md:px-28">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left text */}
          <div>
            <h2
              className="text-[#0062ae] font-semibold mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 92px)",
                lineHeight: "94px",
              }}
            >
              A-plast i siffror
            </h2>
            <div
              className="text-[#0062ae] font-semibold leading-[1.4] space-y-4"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 20, maxWidth: 660 }}
            >
              <p>
                Vi på A-Plast är stolta tillverkare av produkter i plast. Vi är
                en snabb leverantör, en tillförlitlig beställare och en
                ansvarstagande arbetsgivare med engagerad personal.
              </p>
              <p>
                Våra fabriker i Älghult, Alstermo och Fröseke i Småland har en
                total fabriksyta på 20 000 kvadratmeter. Våra plastprodukter
                tillverkas antingen genom{" "}
                <a href="#" className="underline">formsprutning</a> eller{" "}
                <a href="#" className="underline">extrudering</a>. Vi har 22 st
                extruderingslinjer och 15 st formsprutor.
              </p>
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-12">
            {/* Omsättning */}
            <div>
              <p className="text-[#0062ae] font-bold text-[20px] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Omsättning 2024
              </p>
              <div className="flex items-end gap-2">
                <img src={imgPie} alt="Omsättning" className="w-[110px] h-auto" />
              </div>
              <p className="text-[#0062ae] font-extrabold text-[70px] leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                340 <span className="text-[40px] font-bold">mkr</span>
              </p>
              <div className="mt-2 text-[#0062ae] font-bold text-[18px] space-y-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                <p>55% Alstermo</p>
                <p>30% Fröseke</p>
                <p>15% Älghult</p>
              </div>
            </div>

            {/* Anställda */}
            <div>
              <p className="text-[#0062ae] font-bold text-[20px] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Strax över 100 anställda
              </p>
              <div className="flex items-center gap-3">
                <img src={imgWorker} alt="Anställda" className="w-[77px] h-auto" />
                <span className="text-[#0062ae] font-extrabold text-[70px] leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                  100
                </span>
              </div>
            </div>

            {/* Certifieringar */}
            <div>
              <p className="text-[#0062ae] font-bold text-[20px] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Certifieringar
              </p>
              <div className="text-[#0062ae] font-bold text-[42px] leading-[1.1]" style={{ fontFamily: "Inter, sans-serif" }}>
                <p>ISO 9001</p>
                <p>ISO 14001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
