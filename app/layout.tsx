import type { Metadata } from 'next'
import { Bebas_Neue, Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const playfair = Playfair_Display({
  weight: '700',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Criativos do Céu — New Pack Church Design',
  description: 'PSDs profissionais para igrejas por Ressil Design. Texturas, LUTs, fundos, ícones e mockups prontos para editar no Photoshop.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
