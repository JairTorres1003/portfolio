import { Gotham } from './ui/fonts'

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
