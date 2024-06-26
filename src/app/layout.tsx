import MetaData from '@/utils/MetaData'

import { Gotham } from './ui/fonts'

import '@/config/index'

import './ui/globals.css'

export const metadata = MetaData({
  title: "Home | Jair Torres' Portfolio",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang='en'>
      <body className={Gotham.className}>{children}</body>
    </html>
  )
}
