import {createStyles, rem} from "@mantine/core"

const useStyles = createStyles(theme => ({
  sheet: {
    paddingInline: "5vw",
    marginTop: rem(24)
  },
  picture: {
    [theme.fn.smallerThan("md")]: {
      margin: "auto"
    }
  },
  charHead: {
    [theme.fn.smallerThan("md")]: {
      justifyContent: "space-between"
    }
  },
  firstInfo: {
    width: "40vw"
  },
  status: {
    justifyContent: "space-between",
    width: "100%"
  },
  lvl: {
    width: "47%"
  },
  xp: {
    width: "47%"
  }
}))

export default useStyles
