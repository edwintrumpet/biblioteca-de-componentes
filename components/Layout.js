import { Fragment } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

export default ({
  children,
  title = 'Biblioteca de componentes',
  description = 'Es una biblioteca de componentes reutilizables para múltiples propósitos',
  keywords = 'componentes, react, next, materialUI'
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <Navbar />
      {children}

      <style jsx global>{`
          *{
              box-sizing: border-box;
          }
          body {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
              Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
          .contenedor{
              position: absolute;
              padding-top: 5rem;
              min-height: 100%;
              width: 100%;
          }
        `}</style>
    </Fragment>
  )
}
