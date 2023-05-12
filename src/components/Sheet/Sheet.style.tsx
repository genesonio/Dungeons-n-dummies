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
    height: rem(320)
  },
  skill: {
    color: theme.colors.yellow[0]
  },
  skillD: {
    color: theme.colors.gray[0]
  },
  inventory: {
    height: rem(320)
  },
  item: {
    color: theme.colors.yellow[0]
  },
  itemH: {
    justifyContent: "space-between"
  },
  itemN: {
    maxWidth: rem(120)
  },
  itemQuantity: {
    width: rem(32)
  },
  itemDesc: {
    color: theme.colors.gray[0]
  },
  config: {
    width: "100%",
    justifyContent: "flex-end"
  },
  configButton: {
    color: theme.colors.yellow[0]
  }
}))

export default useStyles
