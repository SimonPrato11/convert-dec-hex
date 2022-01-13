import express from 'express'
const app = express()

import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

export function convert(value) {
  if (isNaN(value)) {
    return 'Its not a number'
  } else {
    const hexString = value.toString(16)
    return hexString.toUpperCase()
  }
}

app.post('/', async function (req, res) {
  try {
    const value = req.body.load
    const result = await convert(value)
    res.json({ payload: result })
  } catch (error) {
    console.log(error)
  }
})

export default app
