import 'dotenv/config'
import path from 'path'

const { PORT } = process.env

export const config = {
    env: {
        port: Number(PORT)
    }   
}