const express = require('express')
const app = express()

const PORT = 4000

app.use(express.json())

app.get('/', (req, res) => {
  res.status('200').send({ oh: 'yea' })
})

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
)
