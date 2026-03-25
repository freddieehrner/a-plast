import FadeUp from './FadeUp';

const produkter = [
  { label: 'Kabelskydd',        desc: 'Kabelbrunnar, elinstallation, kabelskyddsrör, elinstallationsrör', img: '/images/produkt-1.jpg' },
  { label: 'Väg',               desc: 'Produktbeskrivning en kortare text', img: '/images/produkt-2.jpg' },
  { label: 'VA',                desc: 'Produktbeskrivning en kortare text', img: '/images/produkt-1.jpg' },
  { label: 'Dränering',         desc: 'Produktbeskrivning en kortare text', img: '/images/produkt-2.jpg' },
  { label: 'Ledningsförnyelse', desc: 'Produktbeskrivning en kortare text', img: '/images/produkt-1.jpg' },
];

export default function Produktutveckling() {
  return (
    <section className="bg-[#3ab394] py-24 px-10 md:px-[6.5vw]">
      <div className="max-w-[1728px] mx-auto">

        <FadeUp>
          <p
            className="text-[#e1fff0] font-semibold"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, marginBottom: '0.75rem' }}
          >
            A-Plast produkter
          </p>
          <h2
            className="text-[#99ffce] font-semibold"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2rem, 4.63vw, 80px)',
              lineHeight: 1.1,
              maxWidth: 1118,
              marginBottom: '2rem',
            }}
          >
            Egen produktutveckling för framtidens infrastruktur
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <p
            className="text-[#e1fff0] font-medium leading-[1.2]"
            style={{
              fontFamily: 'Inter, sans-serif',
              /* 26px @ 1728px */
              fontSize: 'clamp(1rem, 1.5vw, 26px)',
              maxWidth: 1037,
              marginBottom: '4rem',
            }}
          >
            Utöver legotillverkning utvecklar och tillverkar vi egna produkter och
            system, bland annat inom tryckrörsystem, geo energi, väg, dränering
            ledningsförnyelse och kabelskydd.
          </p>
        </FadeUp>

        {/* Product columns: image + text */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {produkter.map(({ label, desc, img }, i) => (
            <FadeUp key={label} delay={i * 70}>
              <div className="img-zoom mb-4 aspect-square overflow-hidden">
                <img src={img} alt={label} className="w-full h-full object-cover" />
              </div>
              <p
                className="text-[#99ffce] font-semibold leading-[1.4]"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 25, marginBottom: '0.25rem' }}
              >
                {label}
              </p>
              <p
                className="text-[#e1fff0] font-normal leading-[1.4]"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 18 }}
              >
                {desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
