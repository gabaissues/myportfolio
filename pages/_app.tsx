import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
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
