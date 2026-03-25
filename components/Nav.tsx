const links = [
  "A-Plast Produkter",
  "Legotillverkning",
  "Konstruktion",
  "Branscher",
  "Referenser",
];

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-10 py-6">
      <img
        src="/images/logo.jpg"
        alt="A-Plast"
        style={{ height: '67px', width: 'auto' }}
      />
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[#0062ae] font-semibold hover:underline transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 18 }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
