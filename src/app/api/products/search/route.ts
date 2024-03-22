import { z } from 'zod'
import type { NextRequest } from 'next/server'
import data from '../data.json'

export const GET = async (request: NextRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const { searchParams } = request.nextUrl

  // validar que busca é uma string
  const query = z.string().parse(searchParams.get('q'))

  // Filtrar produtos
  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
