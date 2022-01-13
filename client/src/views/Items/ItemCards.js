import { useContext } from 'react'
import AudioPlayer from '../../components/AudioPlayer'
import classnames from 'classnames'
import { Star, Heart, Check, Square, Edit2 } from 'react-feather'
import { Card, CardBody, CardText, CardTitle, CardImg, Button, Badge, CardColumns } from 'reactstrap'
import { UserContextFirebase } from '../../utility/context/UserContextFirebase'
import { setFavorite, unsetFavorite, setProgress } from '../../firebase'
import { Link } from 'react-router-dom'

import img1 from '@src/assets/images/pages/content-img-1.jpg'
import img2 from '@src/assets/images/pages/content-img-2.jpg'
import img3 from '@src/assets/images/pages/content-img-3.jpg'
import img4 from '@src/assets/images/pages/content-img-4.jpg'
import CardFooter from 'reactstrap/lib/CardFooter'

const ItemCards = (props) => {
  // ** Props
  const { dispatch, items, activeView, selectItem, handleFormPanel, userDataRedux } = props

  // Context-Firebase
  const { currentUserFirebase, favorites, progress } = useContext(UserContextFirebase)

  const handleFavoriteClick = (e, item) => {
    e.stopPropagation()
    if (favorites.includes(item.title)) {
      unsetFavorite(item, currentUserFirebase.uid)
    } else {
      setFavorite(item, currentUserFirebase.uid)
    }
  }

  const handleProgressClick = (e, item) => {
    e.stopPropagation()
    setProgress(item, currentUserFirebase.uid, progress[item.title])
  }

  // ** Function to selectItem on click
  const handleItemClick = (obj) => {
    dispatch(selectItem(obj))
    handleFormPanel()
  }

  const getItemUrls = (title) => [
    `https://lla-audio.s3.amazonaws.com/A/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/B/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/C/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/D/${title}.mp3`
  ]

  const randomImg = (images = [img1, img2, img3, img4]) => {
    const index = Math.floor(Math.random() * images.length)
    return images[index]
  }

  // ** Renders items
  const renderItems = () => {
    if (items.length) {
      return items.map((item) => {
        return (
          <Card key={item.id} onClick={() => handleItemClick(item)}>
            <CardImg src={img1} />
            <AudioPlayer urls={getItemUrls(item.title)} />
            <CardBody>
              <CardTitle tag="h4">{item.title}</CardTitle>
              <CardText>{item.description}</CardText>
              <CardText className="text-muted">{item.details}</CardText>
              {item.tags.map((tag) => (
                <Badge color="light-secondary" className="mr-1 mt-1" pill key={tag}>
                  {tag}
                </Badge>
              ))}
            </CardBody>
            <CardFooter
              className="text-center"
              style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}
            >
              <Link to={`/item/${item.id}`}>
                <Edit2 />
              </Link>
              <Link
                className={classnames('mr-50', {
                  'text-danger': favorites.includes(item.title)
                })}
                onClick={(e) => handleFavoriteClick(e, item)}
              >
                <Heart color={favorites.includes(item.title) ? 'red' : 'gray'} />
              </Link>
              <Link onClick={(e) => handleProgressClick(e, item)}>
                {progress[item.title] && progress[item.title] > 0 ? (
                  <Check color={'green'} />
                ) : (
                  <Square color={'gray'} />
                )}
                {/* <span>Completed</span> */}
              </Link>
            </CardFooter>
          </Card>
        )
      })
    }
  }

  return (
    <div
      className={classnames({
        'grid-view': activeView === 'grid',
        'list-view': activeView === 'list',
        'card-columns': activeView === 'columns'
      })}
    >
      {renderItems()}
    </div>
  )
}

export default ItemCards
