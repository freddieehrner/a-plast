const kontor = [
  { name: 'A-Plast AB',          address: 'Högsbyvägen 16\n364 95 Älghult',    phone: '0481-639 50',      email: 'info@a-plast.se' },
  { name: 'A-Extrusion AB',      address: 'Aspvägen 7\n364 43 Alstermo',        phone: '0481-508 00',      email: 'alstermo@a-plast.se' },
  { name: 'A-WIP AB',            address: 'Bruksgatan 5a\n364 97 Fröseke',      phone: '070-556 19 04',    email: 'erica.bjorsne@a-wip.se' },
  { name: 'A-Extrusion Fröseke', address: 'Bruksgatan 5b\n364 97 Fröseke',      phone: null,               email: 'peter.rylander@a-plast.se' },
  { name: 'A-Plast Göteborg',    address: 'Tillfällavägen 15\n433 63 Sävedalen',phone: '+46 (0)481 508 13', email: null },
];

const kolumner = [
  { links: ['A-Plast Produkter', 'Legotillverkning', 'Referenser', 'Produktkatalog', 'Produktutveckling'] },
  { links: ['Om oss', 'Branscher', 'Kvalitet', 'Hållbarhet/miljö', 'Återvinning'] },
  { links: ['Karriär & jobb', 'Sponsring/CSR', 'Nyheter', 'Kontakt'] },
];

export default function Footer() {
  return (
    <footer>
      {/* Dark navy */}
      <div className="bg-[#03266c] py-16 px-10 md:px-[6.5vw]">
        <div className="max-w-[1728px] mx-auto">
          <img src="/images/logo-footer.jpg" alt="A-Plast" style={{ height: 67, width: 'auto', marginBottom: '1.5rem' }} />
          <p
            className="text-white font-semibold leading-[1.4]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, maxWidth: 606, marginBottom: '2.5rem' }}
          >
            Mer engagemang, mer precision och mer ansvar i varje samarbete.
            A-Plastgruppen är din partner för pålitliga lösningar som fungerar – hela vägen.
          </p>

          {/* Social */}
          <div className="flex gap-4 mb-12">
            {['/images/social-fb.jpg', '/images/social-li.jpg', '/images/social-yt.jpg'].map((icon, i) => (
              <a key={i} href="#" className="w-12 h-12 flex items-center justify-center hover:opacity-75 transition-opacity">
                <img src={icon} alt="" className="w-full h-full object-contain" />
              </a>
            ))}
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {kolumner.map((kol, i) => (
              <ul key={i} className="space-y-1">
                {kol.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white underline hover:text-[#b3ecff] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, lineHeight: '17px' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Blue contact */}
      <div className="bg-[#0062ae] py-12 px-10 md:px-[6.5vw]">
        <div className="max-w-[1728px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {kontor.map(({ name, address, phone, email }) => (
              <div key={name}>
                <p
                  className="text-white font-bold"
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, lineHeight: '14px' }}
                >
                  {name}
                </p>
                {address.split('\n').map((line) => (
                  <p key={line} className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, lineHeight: '14px' }}>
                    {line}
                  </p>
                ))}
                {phone && (
                  <p className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, lineHeight: '14px' }}>
                    {phone}
                  </p>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="text-white underline hover:text-[#b3ecff] transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, lineHeight: '14px' }}
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
