export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
