import MinistryCard from '@/components/ui/MinistryCard';

const ministries = [
  {
    title: 'Ministerio de Jóvenes',
    description:
      'Un espacio para jóvenes donde pueden crecer en su fe, desarrollar amistades significativas y descubrir su propósito.',
    imageSrc: '/images/ministry-youth.png',
    tag: 'Jóvenes',
  },
  {
    title: 'Ministerio de Niños',
    description:
      'Enseñamos a los más pequeños sobre el amor de Dios de forma creativa y divertida en un entorno seguro.',
    imageSrc: '/images/ministry-children.png',
    tag: 'Niños',
  },
  {
    title: 'Ministerio de Mujeres',
    description:
      'Un grupo de mujeres que se apoyan mutuamente en su caminar de fe, creciendo juntas en amor y gracia.',
    imageSrc: '/images/ministry-women.png',
    tag: 'Mujeres',
  },
  {
    title: 'Ministerio de Alabanza',
    description:
      'Nuestro equipo de adoración guía a la congregación en una experiencia de alabanza auténtica y poderosa.',
    imageSrc: '/images/ministry-worship.png',
    tag: 'Alabanza',
  },
];

export default function Ministries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
            Comunidad
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestros Ministerios
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Hay un lugar para ti. Descubre los ministerios que pueden impactar
            tu vida y la de tu familia.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry) => (
            <MinistryCard
              key={ministry.title}
              title={ministry.title}
              description={ministry.description}
              imageSrc={ministry.imageSrc}
              tag={ministry.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
