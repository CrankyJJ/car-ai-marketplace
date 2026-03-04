"use client"
import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
import AIChat from "@/components/AIchat";
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function Home() {
  const searchParams = useSearchParams()
  const [cars, setCars] = useState<any[]>([])

  useEffect(() => {

    const fetchCars = async () => {

      const query = searchParams.toString()

      const res = await fetch(`/api/cars?${query}`)
      const data = await res.json()

      setCars(data)
    }

    fetchCars()

  }, [searchParams])
  return (
    <>
      <Navbar />

      <main className="min-h-screen text-white">
        <div className="relative isolate">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gray-950" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/15 via-transparent to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto px-4 pt-16 pb-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Encuentra tu próximo coche con ayuda de IA
              </h1>

              <p className="mt-4 text-gray-300">
                Busca por marca, compara opciones y pregunta a nuestro asesor para encontrar el mejor encaje.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#results"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  Buscar coches
                </Link>

                <Link
                  href="#ai"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  Preguntar a la IA
                </Link>
              </div>
            </div>

            <SearchBar />
          </div>

          <div id="results" className="max-w-6xl mx-auto px-4 pb-20 scroll-mt-28">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Resultados</h2>
                <p className="mt-1 text-sm text-gray-400">
                  {cars.length} coches encontrados
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-6xl">
              {cars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>

            <div id="ai" className="scroll-mt-28">
              <AIChat />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
