import {createStyles, rem} from "@mantine/core"

const useStyles = createStyles(theme => ({
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: rem(80),
    paddingInline: "5vw",
    gap: rem(16)
  },
  logo: {
    fontSize: rem(32),

    [theme.fn.smallerThan("md")]: {
      fontSize: rem(24)
    }
  }
}))

export default useStyles
