const app = require('express')()

const PORT = 4000

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
)
