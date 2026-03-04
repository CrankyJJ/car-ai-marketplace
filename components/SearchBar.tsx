"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {

    const router = useRouter()

    const clearFilters = () => {
        router.push("/")
    }

    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [km, setKm] = useState("")

    const search = () => {

        const params = new URLSearchParams()

        if (brand) params.append("brand", brand)
        if (price) params.append("price", price)
        if (km) params.append("km", km)

        router.push(`/?${params.toString()}`)
    }

    return (
        <div className="mt-10 w-full max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto_auto] gap-3">

                <input
                    placeholder="Marca (BMW, Audi...)"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/40"
                />

                <input
                    placeholder="Precio máximo (€)"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    inputMode="numeric"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/40"
                />

                <input
                    placeholder="Km máximo"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                    inputMode="numeric"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/40"
                />

                <button
                    onClick={search}
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                    Buscar
                </button>

                <button
                    onClick={clearFilters}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                    Limpiar
                </button>

            </div>
            <p className="mt-3 text-xs text-gray-400">
                Filtra por marca, precio y kilómetros. Se aplican vía URL.
            </p>
        </div>
    )
}