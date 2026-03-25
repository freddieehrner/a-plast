export default function Nav() {
  const links = [
    "A-Plast Produkter",
    "Legotillverkning",
    "Konstruktion",
    "Branscher",
    "Referenser",
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-10 py-6">
      <div className="text-[#0062ae] font-bold text-2xl font-[family-name:var(--font-outfit)]">
        A-PLAST
      </div>
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[#0062ae] font-semibold text-[18px] hover:underline"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
