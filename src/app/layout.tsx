import type { Metadata } from 'next'
import "./global.sass"

export const metadata: Metadata = {
  title: 'Miła florystyka',
  description: '',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/rpr1lvc.css"/>
    </head>
      <body>{children}</body>
    </html>
  )
}
