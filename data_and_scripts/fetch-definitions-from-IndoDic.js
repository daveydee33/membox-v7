// while read file line by line
// fetch from IndoDic website
// get part of speech, definition

// in plain Javascript in the browser, this was a lot easier with just query selectors.

// 0:word, 1:part of speech, 2:root+affixes 3:definition
// document.querySelectorAll('frame[name=results]')[0].contentDocument.querySelector('#myid table').querySelectorAll('tr')[0].querySelectorAll('td')[0].textContent
// document.querySelectorAll('frame[name=results]')[0].contentDocument.querySelector('#myid table').querySelectorAll('tr')[0].querySelectorAll('td')[0].textContent

const fs = require('fs')
const readline = require('readline')
const axios = require('axios')
const cheerio = require('cheerio')

const inFile = 'MY_5k_Words_and_Phrases_compiled.txt'

async function processLineByLine() {
  const fileStream = fs.createReadStream(inFile)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.

    // set the url
    const query = line.replace(/ /g, '%20')
    const config = {
      method: 'get',
      url: `https://indodic.com/query.php?checkedtable=indo2eng&searchword=${query}&gobutton.x=10&gobutton.y=14&ispopup=0&sapi=0&isIE=no&lqt=1136&bp=1`,
      headers: {}
    }

    // fetch the page
    axios(config)
      .then(function (response) {
        let $ = cheerio.load(response.data)
        // this is a strange html page with multiple iframes, so not a good example for re-use
        const tableRows = $('#myid table tr') // get the first tr

        const cellData = []
        tableRows.each(function (idx, el) {
          if (idx === 0) {
            const cells = $(el).find('td')
            cells.each((idx, el) => {
              cellData.push($(el).text().trim())
            })
          }
        })

        console.log(cellData.join('|'))
      })
      .catch(function (error) {
        console.log(error)
      })

    // sleep
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    await delay(10000) /// waiting
  }
}

processLineByLine()
