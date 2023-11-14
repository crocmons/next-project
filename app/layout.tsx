import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cognito-AI',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position='bottom-right' toastOptions={{duration: 3000}} />
        <div className="main">
            <div className="gradient" />
          </div>
        <main className="app">
        <Navbar />
        {children}
        <div className='whatsapp'>
          <FadeIn>
          <Link href="https://wa.me/918369645695">
             <Image 
               src='/whatsapp.svg'
               alt='whatsapp'
               width={55}
               height={55}

             />
          </Link>
          </FadeIn>
        </div>
        <Footer />
        </main>
        </body>
    </html>
  )
}
