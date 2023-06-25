import '@/styles/globals.css'
import { satoshi } from '@/styles/fonts'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Provider from '@/components/Provider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Agus Wesly',
  description: 'My personal portfolio website built using next.13 app dir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('antialiased', satoshi.variable, inter.variable)}>
        <Provider defaultTheme="dark" attribute="class">
          {children}
        </Provider>
      </body>
    </html>
  )
}
