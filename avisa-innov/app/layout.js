import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Avisa Innovations | Changing The World with Innovative Tech & Design.',
  description: 'Avisa exist to solve world problems for the betterment of humanity. We build drones, systems, clean energy resources and products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
