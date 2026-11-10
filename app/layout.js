import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Shadows_Into_Light } from 'next/font/google'

const shadows = Shadows_Into_Light({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-shadows',
})

export const metadata = {
  title: "Samuel Abu's Portfolio",
  description: 'A digital portfolio of Samuel Abu',
  openGraph: {
    title: 'Developer and Creative',
    description: 'A digital portfolio of Samuel Abu',
    url: 'https://sam-cv.vercel.app/',
    siteName: "Samuel Abu's Portfolio",
    images: [
      {
        url: 'https://res.cloudinary.com/dbqn6vejg/image/upload/v1667741571/meta_fincj7.jpg',
        width: 2024,
        height: 1012,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer and Creative',
    creator: '@reachmhp',
    images: ['https://res.cloudinary.com/dbqn6vejg/image/upload/v1667741571/meta_fincj7.jpg'],
  },
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={shadows.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}