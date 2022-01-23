import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'
import { Card, CardBody, Button } from 'reactstrap'

/// Enable these 2 lines to use the Speechly Polyfill so that it works on Firefox and other browsers.
///  But the problem is that it currently only supports English.  Keep watching the notes on react-speech-recognition and '@speechly/speech-recognition-polyfill' to see if it supports other languages later.
// const appId = '__SPEECHLY_APP_ID_HERE__'
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

const SpeechPage = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition, isMicrophoneAvailable } =
    useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  if (!isMicrophoneAvailable) {
    return <span>Microphone is not enabled.</span>
  }

  const startListening = () => {
    resetTranscript()
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-US' // 'en-US', 'id', etc.
    })
  }

  const fragments = ['hey|hi|hello', 'cambodia|america', 'thanks|thank you']
  // const fragments = ['halo|hai', 'kamboja|amerik', 'terima kasih|makasih']
  const transcriptLowerCase = transcript.toLowerCase()
  const tests = fragments.map((fragment) => {
    const regex = new RegExp(`\\b(${fragment})\\b`)
    return regex.test(transcriptLowerCase)
  })
  const isAllTrue = tests.every((v) => v === true)

  const listeningColor = listening ? 'red' : ''

  return (
    <Card>
      <CardBody>
        {/* <p>Microphone: {listening ? <span style={{ color: 'red' }}>on</span> : 'off'}</p> */}

        {/* <h3>Say Hi or Hello</h3>
      <h3>Say where you are from [America, Cambodia]</h3>
      <h3>Say thanks. [Thanks, Thank you]</h3> */}

        {fragments.map((fragment) => {
          return <h3>Say: {fragment.toUpperCase().replaceAll('|', ' or ')}</h3>
        })}

        {/* <button onClick={resetTranscript}>Reset</button> */}
        <p>Transcript: {transcript}</p>
        {fragments.map((fragment, index) => {
          return (
            <h2 key={fragment}>
              {index + 1}: {tests[index] && '✅'}
            </h2>
            // <p key={fragment}>
            //   Looking for: {fragment} : {tests[index] && 'YES!'}
            // </p>
          )
        })}

        <Button
          // style={{ backgroundColor: listeningColor }}
          color={listeningColor ? 'relief-warning' : 'relief-primary'}
          onTouchStart={startListening}
          onMouseDown={startListening}
          onTouchEnd={SpeechRecognition.stopListening}
          onMouseUp={SpeechRecognition.stopListening}
        >
          Hold to talk
        </Button>

        {isAllTrue && <h1>😎👍</h1>}
      </CardBody>
    </Card>
  )
}

export default SpeechPage
