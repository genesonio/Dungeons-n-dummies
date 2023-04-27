import {createStyles, rem} from "@mantine/core"

const useStyles = createStyles({
  avatar: {
    width: rem(256),
    height: rem(256),
    position: "relative",
    borderRadius: rem(2000)
  },
  image: {
    objectFit: "cover",
    borderRadius: rem(2000)
  }
})

export default useStyles
