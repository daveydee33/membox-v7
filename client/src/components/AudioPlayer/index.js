import ReactPlayer from 'react-player/file'
import { useState, Fragment } from 'react'

import buttonImg from '@src/assets/images/dave/1486564396-audio_81506.png'

function AudioPlayer(props) {
  const { urls } = props

  // state hooks
  const [playing, setPlaying] = useState(false)
  const [loop, setLoop] = useState(false)
  const [controls, setControls] = useState(false) // probably false, because we don't need the progress bar and buttons for such short audio clips.  for longer audio phrases and videos or dialoges we will probably set this to true.
  const [light, setLight] = useState(true) // seems to only work if this is false
  // const [light, setLight] = useState(
  //   "https://avatars.githubusercontent.com/u/1926029?s=48&v=4"
  // ); // this is good because it won't load the full player untill someone has clicked on it (good for when I'm loading 1000 items on a page, it doesn't load the full player for each of these, only when the user clicks on one.)
  const [playIndex, setPlayIndex] = useState(0)

  const nextAudio = () => {
    const lastIndex = urls.length - 1
    if (playIndex !== lastIndex) {
      setPlayIndex(playIndex + 1)
    } else {
      setPlaying(false)
      setPlayIndex(0)

      // a hack that seems to get the preview play button to load again at the end of playing the array.  might not always work, and probably should be a useEffect, but it works for now.
      setLight(false)
      setLight(true)
    }
  }

  return (
    <Fragment>
      <div
        onClick={(e) => {
          setPlaying(!playing)
          e.stopPropagation()
        }}
      >
        <ReactPlayer
          url={urls[playIndex]}
          onEnded={nextAudio}
          config={{
            file: {
              forceAudio: true
            }
          }}
          playing={playing}
          loop={loop}
          controls={controls} // Set to true or false to display native player controls.  For Vimeo videos, hiding controls must be enabled by the video owner.
          light={light} // Set to true to show just the video thumbnail, which loads the full player on click.  Pass in an image URL to override the preview image
          // volume
          // muted
          // playbackRate
          // width
          // height
          style={{
            backgroundImage: `url("${buttonImg}")`,
            backgroundSize: 'cover'
          }}
          width="50px"
          height="50px"
          onError={(error) => {
            console.log(`RealPlayer error: `)
            console.error(error)
          }}
          // progressInterval
          // playsinline
          // pip
          // stopOnUnmount
          // fallback
          // wrapper
          // playIcon
          // previewTabIndex
          // config
        />
      </div>
    </Fragment>
  )
}

export default AudioPlayer
