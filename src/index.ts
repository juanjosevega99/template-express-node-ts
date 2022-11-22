import express from 'express'
import cors from 'cors'

import { config } from './config/index'
import { router } from './routes'
import { Logger } from './utils/logger'

const app = express()

app.use(cors())
app.use(express.json())

router(app)

app.listen(config.port, () =>
  Logger.info(`Server running at http://localhost:${config.port}`)
)

export default app
