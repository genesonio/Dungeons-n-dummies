import {createStyles, rem} from "@mantine/core"

const useStyles = createStyles(theme => ({
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: rem(80),
    paddingInline: "2.5rem"
  },
  logo: {
    fontSize: rem(32)
  }
}))

export default useStyles
