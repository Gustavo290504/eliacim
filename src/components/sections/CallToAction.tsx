import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-light/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <span className="w-2.5 h-2.5 rotate-45 border border-gold/40" />
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* Verse */}
        <blockquote
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/90 leading-relaxed mb-4 italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          &ldquo;Porque de tal manera amó Dios al mundo, que ha dado a su Hijo
          unigénito, para que todo aquel que en él cree, no se pierda, mas tenga
          vida eterna.&rdquo;
        </blockquote>

        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-10">
          — Juan 3:16
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/nosotros"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-navy font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Conoce Nuestra Iglesia
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/donaciones"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold/40 text-gold font-semibold rounded-2xl hover:bg-gold/10 hover:border-gold/60 transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Apoyar la Misión
          </Link>
        </div>
      </div>
    </section>
  );
}
