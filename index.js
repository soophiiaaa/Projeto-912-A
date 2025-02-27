import { express } from 'express'
import { bodyParser } from 'body-parser'
import { userRoutes } from './routes/users'

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
