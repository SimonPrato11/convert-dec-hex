const form = document.querySelector('.form')
const display = document.querySelector('.display')

const getResult = async function (decimal) {
  try {
    const res = await fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '',
      },
      body: JSON.stringify({ load: decimal }),
    })
    const data = await res.json()
    console.log(data.payload)
    display.textContent = `Your hexadecimal is: ${data.payload}`
  } catch (error) {
    console.log(error)
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const decimal = form.elements.decimal.value
  console.log(decimal)
  getResult(Number(decimal))
})
