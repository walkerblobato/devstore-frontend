import Image from 'next/image'
import colors from 'tailwindcss/colors'
import { ImageResponse } from 'next/og'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { env } from '@/env'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export const getProduct = async (slug: string): Promise<Product> => {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const product = await response.json()

  return product
}

// Image generation
export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)
  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      // ImageResponse JSX element, vai converter esse HTMl em imagem
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Image src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
