import { Application } from 'express'
import os from 'os'

export const router = (server: Application) => {
  server.get('/', (_req, res) => {
    res.send({
      message: 'API Running',
      instance: os.hostname()
    })
  })
}
