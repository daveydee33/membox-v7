import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'
import { Card, CardBody, CardHeader, CardText, Button } from 'reactstrap'
import { useState, useEffect } from 'react'
import clickSound from '@src/assets/audio/mixkit-message-pop-alert-2354.mp3'
import successSound from '@src/assets/audio/mixkit-positive-notification-951.wav'

/// Enable these 2 lines to use the Speechly Polyfill so that it works on Firefox and other browsers.
///  But the problem is that it currently only supports English.  Keep watching the notes on react-speech-recognition and '@speechly/speech-recognition-polyfill' to see if it supports other languages later.
// const appId = '__SPEECHLY_APP_ID_HERE__'
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

const lessons = [
  {
    title: 'Hello, How are you?',
    fragments: ['hola', 'cómo estás|cómo está usted']
  },
  {
    title: "I'm fine, thanks",
    fragments: ['yo estoy|estoy', 'bien|muy bien', 'gracias']
  },
  {
    title: 'Spanish is Easy to learn',
    fragments: ['español', 'es', 'fácil', 'aprender']
  },
  {
    title: 'Spanish is not Difficult',
    fragments: ['español', 'no es', 'difícil']
  },
  {
    title: 'I want to speak Spanish with my friends',
    fragments: ['quiero|yo quiero', 'hablar', 'español', 'con', 'mis', 'amigos|amigas']
  },
  {
    title: 'I can learn Spanish',
    fragments: ['yo puedo|puedo', 'aprender', 'español']
  },
  {
    title: 'I am going to learn Spanish',
    fragments: ['voy a|yo voy a', 'aprender', 'español']
  },
  {
    title: 'I like to learn Spanish',
    fragments: ['me gusta|yo me gusta', 'aprender', 'español']
  },
  {
    title: 'But I need to practice',
    fragments: ['pero', 'necesito|yo necesito', 'practicar']
  },
  {
    title: 'I have time to practice',
    fragments: ['tengo|yo tengo', 'tiempo', 'para', 'practicar']
  },
  {
    title: 'And I can practice everyday',
    fragments: ['y', 'puedo|yo puedo', 'practicar', 'todos los días']
  }
]

const SpeechPage = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition, isMicrophoneAvailable } =
    useSpeechRecognition()
  const [number, setNumber] = useState(0)
  const [showHints, setShowHints] = useState(false)
  const audioClick = new Audio(clickSound)
  const audioSuccess = new Audio(successSound)

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  if (!isMicrophoneAvailable) {
    return <span>Microphone is not enabled.</span>
  }

  const transcriptLowerCase = transcript.toLowerCase()
  const tests = lessons[number].fragments.map((fragment) => {
    const regex = new RegExp(`\\b(${fragment})\\b`)
    return regex.test(transcriptLowerCase)
  })

  function resetResults() {
    audioClick.play()

    tests.length = 0
    resetTranscript()
    // setShowHints(false)
  }

  function nextLesson() {
    if (number < lessons.length - 1) {
      setNumber(number + 1)
      resetResults()
    }
  }
  function backLesson() {
    if (number !== 0) {
      setNumber(number - 1)
      resetResults()
    }
  }

  const startListening = () => {
    resetResults()
    SpeechRecognition.startListening({
      continuous: true,
      language: 'es-US' // 'en-US', 'id', 'es-US', etc.
    })
  }

  const isAllTrue = tests.every((v) => v === true)

  const listeningColor = listening ? 'red' : ''

  useEffect(() => {
    if (isAllTrue) audioSuccess.play()

    // return () => {
    //   second;
    // };
  }, [isAllTrue])

  return (
    <>
      <Card>
        <CardHeader>
          <h1>Spanish</h1> Lesson {number}
        </CardHeader>
      </Card>
      <Card style={{ minHeight: '400px' }}>
        <CardBody>
          {/* <h3>Hint:</h3> */}
          <h3>
            Say: <b>{lessons[number].title}</b>
          </h3>
          {/* <p>Microphone: {listening ? <span style={{ color: 'red' }}>on</span> : 'off'}</p> */}

          {/* <h3>Say Hi or Hello</h3>
      <h3>Say where you are from [America, Cambodia]</h3>
      <h3>Say thanks. [Thanks, Thank you]</h3> */}

          {/* <button onClick={resetTranscript}>Reset</button> */}
          {/* style={{ backgroundColor: '#f6f6f6' }} */}

          <Button
            // style={{ backgroundColor: listeningColor }}
            className="mb-2 mt-1"
            color={listeningColor ? 'relief-warning' : 'relief-primary'}
            onTouchStart={startListening}
            onMouseDown={startListening}
            onTouchEnd={SpeechRecognition.stopListening}
            onMouseUp={SpeechRecognition.stopListening}
          >
            Hold to talk
          </Button>

          <h4>
            <b>Transcript:</b> {transcript}
          </h4>

          <ol>
            {lessons[number].fragments.map((fragment, index) => (
              <li key={fragment}>{tests[index] && '✅'}</li>
            ))}
          </ol>

          <h1 className="mt-2">{isAllTrue ? '🏁🤩🎉' : ' '}</h1>
        </CardBody>

        <CardBody>
          <Button color="flat-primary" onClick={() => setShowHints(!showHints)}>
            Hints
          </Button>
        </CardBody>
        {showHints && (
          <div style={{ backgroundColor: 'aliceblue', padding: '1rem' }}>
            Hints:
            {lessons[number].fragments.map((fragment) => {
              return <li key={fragment.toString()}>{fragment.toUpperCase().replaceAll('|', ' or ')}</li>
            })}
          </div>
        )}
      </Card>
      <Card>
        <CardBody>
          <Button outline onClick={backLesson} className="mr-1">
            Back
          </Button>
          <Button outline color={isAllTrue ? 'success' : 'secondary'} onClick={nextLesson}>
            Next
          </Button>
        </CardBody>
      </Card>
    </>
  )
}

export default SpeechPage
