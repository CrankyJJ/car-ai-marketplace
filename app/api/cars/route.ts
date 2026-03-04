import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url)

  const brand = searchParams.get("brand")
  const maxPrice = searchParams.get("price")
  const maxKm = searchParams.get("km")

  const cars = await prisma.car.findMany({
    where: {
      brand: brand ? { contains: brand } : undefined,
      price: maxPrice ? { lte: Number(maxPrice) } : undefined,
      km: maxKm ? { lte: Number(maxKm) } : undefined
    }
  })

  return NextResponse.json(cars)
}

export async function POST(req: Request) {
  const body = await req.json()

  const brand = typeof body?.brand === "string" ? body.brand.trim() : ""
  const model = typeof body?.model === "string" ? body.model.trim() : ""
  const image = typeof body?.image === "string" ? body.image.trim() : ""
  const price = Number(body?.price)
  const km = Number(body?.km)

  if (!brand || !model || !image || !Number.isFinite(price) || !Number.isFinite(km)) {
    return NextResponse.json(
      { error: "Datos inválidos" },
      { status: 400 }
    )
  }

  const car = await prisma.car.create({
    data: {
      brand,
      model,
      image,
      price: Math.trunc(price),
      km: Math.trunc(km)
    }
  })

  return NextResponse.json(car, { status: 201 })
}