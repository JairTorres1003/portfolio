import type { Metadata } from 'next'

import { type MetadataProps } from '@/interfaces/Metadata'

/**
 * Creates metadata for a web page.
 */
const MetaData = ({
  title = "Jair Torres' Portfolio",
  description = "Jair Torres' Portfolio - Software Developer",
  path = '',
}: MetadataProps): Metadata => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL ?? ''}${path}`

  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      url,
      title,
      description,
      siteName: 'Jair Torres Portfolio',
      type: 'website',
    },
  }
}

export default MetaData
