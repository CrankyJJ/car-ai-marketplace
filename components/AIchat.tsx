"use client"

import { useState } from "react"

export default function AIChat() {

  const [message, setMessage] = useState("")
  const [reply, setReply] = useState("")

  const askAI = async () => {

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    })

    const data = await res.json()
    setReply(data.reply)
  }

  return (
    <div className="mt-20 max-w-3xl w-full">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_14px_50px_-30px_rgba(0,0,0,0.85)]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Preguntar a la IA</h2>
            <p className="mt-1 text-sm text-gray-400">
              Describe lo que buscas y te recomiendo opciones.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ej: coche barato y fiable"
            className="w-full bg-black/30 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:border-blue-500/40"
          />

          <button
            onClick={askAI}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Preguntar
          </button>
        </div>

        {reply && (
          <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-gray-100">
            {reply}
          </div>
        )}
      </div>

    </div>
  )
}