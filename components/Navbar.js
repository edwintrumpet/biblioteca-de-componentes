import { Fragment } from 'react'
import Link from 'next/link'

export default () => {
  return (
    <Fragment>
      <header>
        <Link href='/'>
          <a>
            <h1>Librería de componentes</h1>
          </a>
        </Link>
        <Link href='/boton'>
          <a className='links'>Botones</a>
        </Link>
      </header>

      <style jsx>{`
          header {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              /* background-color: #80ff80; */
              background-color: #269c26;
              display: flex;
              flex-direction: column;
              align-items: center;
              box-shadow: 2px 2px 15px #000;
              z-index: 3;
          }
          a{
              text-decoration: none;
              /*color: #3c503c;*/
              color: #ebffeb;
          }
          h1 {
              font-weight: normal;
              font-size: 1.3rem;
          }
          .links {
              margin-bottom: 1rem;
              font-size: 1.1rem;
          }
      `}</style>
    </Fragment>
  )
}
