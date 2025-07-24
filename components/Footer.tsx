// src/components/footer/Footer.tsx
import Link from "next/link";
// Importa los íconos que necesitas de react-icons
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

// Actualiza el array `social` para usar los componentes de íconos
const social = [
  {
    href: "https://wa.link/schs0u",
    label: "WhatsApp",
    // Usa el componente importado y pasa el className
    icon: <FaWhatsapp className="h-6 w-6" />,
  },
  {
    href: "https://www.facebook.com/ventor.ai.products",
    label: "Facebook",
    icon: <FaFacebook className="h-6 w-6" />,
  },
  {
    href: "https://www.instagram.com/ventorai/",
    label: "Instagram",
    icon: <FaInstagram className="h-6 w-6" />,
  },
  {
    href: "https://www.youtube.com/@ventorai", // Corregí el enlace de YouTube
    label: "YouTube",
    icon: <FaYoutube className="h-6 w-6" />,
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
        © {new Date().getFullYear()} VENTOR AI. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}