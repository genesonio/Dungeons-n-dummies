import {SessionProvider} from "next-auth/react"
import {MantineProvider} from "@mantine/core"

import {api} from "@/utils/api"

import {type AppType} from "next/app"
import {type Session} from "next-auth"

import "@/styles/globals.css"
import Head from "next/head"
import {Headbar} from "@/components/Headbar"
import MyTheme from "@/utils/mantineTheme"

const MyApp: AppType<{session: Session | null}> = ({
  Component,
  pageProps: {session, ...pageProps}
}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Dungeons & Dummies</title>
      </Head>
      <MantineProvider theme={MyTheme} withGlobalStyles withNormalizeCSS>
        <SessionProvider session={session}>
          <Headbar />

          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </>
  )
}

export default api.withTRPC(MyApp)
