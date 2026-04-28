import { Heart, CreditCard, Building2, Users, Calendar, Gift, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donaciones | Iglesia Bautista Eliacim',
  description:
    'Apoya la obra de Dios con tu donación. Iglesia Bautista Eliacim agradece tu generosidad.',
};

const donationAmounts = [10, 25, 50, 100, 250, 500];

const impactStats = [
  { icon: Users, value: '200+', label: 'Familias Impactadas' },
  { icon: Calendar, value: '50+', label: 'Eventos al Año' },
  { icon: Gift, value: '1,000+', label: 'Personas Ayudadas' },
  { icon: TrendingUp, value: '20', label: 'Años de Servicio' },
];

export default function DonacionesPage() {
  return (
    <section className="min-h-screen pt-28 pb-16 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-6">
            <Heart className="w-4 h-4 text-navy" />
            <span className="text-xs font-semibold text-navy uppercase tracking-wider">
              Donaciones
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Apoya Nuestra Misión
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Tu generosidad nos permite seguir compartiendo el amor de Cristo con
            nuestra comunidad y más allá.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-medium/30 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-navy/5 text-navy mb-3">
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-navy">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Donation Card */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-medium/30 overflow-hidden">
              {/* Header */}
              <div className="bg-navy p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
                <Heart className="w-10 h-10 text-gold mx-auto mb-3 relative z-10" />
                <h2 className="text-2xl font-bold text-white mb-1 relative z-10">
                  Hacer una Donación
                </h2>
                <p className="text-white/60 text-sm relative z-10">
                  &ldquo;Cada uno dé como propuso en su corazón&rdquo; — 2 Corintios 9:7
                </p>
              </div>

              {/* Amount Selection */}
              <div className="p-8">
                <p className="text-sm font-semibold text-navy mb-4 uppercase tracking-wider">
                  Selecciona un monto
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      className="px-4 py-3 rounded-xl border-2 border-gray-medium/50 text-navy font-bold hover:border-navy hover:bg-navy/5 transition-all duration-200 text-lg"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label className="text-sm font-semibold text-navy mb-2 block uppercase tracking-wider">
                    O ingresa otro monto
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy font-bold text-lg">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-gray-medium/50 focus:border-navy focus:outline-none text-lg font-medium text-navy transition-colors"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold text-navy uppercase tracking-wider">
                    Método de pago
                  </p>
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-navy bg-navy/5 text-navy font-medium text-sm transition-all">
                      <CreditCard className="w-4 h-4" />
                      Tarjeta
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-medium/50 text-gray-500 font-medium text-sm hover:border-navy hover:text-navy transition-all">
                      <Building2 className="w-4 h-4" />
                      Transferencia
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full py-4 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.01] active:scale-[0.99] text-lg">
                  Donar Ahora
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  Integración con Stripe disponible en la Fase 3. Tu información
                  estará protegida y encriptada.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar — Why Give + Testimonial */}
          <div className="lg:col-span-2 space-y-6">
            {/* Why Give */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-medium/30">
              <h3 className="text-lg font-bold text-navy mb-4">
                ¿Por qué dar?
              </h3>
              <ul className="space-y-4">
                {[
                  'Apoyar el ministerio pastoral y la enseñanza bíblica.',
                  'Financiar programas de alcance comunitario.',
                  'Mantener y mejorar nuestras instalaciones.',
                  'Ayudar a familias en necesidad en nuestra comunidad.',
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-500">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-navy rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <p className="text-4xl text-gold/40 font-serif leading-none mb-2">
                  &ldquo;
                </p>
                <p className="text-sm text-white/80 leading-relaxed italic mb-4">
                  Dar a la iglesia ha sido una bendición para nuestra familia. Ver
                  cómo nuestras ofrendas impactan vidas nos llena de gozo y
                  gratitud hacia Dios.
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Familia Rodríguez
                  </p>
                  <p className="text-xs text-gold">Miembros desde 2012</p>
                </div>
              </div>
            </div>

            {/* Secure badge */}
            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-medium/30">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">Donación Segura</p>
                <p className="text-xs text-gray-400">Encriptación SSL de 256 bits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
