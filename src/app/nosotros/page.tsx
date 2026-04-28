import { Users, Heart, BookOpen, Music, Star, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Iglesia Bautista Eliacim',
  description:
    'Conoce nuestra historia, misión y visión. Iglesia Bautista Eliacim, una comunidad de fe comprometida con el amor de Cristo.',
};

const values = [
  {
    icon: Heart,
    title: 'Amor',
    description:
      'Amamos a Dios y al prójimo como la base de todo lo que hacemos.',
  },
  {
    icon: BookOpen,
    title: 'Palabra',
    description:
      'Creemos en la autoridad de las Escrituras como guía para la vida.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description:
      'Fomentamos relaciones genuinas y un sentido de pertenencia para todos.',
  },
  {
    icon: Music,
    title: 'Adoración',
    description:
      'Adoramos a Dios con pasión y excelencia en todo lo que hacemos.',
  },
  {
    icon: Star,
    title: 'Excelencia',
    description:
      'Servimos con lo mejor de nosotros para la gloria de Dios en cada detalle.',
  },
  {
    icon: ShieldCheck,
    title: 'Integridad',
    description:
      'Vivimos de acuerdo a los principios bíblicos en todo aspecto de nuestra vida.',
  },
];

const team = [
  {
    name: 'Pastor Juan García',
    role: 'Pastor Principal',
    description:
      'Con más de 20 años de ministerio, el Pastor Juan lidera nuestra congregación con sabiduría y amor.',
  },
  {
    name: 'Pastora María López',
    role: 'Co-Pastora',
    description:
      'La Pastora María dirige el ministerio de mujeres y consejería familiar con compasión.',
  },
  {
    name: 'Daniel Hernández',
    role: 'Líder de Jóvenes',
    description:
      'Daniel guía a la nueva generación con energía y pasión por el Evangelio.',
  },
  {
    name: 'Ana Martínez',
    role: 'Directora de Alabanza',
    description:
      'Ana dirige nuestro equipo de adoración, creando atmósferas de encuentro con Dios.',
  },
];

const timeline = [
  { year: '2005', event: 'Fundación de la iglesia con 15 familias en un pequeño local.' },
  { year: '2010', event: 'Mudanza al templo actual y crecimiento a más de 100 miembros.' },
  { year: '2015', event: 'Lanzamiento de los ministerios de jóvenes y niños.' },
  { year: '2020', event: 'Adaptación al ministerio digital durante la pandemia.' },
  { year: '2024', event: 'Inauguración del centro comunitario de servicio.' },
];

export default function NosotrosPage() {
  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-6">
            <Users className="w-4 h-4 text-navy" />
            <span className="text-xs font-semibold text-navy uppercase tracking-wider">
              Sobre Nosotros
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestra Historia
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Iglesia Bautista Eliacim nació con el propósito de ser un faro de
            esperanza y amor en nuestra comunidad.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
            <span className="inline-block px-3 py-1 bg-gold/20 border border-gold/30 rounded-full text-gold text-[10px] font-bold uppercase tracking-widest mb-6">
              Misión
            </span>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nuestra Misión
            </h2>
            <p className="text-white/70 leading-relaxed">
              Llevar el mensaje del Evangelio a cada persona, formando
              discípulos comprometidos con Cristo a través de la enseñanza
              bíblica, la comunión y el servicio.
            </p>
          </div>
          <div className="bg-gray-light rounded-3xl p-8 sm:p-10 border border-gray-medium/30 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-navy/5 rounded-full blur-3xl" />
            <span className="inline-block px-3 py-1 bg-navy/5 border border-navy/10 rounded-full text-navy text-[10px] font-bold uppercase tracking-widest mb-6">
              Visión
            </span>
            <h2
              className="text-2xl font-bold text-navy mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nuestra Visión
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Ser una iglesia que impacta a las generaciones presentes y futuras
              con el amor transformador de Jesucristo, siendo una referencia de
              fe, esperanza y servicio en nuestra comunidad.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-navy mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nuestra Trayectoria
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-medium/50 md:left-1/2" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-navy border-4 border-white shadow-md z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full mb-2">
                    {item.year}
                  </span>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-navy mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nuestros Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-medium/30 hover:shadow-lg hover:border-gold/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-navy/5 group-hover:bg-navy group-hover:text-white text-navy transition-all duration-300 mb-4">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pastoral Team */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
              Liderazgo
            </span>
            <h2
              className="text-3xl font-bold text-navy mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nuestro Equipo Pastoral
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-medium/30 hover:shadow-xl transition-all duration-500"
              >
                {/* Avatar placeholder */}
                <div className="aspect-square bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-navy/10 flex items-center justify-center">
                    <Users className="w-10 h-10 text-navy/30" />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-base font-bold text-navy mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
