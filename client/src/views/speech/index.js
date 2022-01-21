import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import { useContext, useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

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
    SpeechRecognition.startListening({ continuous: true })
  }

  const fragments = ['hey', 'fine|well|good', "what's up"]
  const transcriptLowerCase = transcript.toLowerCase()
  const tests = fragments.map((fragment) => {
    const regex = new RegExp(`\\b(${fragment})\\b`)
    return regex.test(transcriptLowerCase)
  })
  const isAllTrue = tests.every((v) => v === true)

  return (
    <Card>
      <p>Microphone: {listening ? <span style={{ color: 'red' }}>on</span> : 'off'}</p>
      <button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
      >
        Hold to talk
      </button>
      <button onClick={resetTranscript}>Reset</button>
      <p>Transcript: {transcript}</p>
      {fragments.map((fragment, index) => {
        return (
          <p key={fragment}>
            Looking for: {fragment} : {tests[index] && 'YES!'}
          </p>
        )
      })}
    </Card>
  )
}

export default SpeechPage
