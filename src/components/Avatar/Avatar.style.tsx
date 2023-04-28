import {createStyles, rem} from "@mantine/core"

const useStyles = createStyles({
  avatar: {
    width: rem(192),
    height: rem(192),
    position: "relative",
    borderRadius: rem(2000)
  },
  image: {
    objectFit: "cover",
    borderRadius: rem(2000)
  }
})

export default useStyles
