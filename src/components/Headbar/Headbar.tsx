import {Box, Group, Text} from "@mantine/core"
import useStyles from "./Headbar.style"
import {Button} from "../Button"
import Link from "next/link"

const Sheet = () => {
  const {classes} = useStyles()
  return (
    <Box className={classes.nav} component="nav">
      <Link className={classes.logo} href="/">
        <Text component="h1">NerdChess</Text>
      </Link>
      <Group noWrap>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </Group>
    </Box>
  )
}

export default Sheet
