import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ name: 'audrey' })
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

