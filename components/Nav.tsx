const links = [
  'A-Plast Produkter',
  'Legotillverkning',
  'Konstruktion',
  'Branscher',
  'Referenser',
];

export default function Nav() {
  return (
    <nav
      className="w-full flex items-center justify-between px-10 py-5 bg-white border-b border-gray-100"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <img
        src="/images/a-plast-logo.svg"
        alt="A-Plast"
        style={{ height: 42, width: 'auto' }}
      />
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[#0062ae] font-semibold hover:underline transition-colors"
              style={{ fontSize: 18 }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      {/* Hamburger (mobile) */}
      <button className="md:hidden flex flex-col gap-1.5 p-2">
        <span className="block w-6 h-0.5 bg-[#0062ae]" />
        <span className="block w-6 h-0.5 bg-[#0062ae]" />
        <span className="block w-6 h-0.5 bg-[#0062ae]" />
      </button>
    </nav>
  );
}
