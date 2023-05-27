import {Sheet} from "@/components/Sheet";
import {Home} from "./(Home)"
import {useSession} from "next-auth/react"

const Index = () => {
  const { data:sessionData } = useSession();
  if(!sessionData){
    return <Home />
  }
    return<Sheet/>
}

export default Index
