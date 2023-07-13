import { app } from './app'
import { env } from './env'

const host = 'RENDER' in process.env ? '0.0.0.0' : 'localhost'

// Run the server!
app.listen({ host, port: env.PORT }).then(() => {
  console.log('HTTP Server Running...')
})
