export default function Specifications() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 px-3 py-1 text-sm font-medium text-white shadow">
            Product details
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Technical specifications
            </span>
          </h2>
          <p className="mt-3 text-gray-600">Everything you need at a glance.</p>
        </div>

        {/* Feature grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<DevicesIcon className="h-6 w-6" />}
            title="GPT free accounts"
            text="Generate up to 5 ads per day, per account, from any device."
          />
          <Feature
            icon={<ShieldCheckIcon className="h-6 w-6" />}
            title="Built on ChatGPT"
            text="AI Assistant Ads lives inside ChatGPT, so it stays secure, stable, and always available."
          />
          <Feature
            icon={<ScreenDeviceIcon className="h-6 w-6" />}
            title="Use it on any device"
            text="Runs smoothly on mobile and desktop."
          />
          <Feature
            icon={<ZapIcon className="h-6 w-6" />}
            title="With ChatGPT Plus"
            text="Produce up to 5 ads per minute."
          />
          <Feature
            icon={<RulerIcon className="h-6 w-6" />}
            title="Available sizes"
            text="1024×1024, 1024×1536, and 1536×1024 px (square, vertical, and horizontal)."
          />
          <Feature
            icon={<BotIcon className="h-6 w-6" />}
            title="Image quality"
            text="ChatGPT image engine + Ventor tech for high-converting ads."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponents ---------- */
function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Soft glow on hover */}
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-500 opacity-10 blur-2xl" />
      <div className="flex items-start gap-4">
        {/* Icon container with gradient */}
        <div className="shrink-0 rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500 p-3 text-white shadow-inner">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-gray-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Iconos SVG inline (sin dependencias) ---------- */
function DevicesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="4" width="12" height="9" rx="1.5" />
      <rect x="17" y="7" width="4" height="11" rx="1.2" />
      <path d="M7 16h4" />
    </svg>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
      <path d="M9 12l2.2 2.2L15 10.5" />
    </svg>
  );
}

function ScreenDeviceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="4" width="13" height="9" rx="1.6" />
      <rect x="17.5" y="7" width="4" height="10" rx="1.2" />
      <path d="M7 16h4" />
    </svg>
  );
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 2 3 14h7l-1 8 11-14h-7l0-6z" />
    </svg>
  );
}

function RulerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 6v4M11 6v2M15 6v4M19 6v2" />
    </svg>
  );
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <circle cx="9" cy="13" r="1.2" />
      <circle cx="15" cy="13" r="1.2" />
      <path d="M12 8V5m0-2v2" />
    </svg>
  );
}
