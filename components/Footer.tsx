const imgFB = "/images/social-fb.jpg";
const imgLI = "/images/social-li.jpg";
const imgYT = "/images/social-yt.jpg";

const kolumner = [
  {
    title: "A-Plast AB",
    links: ["A-Plast Produkter", "Legotillverkning", "Referenser", "Produktkatalog", "Produktutveckling"],
  },
  {
    title: null,
    links: ["Om oss", "Branscher", "Kvalitet", "Hållbarhet/miljö", "Återvinning"],
  },
  {
    title: null,
    links: ["Karriär & jobb", "Sponsring/CSR", "Nyheter", "Kontakt"],
  },
];

const kontor = [
  {
    name: "A-Plast AB",
    address: "Högsbyvägen 16\n364 95 Älghult",
    phone: "0481-639 50",
    email: "info@a-plast.se",
  },
  {
    name: "A-Extrusion AB",
    address: "Aspvägen 7\n364 43 Alstermo",
    phone: "0481-508 00",
    email: "alstermo@a-plast.se",
  },
  {
    name: "A-WIP AB",
    address: "Bruksgatan 5a\n364 97 Fröseke",
    phone: "070-556 19 04",
    email: "erica.bjorsne@a-wip.se",
  },
  {
    name: "A-Extrusion Fröseke",
    address: "Bruksgatan 5b\n364 97 Fröseke",
    phone: null,
    email: "peter.rylander@a-plast.se",
  },
  {
    name: "A-Plast Göteborg",
    address: "Tillfällavägen 15\n433 63 Sävedalen",
    phone: "+46 (0)481 508 13",
    email: null,
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Dark navy section */}
      <div className="bg-[#03266c] py-16 px-10 md:px-28">
        <div className="max-w-[1728px] mx-auto">
          <div className="text-white font-bold text-2xl mb-6 font-[family-name:var(--font-outfit)]">
            A-PLAST
          </div>
          <p
            className="text-white font-semibold leading-[1.4] mb-10"
            style={{ fontFamily: "Inter, sans-serif", fontSize: 20, maxWidth: 606 }}
          >
            Mer engagemang, mer precision och mer ansvar i varje samarbete.
            A-Plastgruppen är din partner för pålitliga lösningar som fungerar
            – hela vägen.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mb-12">
            {[imgFB, imgLI, imgYT].map((icon, i) => (
              <a key={i} href="#" className="w-12 h-12 flex items-center justify-center">
                <img src={icon} alt="" className="w-full h-full object-contain" />
              </a>
            ))}
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {kolumner.map((kol, i) => (
              <div key={i}>
                {kol.title && (
                  <p className="text-white font-bold text-[20px] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {kol.title}
                  </p>
                )}
                <ul className="space-y-1">
                  {kol.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white underline text-[18px] leading-[34px] hover:text-[#b3ecff]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue contact section */}
      <div className="bg-[#0062ae] py-12 px-10 md:px-28">
        <div className="max-w-[1728px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {kontor.map(({ name, address, phone, email }) => (
              <div key={name}>
                <p
                  className="text-white font-bold text-[20px] leading-[27px] mb-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {name}
                </p>
                {address.split("\n").map((line) => (
                  <p
                    key={line}
                    className="text-white text-[20px] leading-[27px]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {line}
                  </p>
                ))}
                {phone && (
                  <p className="text-white text-[20px] leading-[27px]" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {phone}
                  </p>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="text-white underline text-[20px] leading-[27px] hover:text-[#b3ecff]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
