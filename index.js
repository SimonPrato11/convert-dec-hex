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
    const hexadecimal = []
    const array = ['A', 'B', 'C', 'D', 'E', 'F']
    while (value > 0) {
      let reminder = value % 16
      value = Math.floor(value / 16)
      // console.log('reminder', reminder, 'value', value)
      if (reminder > 9) {
        hexadecimal.unshift(array[reminder - 10])
      } else {
        hexadecimal.unshift(reminder)
      }
    }
    return hexadecimal.join('')
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
