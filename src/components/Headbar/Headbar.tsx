import {Box, Group, Text} from "@mantine/core"
import useStyles from "./Headbar.style"
import {Button} from "../Button"
import Link from "next/link"
import {Image} from "../Image"
import { useSession, signIn , signOut} from "next-auth/react";

const Sheet = () => {
  const {classes} = useStyles(),
  { data:sessionData } = useSession();
  if(!sessionData){
    return (
      <Box className={classes.nav} component="nav">
        <Link className={classes.logoWrapper} href="/">
          <Image className={classes.logo} alt="" src="/logo.svg" />
        </Link>
        <Group noWrap>
          <Button onClick={() => {signIn()}}>Login</Button>
          <Button>Sign Up</Button>
        </Group>
      </Box>
    )
  }

  return (
    <Box className={classes.nav} component="nav">
      <Link className={classes.logoWrapper} href="/">
        <Image className={classes.logo} alt="" src="/logo.svg" />
      </Link>
      <Group noWrap>
        <Button onClick={() => {signOut()}}>Logout</Button>
      </Group>
    </Box>
  )

}

export default Sheet
