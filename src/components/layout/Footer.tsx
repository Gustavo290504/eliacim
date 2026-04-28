import Link from 'next/link';
import {
  Church,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from 'lucide-react';

const quickLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Sermones', href: '/sermones' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Sobre Nosotros', href: '/nosotros' },
  { name: 'Donaciones', href: '/donaciones' },
];

const services = [
  { day: 'Domingo', time: '10:00 AM', label: 'Servicio Principal' },
  { day: 'Miércoles', time: '7:00 PM', label: 'Estudio Bíblico' },
  { day: 'Viernes', time: '7:00 PM', label: 'Reunión de Jóvenes' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Church className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight block">
                  Iglesia Bautista
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                  Eliacim
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Una comunidad de fe comprometida con el amor de Cristo, la
              enseñanza de la Palabra y el servicio al prójimo.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-gold/20 hover:border-gold/30 hover:text-gold transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Schedule */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              Horarios de Servicio
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.day} className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white/90">
                      {service.day}
                    </p>
                    <p className="text-xs text-white/50">
                      {service.time} — {service.label}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/60">
                  1234 Calle Principal
                  <br />
                  Ciudad, Estado 12345
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <a
                  href="mailto:info@iglesiaeliacim.org"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  info@iglesiaeliacim.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Iglesia Bautista Eliacim. Todos
              los derechos reservados.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-white/40">
              Hecho con{' '}
              <Heart className="w-3 h-3 text-gold fill-gold" /> para la Gloria
              de Dios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
