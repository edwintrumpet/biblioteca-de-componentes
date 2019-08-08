import Layout from '../components/Layout'

function Error ({ statusCode }) {
  return (
    <Layout title={`Error ${statusCode}`}>
      {/* <p>
          {statusCode
            ? `Un error ${statusCode} ha ocurrido en el servidor`
            : 'Un error ha ocurrido en el cliente'}
        </p> */}
      <div className='contenedor'>
        <span>Error {statusCode}</span>
      </div>

      <style jsx>{`
        .contenedor {
            background-color: #9B1B30;
            color: #FFF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        span {
            font-size: 2.2rem;
        }
      `}</style>
    </Layout>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
