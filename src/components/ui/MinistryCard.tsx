import Image from 'next/image';

interface MinistryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tag: string;
}

export default function MinistryCard({
  title,
  description,
  imageSrc,
  tag,
}: MinistryCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Tag */}
        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-gold/90 text-navy rounded-full mb-3">
          {tag}
        </span>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/70 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
