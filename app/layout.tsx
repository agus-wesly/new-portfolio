import '@/styles/globals.css'
import { satoshi, inter } from '@/styles/fonts'
import { cn } from '@/lib/utils'
import Provider from '@/components/Provider'

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
      <body className={cn(satoshi.variable, inter.variable)}>
        <Provider attribute="class" defaultTheme="system">
          {children}
        </Provider>
      </body>
    </html>
  )
}
