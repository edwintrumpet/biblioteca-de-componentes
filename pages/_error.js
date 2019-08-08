function Error ({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Un error ${statusCode} ha ocurrido en el servidor`
        : 'Un error ha ocurrido en el cliente'}
    </p>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
