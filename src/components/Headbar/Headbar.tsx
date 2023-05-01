import {Box, Group, Text} from "@mantine/core"
import useStyles from "./Headbar.style"
import {Button} from "../Button"
import Link from "next/link"
import {Image} from "../Image"

const Sheet = () => {
  const {classes} = useStyles()
  return (
    <Box className={classes.nav} component="nav">
      <Link className={classes.logoWrapper} href="/">
        <Image className={classes.logo} alt="" src="/logo.svg" />
      </Link>
      <Group noWrap>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </Group>
    </Box>
  )
}

export default Sheet
