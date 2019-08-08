import Layout from '../components/Layout'

function Error ({ statusCode }) {
  return (
    <div>
      <Layout title={`Error ${statusCode}`}>
        {/* <p>
          {statusCode
            ? `Un error ${statusCode} ha ocurrido en el servidor`
            : 'Un error ha ocurrido en el cliente'}
        </p> */}
        <span>Error {statusCode}</span>
      </Layout>

      <style jsx>{`
          div {
              position: absolute;
              width: 100%;
              height: 100%;
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
    </div>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
