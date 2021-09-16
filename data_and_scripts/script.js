const fs = require('fs')
const readline = require('readline')

const inFile = 'data.tsv'
const outFile = 'data.json'

const allObjects = []

const rl = readline.createInterface({
  input: fs.createReadStream(inFile),
  output: process.stdout,
  terminal: false
})

rl.on('line', (line) => {
  const [word, meaning, notes, seeAlso, categories] = line.split('\t')

  const obj = {
    word,
    meaning,
    notes,
    seeAlso,
    categories
  }

  // console.log(obj)

  allObjects.push(obj)
})

rl.on('close', () => {
  console.log(`File read finished.  Writing to file: ${outFile}`)

  try {
    const data = fs.writeFileSync(outFile, JSON.stringify(allObjects))
    console.log('Done.')
  } catch (err) {
    console.error(err)
  }
})
