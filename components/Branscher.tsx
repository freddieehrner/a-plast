const imgBygg = "/images/icon-bygg.jpg";
const imgIndustri = "/images/icon-industri.jpg";
const imgVVS = "/images/icon-vvs.jpg";
const imgFordon = "/images/icon-fordon.jpg";
const imgInfra = "/images/icon-infra.jpg";

const branscher = [
  { label: "Bygg", icon: imgBygg },
  { label: "Industri", icon: imgIndustri },
  { label: "VVS", icon: imgVVS },
  { label: "Fordon", icon: imgFordon },
  { label: "Infrastruktur", icon: imgInfra },
];

export default function Branscher() {
  return (
    <section className="bg-white py-24 px-10 md:px-28 max-w-[1728px] mx-auto">
      <h2
        className="text-[#0062ae] font-semibold mb-6"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(2.5rem, 5vw, 80px)",
          lineHeight: 1.1,
          maxWidth: 1002,
        }}
      >
        Branscher &amp; användningsområden
      </h2>
      <p
        className="text-black font-medium leading-[1.4] mb-16"
        style={{ fontFamily: "Inter, sans-serif", fontSize: 20, maxWidth: 1024 }}
      >
        Genom vår bredd, överkapacitet och tekniska spetskompetens kan vi möta
        dessa krav oavsett bransch eller tillämpning. Vi arbetar nära våra
        kunder för att förstå deras utmaningar och mål, med ambitionen att vara
        en långsiktig och värdeskapande samarbetspartner.
      </p>
      <div className="flex flex-wrap gap-12 md:gap-20">
        {branscher.map(({ label, icon }) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
              <img src={icon} alt={label} className="w-full h-full object-contain" />
            </div>
            <span
              className="text-[#0062ae] font-medium text-[28px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
