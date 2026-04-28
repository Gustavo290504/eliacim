'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Play, Heart } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Iglesia Bautista Eliacim"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay that creates a beautiful blue tone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,34,68,0.92) 0%, rgba(0,51,102,0.85) 40%, rgba(0,74,153,0.75) 70%, rgba(0,51,102,0.88) 100%)',
          }}
        />
        {/* Subtle pattern overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-light/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Small label */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
            Bienvenido a nuestra comunidad de fe
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Iglesia Bautista
          <span className="block text-gold mt-2">Eliacim</span>
        </h1>

        {/* Decorative divider */}
        <div
          className={`flex items-center justify-center gap-3 mb-8 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <span className="w-2 h-2 rotate-45 border border-gold/60" />
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-4 leading-relaxed transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Un lugar donde la fe, el amor y la esperanza{' '}
          <span className="text-gold font-normal">se encuentran</span>
        </p>

        {/* Bible verse */}
        <p
          className={`text-sm sm:text-base text-white/50 italic max-w-xl mx-auto mb-12 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          &ldquo;Venid a mí todos los que estáis trabajados y cargados, y yo os haré
          descansar.&rdquo;{' '}
          <span className="not-italic text-gold/70">— Mateo 11:28</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/nosotros"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-navy font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base"
          >
            <Heart className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
            Únete a Nosotros
            <span className="absolute inset-0 rounded-2xl bg-gold/0 group-hover:bg-gold/5 transition-colors duration-300" />
          </Link>

          <Link
            href="/sermones"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/50 transform hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
          >
            <Play className="w-5 h-5 group-hover:text-gold transition-colors" />
            Ver Sermones
          </Link>
        </div>

        {/* Service Times */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { day: 'Domingo', time: '10:00 AM', label: 'Servicio Principal' },
            { day: 'Miércoles', time: '7:00 PM', label: 'Estudio Bíblico' },
            { day: 'Viernes', time: '7:00 PM', label: 'Reunión de Jóvenes' },
          ].map((service) => (
            <div
              key={service.day}
              className="group px-5 py-4 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-sm hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 cursor-default"
            >
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">
                {service.day}
              </p>
              <p className="text-white text-lg font-bold">{service.time}</p>
              <p className="text-white/50 text-xs mt-0.5">{service.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">
          Descubre más
        </span>
        <ChevronDown className="w-5 h-5 text-white/40 animate-bounce-gentle" />
      </div>
    </section>
  );
}
