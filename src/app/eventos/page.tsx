import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventos | Iglesia Bautista Eliacim',
  description:
    'Descubre los próximos eventos de Iglesia Bautista Eliacim. Actividades para toda la familia.',
};

const featuredEvent = {
  title: 'Conferencia de Familias 2026',
  date: '15-17 de Abril, 2026',
  time: '6:00 PM',
  location: 'Templo Principal',
  description:
    'Tres días de enseñanza, adoración y comunión para fortalecer los lazos familiares bajo la guía de la Palabra de Dios. Invitados especiales y actividades para todas las edades.',
};

const events = [
  {
    title: 'Servicio Dominical',
    date: 'Todos los domingos',
    time: '10:00 AM',
    location: 'Templo Principal',
    type: 'Recurrente',
    day: 'DOM',
    dayNumber: '--',
  },
  {
    title: 'Estudio Bíblico',
    date: 'Todos los miércoles',
    time: '7:00 PM',
    location: 'Salón de Estudios',
    type: 'Recurrente',
    day: 'MIÉ',
    dayNumber: '--',
  },
  {
    title: 'Reunión de Jóvenes',
    date: 'Todos los viernes',
    time: '7:00 PM',
    location: 'Salón de Jóvenes',
    type: 'Recurrente',
    day: 'VIE',
    dayNumber: '--',
  },
  {
    title: 'Noche de Adoración',
    date: '21 de Marzo',
    time: '7:30 PM',
    location: 'Templo Principal',
    type: 'Especial',
    day: 'MAR',
    dayNumber: '21',
  },
  {
    title: 'Retiro de Mujeres',
    date: '5-6 de Abril',
    time: '9:00 AM',
    location: 'Centro de Retiros',
    type: 'Especial',
    day: 'ABR',
    dayNumber: '5-6',
  },
  {
    title: 'Campamento de Jóvenes',
    date: '20-22 de Junio',
    time: 'Todo el día',
    location: 'Campamento El Shaddai',
    type: 'Especial',
    day: 'JUN',
    dayNumber: '20',
  },
];

export default function EventosPage() {
  return (
    <section className="min-h-screen pt-28 pb-16 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-6">
            <Calendar className="w-4 h-4 text-navy" />
            <span className="text-xs font-semibold text-navy uppercase tracking-wider">
              Eventos
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Próximos Eventos
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Únete a nuestras actividades y sé parte de nuestra comunidad. Hay
            eventos para toda la familia.
          </p>
        </div>

        {/* Featured Event */}
        <div className="relative bg-navy rounded-3xl overflow-hidden mb-12 shadow-xl">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 p-8 sm:p-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 border border-gold/30 rounded-full text-gold text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Evento Destacado
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {featuredEvent.title}
            </h2>
            <p className="text-white/70 max-w-2xl mb-8 leading-relaxed">
              {featuredEvent.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                {featuredEvent.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                {featuredEvent.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                {featuredEvent.location}
              </span>
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-medium/30 hover:shadow-xl hover:border-gold/20 transition-all duration-500"
            >
              <div className="flex items-stretch">
                {/* Date Badge */}
                <div className="flex-shrink-0 w-20 bg-navy flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                    {event.day}
                  </span>
                  <span className="text-2xl font-bold text-white mt-1">
                    {event.dayNumber}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-navy group-hover:text-navy-light transition-colors">
                      {event.title}
                    </h3>
                    <span
                      className={`flex-shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                        event.type === 'Especial'
                          ? 'bg-gold/10 text-gold'
                          : 'bg-navy/5 text-navy/50'
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-400">
                    <p className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {event.date} • {event.time}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-12">
          Calendario dinámico con Firebase próximamente en la Fase 3.
        </p>
      </div>
    </section>
  );
}
