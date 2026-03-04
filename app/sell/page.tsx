"use client"

import { useState } from "react"

export default function SellPage() {

  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [price, setPrice] = useState("")
  const [km, setKm] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    await fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        brand,
        model,
        price: Number(price),
        km: Number(km),
        image
      })
    })

    alert("Coche publicado")
  }

  return (
    <main className="min-h-screen text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gray-950" />

      <div className="max-w-2xl mx-auto px-4 pt-20 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_14px_50px_-30px_rgba(0,0,0,0.85)]">
          <h1 className="text-3xl font-bold tracking-tight">
            Publicar coche
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Completa los datos y añade una URL de imagen.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">

            <input
              placeholder="Marca"
              value={brand}
              onChange={(e)=>setBrand(e.target.value)}
              className="bg-black/30 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/40"
            />

            <input
              placeholder="Modelo"
              value={model}
              onChange={(e)=>setModel(e.target.value)}
              className="bg-black/30 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/40"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                placeholder="Precio (€)"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                inputMode="numeric"
                className="bg-black/30 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/40"
              />

              <input
                placeholder="Kilómetros"
                value={km}
                onChange={(e)=>setKm(e.target.value)}
                inputMode="numeric"
                className="bg-black/30 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/40"
              />
            </div>

            <input
              placeholder="URL imagen"
              value={image}
              onChange={(e)=>setImage(e.target.value)}
              className="bg-black/30 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/40"
            />

            <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
              Publicar coche
            </button>

          </form>
        </div>
      </div>
    </main>
  )
}