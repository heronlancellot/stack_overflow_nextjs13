import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter(
  {
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter'
  }
)

const SpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotest'
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'Community plataform like Stac- Overflow :)',
  icons: {
    icon: '/public/assets/images/site-logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500'
        }
      }}>
      <html lang="en">
        <h1 className='h1-bold'> Test       </h1>
        <body className={`${inter.variable} ${SpaceGrotesk.variable} `}>
          {children}
        </body>

      </html>
    </ClerkProvider>
  )
}