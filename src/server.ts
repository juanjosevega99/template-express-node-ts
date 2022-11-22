import app from './index'

import { config } from './config/index'
import { Logger } from './utils/logger'

const server = app.listen(config.port, () =>
  Logger.info(`Server running at http://localhost:${config.port}`)
)

export default server
