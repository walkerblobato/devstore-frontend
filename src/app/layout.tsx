import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// É boa pratica utilizar uma variável css para cada font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    // Configurar para mostrar title passado em cada page com | Devstore
    template: '%s | Devostore',
    default: 'devstore',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
