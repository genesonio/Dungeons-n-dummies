import Image from "next/legacy/image"

import {useState, type FC} from "react"

interface IImage extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

const NatImage: FC<IImage> = ({src, alt, ...props}) => {
  const [ratio, setRatio] = useState(16 / 9)

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Image
      width={1080}
      height={1080 / ratio}
      src={src}
      alt={alt}
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
      {...props}
    />
  )
}

export default NatImage
