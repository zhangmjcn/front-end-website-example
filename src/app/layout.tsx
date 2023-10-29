'use client'

import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Head from 'next/head'
import UmamiHeader from "@/components/umamiStats";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <UmamiHeader/>
    <Head>
      <link rel="icon" href="/icons/bird.svg" />
    </Head>
      <body className="vw-100" style={{}} >{children}</body>
    </html>
  )
}
