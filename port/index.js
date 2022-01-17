import app from '../index.js'

const PORT = 3000

app.listen(process.env.PORT || PORT, function () {
  console.log('PORT 3000 UP AND RUNNING')
})
