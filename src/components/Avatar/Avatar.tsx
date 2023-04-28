import type {FC} from "react"

import NatImage from "../Image/Image"
import useStyles from "./Avatar.style"

interface IAvatar extends React.HTMLAttributes<HTMLDivElement> {
  alt: string
  src: string
}

const Avatar: FC<IAvatar> = ({alt, src, className, ...props}) => {
  if (typeof className == "undefined") className = ""
  const {classes} = useStyles()
  return (
    <div className={`${classes.avatar} ${className}`} {...props}>
      <NatImage className={classes.image} alt={alt} src={src} />
    </div>
  )
}

export default Avatar
