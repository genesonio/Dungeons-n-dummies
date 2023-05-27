import {Box, Text} from "@mantine/core"
import useStyle from "./Home.style"
import { Button } from "@/components/Button"
import { signIn } from "next-auth/react"

const Home = () => {
  const {classes} = useStyle()
  return (
    <Box className={classes.root} component="section">
      <Text component="h1">Bem vindo ao NerdChess</Text>
      <Button onClick={() => {signIn()}}>Login</Button>
    </Box>
  )
}

export default Home
