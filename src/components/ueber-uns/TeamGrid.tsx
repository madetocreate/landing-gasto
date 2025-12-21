"use client"

import Image from 'next/image';
import { X, Linkedin } from 'lucide-react';

const people = [
  {
    name: 'Max Power',
    role: 'Gründer & Visionär',
    description: 'Kann Kaffee in Code verwandeln. Träumt nachts in binär und flüstert Servern gut zu.',
    imageUrl: '/media/team/max.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Anna Logic',
    role: 'CTO & Bug-Flüsterin',
    description: 'Findet Fehler, bevor sie entstehen. Hat das Internet bereits zweimal komplett durchgelesen.',
    imageUrl: '/media/team/anna.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Thomas Trend',
    role: 'Product Maestro',
    description: 'Versteht Kundenwünsche besser als sie selbst. Besitzt mehr Post-its als Socken.',
    imageUrl: '/media/team/thomas.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lisa Smile',
    role: 'Customer Hero',
    description: 'Löst Probleme, die du noch gar nicht hattest. Lächelt sogar bei einem totalen Systemabsturz.',
    imageUrl: '/media/team/lisa.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'David Byte',
    role: 'Senior Code Magician',
    description: 'Schreibt so sauberen Code, dass man davon essen könnte. Sein bester Freund ist ein Compiler.',
    imageUrl: '/media/team/david.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sarah Pixel',
    role: 'Design Diva',
    description: 'Macht Pixel glücklicher als sie sein sollten. Sieht Farben, die physikalisch gar nicht existieren.',
    imageUrl: '/media/team/sarah.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ben Backup',
    role: 'Support Ninja',
    description: 'Der Fels in der Brandung. Erklärt komplexe KI so einfach wie die Benutzung einer Gabel.',
    imageUrl: '/media/team/ben.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Mia Media',
    role: 'Marketing Maven',
    description: 'Erzählt Geschichten, die man nie wieder vergisst. Postet schneller als ihr eigener Schatten.',
    imageUrl: '/media/team/mia.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Leo Lead',
    role: 'Sales Rockstar',
    description: 'Verkauft sogar Eis am Nordpol. Hat immer einen Spruch auf Lager, der das Eis zum Schmelzen bringt.',
    imageUrl: '/media/team/leo.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sophie System',
    role: 'Operations Oracle',
    description: 'Hält den Laden zusammen, wenn alles brennt. Organisiert Chaos in absolute Perfektion.',
    imageUrl: '/media/team/sophie.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
];

export function TeamGrid() {
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 lg:grid-cols-5"
    >
      {people.map((person) => (
        <li key={person.name} className="group">
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/30 mix-blend-overlay z-10" />
            <div className="absolute inset-0 bg-stone-100 flex items-center justify-center text-4xl font-bold text-stone-300">
              {person.name.split(' ').map(n => n[0]).join('')}
            </div>
            <Image
              alt={person.name}
              src={person.imageUrl}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 relative z-20"
              sizes="160px"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.opacity = '0';
              }}
            />
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-action transition-colors">
              {person.name}
            </h3>
            <p className="text-sm font-medium text-action/80 mb-3">{person.role}</p>
            <p className="text-xs text-foreground-muted leading-relaxed px-2 italic">
              &quot;{person.description}&quot;
            </p>
          </div>
          <ul role="list" className="mt-4 flex justify-center gap-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>
              <a href={person.xUrl} className="text-foreground-muted hover:text-action">
                <X className="size-4" strokeWidth={2} />
              </a>
            </li>
            <li>
              <a href={person.linkedinUrl} className="text-foreground-muted hover:text-action">
                <Linkedin className="size-4" strokeWidth={2} />
              </a>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

