import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'STUFE B | Synthpop aus dem Erzgebirge',
  description: 'Synthpop/Synthwave aus dem Erzgebirge. Höre uns auf Spotify, YouTube und allen Streaming-Plattformen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
