const imgHallbarhet = "/images/icon-hallbarhet.jpg";
const imgRecycle = "/images/icon-recycle.jpg";
const imgKvalitet = "/images/icon-kvalitet.jpg";

const kort = [
  {
    bg: "#99ffce",
    title: "Hållbarhet",
    titleColor: "#3ab394",
    textColor: "#3ab394",
    icon: imgHallbarhet,
  },
  {
    bg: "#b3ecff",
    title: "Återvinning",
    titleColor: "#0062ae",
    textColor: "#000",
    icon: imgRecycle,
  },
  {
    bg: "#3ab394",
    title: "Kvalitet",
    titleColor: "#99ffce",
    textColor: "#e1fff0",
    icon: imgKvalitet,
  },
];

const desc =
  "Mer engagemang, mer precision och mer ansvar i varje samarbete. A-Plastgruppen är din partner för pålitliga lösningar som fungerar – hela vägen.";

export default function Hallbarhet() {
  return (
    <section className="bg-white py-0">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {kort.map(({ bg, title, titleColor, textColor, icon }) => (
            <div
              key={title}
              className="flex flex-col items-start px-12 py-20 gap-6"
              style={{ background: bg }}
            >
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3
                className="font-semibold text-[40px] leading-tight"
                style={{ fontFamily: "Inter, sans-serif", color: titleColor }}
              >
                {title}
              </h3>
              <p
                className="font-medium text-[20px] leading-[1.4]"
                style={{ fontFamily: "Inter, sans-serif", color: textColor }}
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
