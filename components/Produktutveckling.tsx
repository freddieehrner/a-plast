const imgP1 = "https://www.figma.com/api/mcp/asset/ba3ea480-9a0f-40d1-b869-4b7684ba0f30";
const imgP2 = "https://www.figma.com/api/mcp/asset/8d0283dd-4ef3-4d1c-853b-3a60c69a3f3f";

const produkter = [
  { label: "Kabelskydd", desc: "Kabelbrunnar, elinstallation, kabelskyddsrör, elinstallationsrör" },
  { label: "Väg", desc: "Produktbeskrivning en kortare text" },
  { label: "VA", desc: "Produktbeskrivning en kortare text" },
  { label: "Dränering", desc: "Produktbeskrivning en kortare text" },
  { label: "Ledningsförnyelse", desc: "Produktbeskrivning en kortare text" },
];

export default function Produktutveckling() {
  return (
    <section className="bg-[#3ab394] py-24 px-10 md:px-28">
      <div className="max-w-[1728px] mx-auto">
        <p
          className="text-[#e1fff0] font-semibold text-[20px] mb-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          A-Plast produkter
        </p>
        <h2
          className="text-[#99ffce] font-semibold mb-8"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(2rem, 5vw, 80px)",
            lineHeight: 1.1,
            maxWidth: 1118,
          }}
        >
          Egen produktutveckling för framtidens infrastruktur
        </h2>
        <p
          className="text-[#e1fff0] font-medium leading-[1.2] mb-16"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 26, maxWidth: 1037 }}
        >
          Utöver legotillverkning utvecklar och tillverkar vi egna produkter och
          system, bland annat inom tryckrörsystem, geo energi, väg, dränering
          ledningsförnyelse och kabelskydd.
        </p>

        {/* Product images row */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {[imgP1, imgP2, imgP1, imgP2, imgP1].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] h-[280px] rounded-full overflow-hidden"
            >
              <img
                src={img}
                alt={produkter[i]?.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Labels */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {produkter.map(({ label, desc }) => (
            <div key={label}>
              <p
                className="text-[#99ffce] font-semibold text-[25px] leading-[1.4] mb-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {label}
              </p>
              <p
                className="text-[#e1fff0] font-normal text-[18px] leading-[1.4]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
