import {Box, Text} from "@mantine/core"
import useStyle from "./Home.style"

const Home = () => {
  const {classes} = useStyle()
  return (
    <Box className={classes.root} component="section">
      <Text component="h1">Bem vindo ao NerdChess</Text>
    </Box>
  )
}

export default Home
