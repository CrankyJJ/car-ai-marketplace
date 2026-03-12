export async function POST(req: Request) {

    const { message } = await req.json()

    const cars = [
        { brand: "BMW", model: "M3", price: 45000, km: 60000 },
        { brand: "Audi", model: "A4", price: 23000, km: 80000 },
        { brand: "Mercedes", model: "C300", price: 38000, km: 50000 }
    ]

    const prompt = `
You are a car expert helping users choose the best car, responde en el idioma en el que se te pregunte y responde en el idioma en el que se te pregunte

Available cars in the marketplace:
${JSON.stringify(cars)}

User request:
${message}

Recommend the best option from the list and explain why.
`

    const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "llama3",
            prompt,
            stream: false
        })
    })

    const data = await response.json()

    return Response.json({
        reply: data.response
    })
}