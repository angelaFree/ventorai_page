// src/components/footer/Footer.tsx
import Link from "next/link";

const social = [
  {
    href: "https://wa.me/17073406383",
    label: "WhatsApp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M19.05 4.91A9.82 9.82 0 0 0 12 2a9.91 9.91 0 0 0-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21A9.91 9.91 0 0 0 22 12c0-2.65-1.03-5.14-2.95-7.09Zm-7 15.24a8.12 8.12 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31A8.22 8.22 0 0 1 3.14 12 8.24 8.24 0 0 1 20.36 7.8 8.23 8.23 0 0 1 12.05 20.15Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12s-.77 1-1 1.22-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23a7.26 7.26 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.19-.58.19-1.07.12-1.18s-.21-.16-.46-.28Z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/free.pro.products",
    label: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M22 12A10 10 0 1 0 10 21.8V15H8v-3h2V9.5A2.5 2.5 0 0 1 12.5 7H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8A10 10 0 0 0 22 12Z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/free.info.products/",
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4Zm9.65 1.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 16 6.75M12 7a5 5 0 1 1-5 5a5 5 0 0 1 5-5Zm0 2a3 3 0 1 0 3 3a3 3 0 0 0-3-3Z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@free_infoproducts",
    label: "YouTube",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M10 15V9l5.19 3Zm11.56-7.83C22 8.22 22 12 22 12s0 3.78-.44 4.83c-.26.9-.83 1.48-1.73 1.73C18.78 19 12 19 12 19s-6.78 0-7.83-.44c-.9-.25-1.48-.83-1.73-1.73C2 15.78 2 12 2 12s0-3.78.44-4.83c.25-.9.83-1.47 1.73-1.72C5.22 5 12 5 12 5s6.78 0 7.83.44c.9.25 1.47.83 1.72 1.73ZM10 14.5l5.19-2.5L10 9.5Z"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Marca + descripción */}
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="text-3xl md:text-2xl font-bold tracking-tight text-white hover:text-primary-400 transition-colors"
          >
            VENTOR<span className="text-primary-200"> AI</span>
          </Link>
          <p className="mt-2 text-gray-400">
            Inteligencia artificial para ventas y marketing
          </p>
        </div>

        {/* Íconos sociales */}
        <nav aria-label="Redes sociales">
          <ul className="flex justify-center md:justify-end gap-6">
            {social.map(({ href, label, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Línea + copyright */}
      <div className="border-t border-neutral-700 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} VENTOR AI. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
