'use client'

import { MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left px-6">
        <p className="text-neutral-500 text-sm">
          © {currentYear} Antony Joyson D'Souza. All rights reserved.
        </p>

        <div className="flex items-center gap-2 text-neutral-500 text-sm hover:text-neutral-700 transition-colors duration-200 group cursor-default">
          <MapPin className="w-4 h-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
          <span className="relative overflow-hidden">
            Mangalore, Karnataka, India
          </span>
        </div>
      </div>
    </footer>
  )
}
