import { fastify } from 'fastify'
import { DatabaseUsers } from './database.js'

const server = fastify();
const database = new DatabaseUsers;

server.post('/carros', async (request, reply) => {
  const body = request.body;
  await database.createCarro(body);
  return 201
})

server.get('/', () => {
  return 'Brunna';
});

server.listen({
  port: 3333,
})
