import { app } from './app'
import { env } from './env'

// Run the server!
app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP Server Running...')
})
