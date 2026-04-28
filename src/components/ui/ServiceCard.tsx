import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href = '#',
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-medium/30 hover:shadow-xl hover:border-gold/30 transition-all duration-500 overflow-hidden">
        {/* Hover accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy/5 group-hover:bg-navy text-navy group-hover:text-white transition-all duration-400 mb-5">
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-navy-light transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

        {/* Arrow */}
        <div className="mt-5 flex items-center gap-2 text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
          Conocer más
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
