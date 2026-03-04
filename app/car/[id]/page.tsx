import prisma from "@/lib/prisma"
import Link from "next/link"

export default async function CarPage({ params }: any) {

  const { id } = await params
  const carId = Number(id)

  const car = await prisma.car.findUnique({
    where: {
      id: carId
    }
  })

  if (!car) {
    return <div className="text-white p-10">Coche no encontrado</div>
  }

  return (
    <main className="min-h-screen text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gray-950" />

      <div className="max-w-5xl mx-auto px-4 pt-16 pb-20">
        <div className="mb-6">
          <Link
            href="/#results"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Volver a resultados
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_14px_50px_-30px_rgba(0,0,0,0.85)]">
          <div className="relative">
            <img
              src={car.image}
              className="w-full max-h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
          </div>

          <div className="p-6">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {car.brand} {car.model}
            </h1>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <p className="text-blue-300 text-3xl font-bold">
                {car.price.toLocaleString()} €
              </p>

              <div className="inline-flex items-center rounded-full bg-black/30 border border-white/10 px-4 py-2 text-sm text-gray-200">
                {car.km.toLocaleString()} km
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}