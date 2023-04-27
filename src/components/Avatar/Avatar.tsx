import NatImage from "../Image/Image"
import useStyles from "./Avatar.style"

const Avatar = () => {
  const {classes} = useStyles()
  return (
    <div className={classes.avatar}>
      <NatImage
        className={classes.image}
        alt=""
        src="https://picsum.photos/200"
      />
    </div>
  )
}

export default Avatar
