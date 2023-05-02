import {createStyles, rem} from "@mantine/core"

const useStyles = createStyles(theme => ({
  sheet: {
    paddingInline: "5vw",
    marginTop: rem(24)
  },
  picture: {
    width: rem(192),
    height: rem(192),
    margin: "auto",
    borderRadius: "9999px"
  },
  charHead: {
    justifyContent: "space-between"
  },
  firstInfo: {
    width: "40vw"
  },
  skills: {
    height: rem(96)
  }
}))

export default useStyles
