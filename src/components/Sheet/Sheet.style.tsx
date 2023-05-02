import {createStyles, rem} from "@mantine/core"

const useStyles = createStyles(theme => ({
  sheet: {
    paddingInline: "5vw",
    marginTop: rem(24),
    display: "flex",
    flexDirection: "column",
    gap: rem(8)
  },
  picture: {
    width: rem(192),
    height: rem(192),
    margin: "auto",
    borderRadius: "9999px"
  },
  stats: {
    width: "100%"
  },
  bars: {
    width: "40%",
    ":nth-last-child(-n + 1)": {
      color: theme.colors.grape[1],
      fontSize: rem(14),
      fontWeight: "bold"
    }
  },
  sp: {
    width: "25%"
  },
  attributes: {
    width: "22%",
    color: theme.colors.grape[1],
    fontSize: rem(14),
    fontWeight: "bold"
  },
  baseInfo: {
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
