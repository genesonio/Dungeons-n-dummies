import {Box, Button, Group, Text} from "@mantine/core"
import useStyles from "./Headbar.style"

const Sheet = () => {
  const {classes} = useStyles()
  return (
    <Box className={classes.nav} component="nav">
      <Text className={classes.logo} component="h1">
        NerdChess
      </Text>
      <Group>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </Group>
    </Box>
  )
}

export default Sheet
