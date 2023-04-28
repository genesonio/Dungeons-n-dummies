import {Box, Group, Text} from "@mantine/core"
import useStyles from "./Headbar.style"
import {Button} from "../Button"

const Sheet = () => {
  const {classes} = useStyles()
  return (
    <Box className={classes.nav} component="nav">
      <Text className={classes.logo} component="h1">
        NerdChess
      </Text>
      <Group noWrap>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </Group>
    </Box>
  )
}

export default Sheet
