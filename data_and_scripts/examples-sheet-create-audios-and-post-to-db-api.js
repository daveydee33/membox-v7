// This is just for readonly on a specific sheet

require('dotenv').config()
const { google } = require('googleapis')
const textToSpeech = require('@google-cloud/text-to-speech')
const fs = require('fs')
const util = require('util')
const axios = require('axios').default

const spreadsheetId = process.env.SHEET_ID
const tabName = 'Example Phrases/Context Examples' // Name of the Sheet tab in google sheets
const cellRange = 'A3:F89' // the range of interest. skip heading rows? limit the length and width?
const apiURL = 'http://localhost:4001/v1/examples' // make sure we're posting to the right Mongo Collection
const doCreateAudios = false
const doPostToDB = false

const doesFileExist = (filename) => {
  try {
    if (fs.existsSync(filename)) {
      return true
    } else {
      return false
    }
  } catch (err) {
    console.error(`ERROR: `, err)
  }
}

function sleep(ms) {
  // this sleep doesn't really work - need to look into it further
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const ttsClient = new textToSpeech.TextToSpeechClient()

async function makeTTSRequest(text, voice, filenameId) {
  const request = {
    input: { text: text },
    voice: {
      languageCode: 'id-ID',
      name: `id-ID-Wavenet-${voice}` // Indonesian has A,B,C,D in Wavenet.  Wavenet is better than Standard
      // ssmlGender: "NEUTRAL",
    },
    audioConfig: {
      audioEncoding: 'MP3'
      // check API docs for other options, like speed, pitch, sampleRate
    }
  }

  const filename = `audio/examples/${voice}/${filenameId}_${voice}.mp3`

  if (!doesFileExist(filename)) {
    // await sleep(5000); // the sleep doesn't seem to work here.. ?

    // Performs the text-to-speech request
    const [response] = await ttsClient.synthesizeSpeech(request)
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile)
    await writeFile(filename, response.audioContent, 'binary')
    console.log(`Audio content written to file: ${filename}`)
  } else {
    console.log(`File exists, skipping: ${filename}`)
  }
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

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
}

async function main() {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const range = `${tabName}!${cellRange}`

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    range: range
  })

  const { values } = response.data

  const objects = values.map((value) => {
    const [title, description, details, source, tags, audio, video, image] =
      value
    return {
      title,
      description,
      details,
      source,
      tags,
      audio,
      video,
      image
    }
  })

  // Now do what with the data?
  // console.log(objects);

  for (const [index, element] of objects.entries()) {
    console.log(`running ${index}`)

    // Make Audios
    if (doCreateAudios) {
      // await sleep(5000);  // I can put the sleep here because it doesn't seem to work in the other function.  Might need a sleep if it's more than 100+ or so (check google limits)
      makeTTSRequest(element.title, 'A', element.audio)
      makeTTSRequest(element.title, 'B', element.audio)
      makeTTSRequest(element.title, 'C', element.audio)
      makeTTSRequest(element.title, 'D', element.audio)
    }

    // Add to DB (POST to API)
    if (doPostToDB) {
      addToDatabase({
        title: element.title,
        description: element.description,
        details: element.details
        // source: element.source,
        // tags: element.tags,
        // audio: element.audio,
        // video: element.video,
        // image: element.image
      })
    }
  }
}

main()
