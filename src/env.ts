// import { z } from 'zod'

// // formato que espera as variáveis de ambiente, as variáveis que tem NEXT_PUBLIC são acessíveis dentro dos clients components e dos servers components ou nos routers renders que são as rotas do next, já as variáveis que não tem NEXT_PUBLIC são acessíveis apenas na parte de servidor do next
// const envSchema = z.object({
//   NEXT_PUBLIC_API_BASE_URL: z.string().url(),
//   APP_URL: z.string().url(),
// })

// // Valida que o process.env está seguindo o formato do envSchema
// const parsedEnv = envSchema.safeParse(process.env)

// if (!parsedEnv.success) {
//   console.error(
//     'Invalid environment variables',
//     parsedEnv.error.flatten().fieldErrors,
//   )

//   throw new Error('Invalid environment variables')
// }

// export const env = parsedEnv.data
// src/env.mjs

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    APP_URL: z.string().url(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
})
