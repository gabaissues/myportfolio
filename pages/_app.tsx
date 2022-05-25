import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {

    //fetch("https://api.gbxxy.com/details/add-view")

  })

  return (
    <>
      <title>gbxxy</title>
      <meta name="description" content="Meu portfólio, seja bem vindo :)" />
      <link rel="icon" href="/favicon.ico" />
      <Component {...pageProps} />
  </>
  )
}
export default MyApp
