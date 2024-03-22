import { env } from '@/env'

export const api = (path: string, init?: RequestInit) => {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'

  // Junta a url passada com a url base
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init)
}

api('/products')
