exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'ABC',
      age: 44,
      email: 'dodo@nm.com'
    })
  }
}