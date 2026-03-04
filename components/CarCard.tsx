import Link from "next/link"

type Car = {
  id: number
  brand: string
  model: string
  price: number
  km: number
  image: string
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <Link href={`/car/${car.id}`} className="block">
      <div className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] hover:shadow-[0_22px_60px_-30px_rgba(37,99,235,0.55)]">

        <div className="relative">
          <img
            src={car.image}
            alt={car.model}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/50 px-3 py-1 text-xs text-gray-200 border border-white/10 backdrop-blur">
            {car.km.toLocaleString()} km
          </div>
        </div>

        <div className="p-5">

          <h2 className="text-lg font-semibold tracking-tight text-white">
            {car.brand} {car.model}
          </h2>

          <div className="mt-3 flex items-end justify-between gap-4">
            <p className="text-blue-300 text-2xl font-bold">
              {car.price.toLocaleString()} €
            </p>

            <span className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition">
              Ver detalles
            </span>
          </div>

        </div>
      </div>
    </Link>
  )
}