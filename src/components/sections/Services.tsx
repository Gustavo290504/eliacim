import {
  Heart,
  BookOpen,
  Users,
  HandHeart,
} from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    icon: Heart,
    title: 'Adoración',
    description:
      'Experimenta momentos de alabanza y adoración genuina que transforman corazones y renuevan espíritus cada domingo.',
    href: '/nosotros',
  },
  {
    icon: BookOpen,
    title: 'Estudio Bíblico',
    description:
      'Profundiza en la Palabra de Dios a través de estudios dinámicos y relevantes para tu vida diaria.',
    href: '/sermones',
  },
  {
    icon: Users,
    title: 'Grupos de Vida',
    description:
      'Conecta con otros creyentes en grupos pequeños donde crecemos juntos en fe, amistad y propósito.',
    href: '/nosotros',
  },
  {
    icon: HandHeart,
    title: 'Servicio Comunitario',
    description:
      'Extendemos el amor de Cristo sirviendo a nuestra comunidad a través de programas de asistencia y alcance social.',
    href: '/eventos',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
            Lo que hacemos
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ofrecemos diversas oportunidades para crecer en fe, conectar con
            otros y servir a nuestra comunidad.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
