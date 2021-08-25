import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <title>gbxxy</title>
      <meta name="description" content="Meu portfólio, seja bem vindo :)" />
      <link rel="icon" href="/favicon.ico" />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
