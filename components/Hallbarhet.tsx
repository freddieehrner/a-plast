import FadeUp from './FadeUp';

const kort = [
  {
    bg: '#99ffce',
    title: 'Hållbarhet',
    titleColor: '#3ab394',
    textColor: '#3ab394',
    icon: '/images/icon-hallbarhet.jpg',
  },
  {
    bg: '#b3ecff',
    title: 'Återvinning',
    titleColor: '#0062ae',
    textColor: '#000',
    icon: '/images/icon-recycle.jpg',
  },
  {
    bg: '#3ab394',
    title: 'Kvalitet',
    titleColor: '#99ffce',
    textColor: '#e1fff0',
    icon: '/images/icon-kvalitet.jpg',
  },
];

const desc =
  'Mer engagemang, mer precision och mer ansvar i varje samarbete. A-Plastgruppen är din partner för pålitliga lösningar som fungerar – hela vägen.';

export default function Hallbarhet() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {kort.map(({ bg, title, titleColor, textColor, icon }, i) => (
          <FadeUp
            key={title}
            delay={i * 100}
            className="flex flex-col items-start gap-6 px-12 py-20"
            style={{ background: bg }}
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3
              className="font-semibold"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 40,
                lineHeight: 1.15,
                color: titleColor,
              }}
            >
              {title}
            </h3>
            <p
              className="font-medium leading-[1.4]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, color: textColor }}
            >
              {desc}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
