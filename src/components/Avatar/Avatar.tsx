import type { FC } from "react"

import NatImage from "../Image/Image"
import useStyles from "./Avatar.style"

interface IAvatar extends React.HTMLAttributes<HTMLDivElement> {
  alt: string
  src: string
}

const Avatar: FC<IAvatar> = ({alt, src, ...props}) => {
  const {classes} = useStyles()
  return (
    <div {...props} className={classes.avatar}>
      <NatImage className={classes.image} alt={alt} src={src} />
    </div>
  )
}

export default Avatar
