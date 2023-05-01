import {createStyles, rem} from "@mantine/core"

const useStyles = createStyles(theme => ({
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: rem(120),
    paddingInline: "5vw",
    gap: rem(16)

    //backgroundColor: "#1e1e1e"
  },

  logoWrapper: {
    width: rem(80),
    position: "relative"
  },

  logo: {
    objectFit: "contain"
  }
}))

export default useStyles
