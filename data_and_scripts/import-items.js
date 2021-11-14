// require('dotenv').config()
// or just run the node script like this:
// export GOOGLE_APPLICATION_CREDENTIALS="/Users/dave/CODE/membox-v7/secrets/membox-v7-9c068c27c947-gcp-key.json"
// node import-items.js

// NOTE: Before import, do a find/replace and make sure semi-colon is used as the separater in the arrays Related, Tags, Examples.
// Also, need to manually handle the Examples
// NOTE:  This seems to cap off at 1000.
// So i had to do rows 'A4:H1000' and then 'A1001:H1058'

require('dotenv').config()
const { google } = require('googleapis')
const axios = require('axios').default

const spreadsheetId = '142jqozrURN-3xw6lZbzGD4U7zV_tuIjwREJp7EsLh6Y'
const tabName = 'Words' // Name of the Sheet tab in google sheets
const cellRange = 'A4:H1000' // the range of interest. skip heading rows? limit the length and width?
// const cellRange = 'A3:H1058' // the range of interest. skip heading rows? limit the length and width?
const apiURL = 'http://localhost:4001/v1/items' // make sure we're posting to the right Mongo Collection
const doPostToDB = false

function sleep(ms) {
  // this sleep doesn't really work - need to look into it further
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const addToDatabase = async (object) => {
  var options = {
    method: 'POST',
    url: apiURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTViZTU3NjBiYzRiN2Q3YjBjNTIxZDciLCJpYXQiOjE2MzM0MTI0ODgsImV4cCI6MTYzNTI3MjQyOCwidHlwZSI6ImFjY2VzcyJ9.z0c-vTYgBsCeGPX_hcbC0EtQ3gx6lkcyCQ_EYOdqzAA'
    },
    data: object
  }

  try {
    const res = await axios.request(options)
    console.log(`${res.data.id}|${res.data.title}`)
  } catch (error) {
    console.log(error.response.data)
  }
}

async function main() {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] })
  const sheets = google.sheets({ version: 'v4', auth })
  const range = `${tabName}!${cellRange}`
  const response = await sheets.spreadsheets.values.get({ spreadsheetId: spreadsheetId, range: range })
  const { values } = response.data
  const objects = values.map((value) => {
    const [title, description, details, related, tags, examples, audios, images] = value
    return { title, description, details, related, tags, examples, audios, images }
  })

  // Now do what with the data?
  for (const [index, element] of objects.entries()) {
    await sleep(1000)
    console.log(`running ${index}`)
    // Add to DB (POST to API)
    const { title, description, details, related, tags, examples, audios, images } = element
    if (doPostToDB) {
      addToDatabase({
        title,
        description,
        details,
        related: related?.split(';'),
        tags: tags?.split(';'),
        examples: [],
        audios: [],
        images: []
      })
    }
  }
}

main()
