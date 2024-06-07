import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <h1>Augusto Leão Blog!</h1>
        <p>Seja bem vindo ao meu blog!</p>
      </div>
    </header>
  );

  const footer = ( 
    <footer>
      <div>
        <p>Augusto Leão Blog</p>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <head />
      
      <body>
      {header}
        {children}
      {footer}
      </body> 
    </html>
  )
}
