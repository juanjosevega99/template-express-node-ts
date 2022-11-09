import express from 'express'

import { config } from './config/index'
import { Logger } from './utils/logger'

const app = express()
app.listen(() => Logger.info(`Server running at ${config.port}`))
