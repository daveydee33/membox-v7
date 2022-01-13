import { useContext } from 'react'
import AudioPlayer from '../../components/AudioPlayer'
import classnames from 'classnames'
import { Star, Heart, Check, Square, Edit2 } from 'react-feather'
import { Card, CardBody, CardText, CardTitle, CardImg, Button, Badge, CardColumns, CardFooter } from 'reactstrap'
import { UserContextFirebase } from '../../utility/context/UserContextFirebase'
import { setFavorite, unsetFavorite, setProgress } from '../../firebase'
import { Link, useHistory } from 'react-router-dom'

import img1 from '@src/assets/images/pages/content-img-1.jpg'
import img2 from '@src/assets/images/pages/content-img-2.jpg'
import img3 from '@src/assets/images/pages/content-img-3.jpg'
import img4 from '@src/assets/images/pages/content-img-4.jpg'

const ItemCards = (props) => {
  // ** Props
  const { dispatch, items, activeView, selectItem, handleFormPanel, userDataRedux } = props
  // Context-Firebase
  const { currentUserFirebase, favorites, progress } = useContext(UserContextFirebase)
  const history = useHistory()

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

  const handleEditClick = (e, item) => {
    console.log(`e, item`, e, item)
    e.stopPropagation()
    dispatch(selectItem(item))
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
          <Card key={item.id} className="ecommerce-card">
            <CardImg src={img1} />
            <CardBody onClick={() => history.push(`/item/${item.id}`)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
                <div>
                  <CardText tag="h2">{item.title}</CardText>
                  <CardText tag="h5">{item.description}</CardText>
                </div>
                <AudioPlayer urls={getItemUrls(item.title)} onClick={(e) => e.stopPropagation()} />
              </div>
              <CardText className="text-muted">{item.details}</CardText>
              {item.examples?.map((example) => {
                const regexTitle = new RegExp(item.title, 'gi')
                const titleWithBold = example.title.replace(regexTitle, `<b>$&</b>`)
                const regexDescription = new RegExp(`\\b(${item.description.split('; ').join('|')})\\b`, 'gi')
                const descriptionWithBold = example.description.replace(regexDescription, `<b>$&</b>`)
                return (
                  <div key={example.title} className="mt-1" align="right">
                    <div dangerouslySetInnerHTML={{ __html: titleWithBold }}></div>
                    <div dangerouslySetInnerHTML={{ __html: descriptionWithBold }} className="font-italic"></div>
                  </div>
                )
              })}
              <CardText>
                {item.tags.map((tag) => (
                  <Badge color="light-secondary" className="mr-1 mt-1" pill key={tag}>
                    {tag}
                  </Badge>
                ))}
              </CardText>
            </CardBody>
            <CardFooter
              className="text-center"
              style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}
            >
              <Link onClick={(e) => handleEditClick(e, item)} to="#">
                <Edit2 color="gray" />
              </Link>
              <Link
                className={classnames('mr-50', {
                  'text-danger': favorites.includes(item.title)
                })}
                onClick={(e) => handleFavoriteClick(e, item)}
                to="#"
              >
                <Heart color={favorites.includes(item.title) ? 'red' : 'gray'} />
              </Link>
              <Link onClick={(e) => handleProgressClick(e, item)} to="#">
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
