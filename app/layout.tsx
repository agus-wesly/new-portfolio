import '@/styles/globals.css'
import { satoshi } from '@/styles/fonts'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import Provider from '@/components/Provider'
import { Metadata } from 'next'
import MusicPlayer from '@/components/music-player'

const inter = FontSans({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Agus Wesly',
  description: 'My personal portfolio website built using next.13 app dir',
  creator: 'isaac',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'fym6Pr38d-8SbaoZo5nfG3xkLoLWjJerjoeYH8NfB1E',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'antialiased max-w-screen font-inter overflow-x-hidden',
          satoshi.variable,
          inter.variable
        )}
      >
        <Provider defaultTheme="dark" attribute="class">
          {children}

          <MusicPlayer />
        </Provider>
      </body>
    </html>
  )
}
