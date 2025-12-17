"use client"

import Image from 'next/image';
import { X, Linkedin } from 'lucide-react';

const people = [
  {
    name: 'Max Mustermann',
    role: 'Gründer & CEO',
    imageUrl: '/media/team/placeholder.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Anna Schmidt',
    role: 'CTO',
    imageUrl: '/media/team/placeholder.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Thomas Weber',
    role: 'Head of Product',
    imageUrl: '/media/team/placeholder.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lisa Müller',
    role: 'Head of Customer Success',
    imageUrl: '/media/team/placeholder.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'David Fischer',
    role: 'Senior Engineer',
    imageUrl: '/media/team/placeholder.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sarah Klein',
    role: 'Product Designer',
    imageUrl: '/media/team/placeholder.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
];

export function TeamGrid() {
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
    >
      {people.map((person) => (
        <li key={person.name} className="rounded-2xl bg-surface px-8 py-10 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
          <div className="relative mx-auto size-48 rounded-full outline-1 -outline-offset-1 outline-border/50 md:size-56 overflow-hidden bg-muted">
            <Image
              alt={person.name}
              src={person.imageUrl}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 224px"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937]/20 to-[#111827]/40" />
          </div>
          <h3 className="mt-6 text-base font-semibold tracking-tight text-foreground">{person.name}</h3>
          <p className="text-sm text-foreground-muted">{person.role}</p>
          <ul role="list" className="mt-6 flex justify-center gap-x-6">
            <li>
              <a href={person.xUrl} className="text-foreground-muted hover:text-action transition-colors">
                <span className="sr-only">X</span>
                <X className="size-5" strokeWidth={1.5} />
              </a>
            </li>
            <li>
              <a href={person.linkedinUrl} className="text-foreground-muted hover:text-action transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="size-5" strokeWidth={1.5} />
              </a>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

