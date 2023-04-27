import Image from "next/image"

import {useState, type FC} from "react"

interface IImage {
  src: string
  alt: string
}

const NatImage: FC<IImage> = ({src, alt, ...props}) => {
  const [ratio, setRatio] = useState(16 / 9)

  return (
    <Image
      onLoadingComplete={({
        naturalWidth,
        naturalHeight
      }: {
        naturalWidth: number
        naturalHeight: number
      }) => {
        if (naturalHeight === 0 && naturalWidth === 0) {
          setRatio(16 / 9)
        } else {
          setRatio(naturalWidth / naturalHeight)
        }
      }}
      src={src}
      alt={alt}
      {...props}
    />
  )
}

export default NatImage
