import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-200"
        >
          AI Car Marketplace
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 text-sm text-gray-300">
          <Link
            href="/#results"
            className="px-3 py-2 rounded-md hover:text-white hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Buscar
          </Link>
          <Link
            href="/#ai"
            className="px-3 py-2 rounded-md hover:text-white hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            IA Advisor
          </Link>
          <Link
            href="/sell"
            className="ml-1 sm:ml-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Publicar coche
          </Link>
        </div>

      </div>
    </nav>
  );
}