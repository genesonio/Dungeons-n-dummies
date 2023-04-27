import {SessionProvider} from "next-auth/react"
import {MantineProvider} from "@mantine/core"

import {api} from "@/utils/api"

import {type AppType} from "next/app"
import {type Session} from "next-auth"

import "@/styles/globals.css"

const MyApp: AppType<{session: Session | null}> = ({
  Component,
  pageProps: {session, ...pageProps}
}) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MantineProvider>
  )
}

export default api.withTRPC(MyApp)
