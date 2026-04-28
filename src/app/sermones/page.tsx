import { BookOpen, Play, Clock, User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sermones | Iglesia Bautista Eliacim',
  description:
    'Escucha los sermones más recientes de Iglesia Bautista Eliacim. Enseñanzas bíblicas para fortalecer tu fe.',
};

const filterTabs = ['Recientes', 'Populares', 'Series'];

const sermons = [
  {
    title: 'El Poder de la Fe en Tiempos Difíciles',
    speaker: 'Pastor Juan García',
    date: '2 Mar 2026',
    duration: '45 min',
    series: 'Fe Inquebrantable',
    description:
      'Descubre cómo mantener tu fe firme cuando las circunstancias parecen imposibles.',
  },
  {
    title: 'Gracia que Transforma',
    speaker: 'Pastor Juan García',
    date: '23 Feb 2026',
    duration: '38 min',
    series: 'Vida en Gracia',
    description:
      'La gracia de Dios no solo nos salva, sino que nos transforma por completo.',
  },
  {
    title: 'El Propósito de Dios para Tu Vida',
    speaker: 'Pastora María López',
    date: '16 Feb 2026',
    duration: '42 min',
    series: 'Descubre Tu Propósito',
    description:
      'Dios tiene un plan perfecto para cada uno de nosotros. Aprende a descubrirlo.',
  },
  {
    title: 'Adoración Auténtica',
    speaker: 'Pastor Juan García',
    date: '9 Feb 2026',
    duration: '35 min',
    series: 'Corazón de Adorador',
    description:
      'La verdadera adoración va más allá de las canciones, es un estilo de vida.',
  },
  {
    title: 'Comunidad: Mejor Juntos',
    speaker: 'Pastora María López',
    date: '2 Feb 2026',
    duration: '40 min',
    series: 'Vida en Comunidad',
    description:
      'Fuimos creados para vivir en comunidad. Descubre el poder de caminar juntos.',
  },
  {
    title: 'Esperanza en Medio de la Tormenta',
    speaker: 'Pastor Juan García',
    date: '26 Ene 2026',
    duration: '43 min',
    series: 'Fe Inquebrantable',
    description:
      'Cuando las tormentas de la vida llegan, nuestra esperanza está en Cristo.',
  },
];

export default function SermonesPage() {
  return (
    <section className="min-h-screen pt-28 pb-16 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-6">
            <BookOpen className="w-4 h-4 text-navy" />
            <span className="text-xs font-semibold text-navy uppercase tracking-wider">
              Sermones
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestros Sermones
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Enseñanzas bíblicas que inspiran y transforman. Explora nuestras
            prédicas más recientes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                i === 0
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white text-gray-500 border border-gray-medium/50 hover:border-navy/30 hover:text-navy'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sermon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon) => (
            <div
              key={sermon.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-medium/30 hover:shadow-xl hover:border-gold/20 transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-navy to-navy-light flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-300" />
                <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 cursor-pointer">
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
                {/* Duration badge */}
                <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-lg flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {sermon.duration}
                </span>
                {/* Series badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold/90 text-navy text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {sermon.series}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-navy-light transition-colors line-clamp-2">
                  {sermon.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {sermon.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {sermon.speaker}
                  </span>
                  <span>{sermon.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
