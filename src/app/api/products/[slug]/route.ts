import { z } from 'zod'
import data from '../data.json'

export const GET = async (
  request: Request,
  { params }: { params: { slug: string } },
) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  // Se a validação falhar chamará um erro aqui diretamente, não executando o restante do código
  const slug = z.string().parse(params.slug)

  // Encontrar produto onde o slug seja igual ao slug recebido como parâmetro
  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(product)
}
