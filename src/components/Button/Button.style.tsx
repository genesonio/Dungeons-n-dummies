import {createStyles, rem} from "@mantine/core"

const useStyles = createStyles(theme => ({
  button: {
    border: "none",
    backgroundColor: "#272727",
    width: rem(88),
    height: rem(32),
    borderRadius: "20px",

    cursor: "pointer",

    color: theme.colors.gray[0],

    transition: "all .3s ease-in-out",

    boxShadow: theme.shadows.sm,

    ":hover": {
      boxShadow: theme.shadows.md,
      transform: "translateY(-1px)"
    },

    ":active": {
      transition: "all .1s ease-in-out",
      boxShadow: theme.shadows.xs,
      transform: "translateY(1px)"
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: rem(14),
      width: rem(72),
      height: rem(28)
    }
  }
}))

export default useStyles
