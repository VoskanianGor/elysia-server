import { Elysia } from 'elysia'

const PORT = process.env.PORT || 3001

const app = new Elysia()
    .get('/', () => 'Hello Elysia')
    .listen(PORT)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`)
