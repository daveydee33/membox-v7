// ** React Imports
import { Link } from 'react-router-dom'

import AudioPlayer from '../../components/AudioPlayer'

// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, Heart } from 'react-feather'
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Button,
  Badge,
  CardColumns
} from 'reactstrap'

import img1 from '@src/assets/images/pages/content-img-1.jpg'
import img2 from '@src/assets/images/pages/content-img-2.jpg'
import img3 from '@src/assets/images/pages/content-img-3.jpg'
import img4 from '@src/assets/images/pages/content-img-4.jpg'

const randomImg = (images = [img1, img2, img3, img4]) => {
  const index = Math.floor(Math.random() * images.length)
  return images[index]
}

const ItemCards = (props) => {
  // ** Props
  const {
    // store,
    items,
    activeView,
    dispatch,
    // getItems,
    selectItem,
    handleFormSidebar
  } = props

  // ** Function to selectItem on click
  const handleItemClick = (obj) => {
    dispatch(selectItem(obj))
    handleFormSidebar()
  }

  const getItemUrls = (title) => [
    `https://lla-audio.s3.amazonaws.com/A/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/B/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/C/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/D/${title}.mp3`
  ]

  // ** Renders items
  const renderItems = () => {
    if (items.length) {
      return items.map((item) => {
        return (
          <Card
            className="ecommerce-card"
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            <CardImg src={randomImg()} />
            <AudioPlayer urls={getItemUrls(item.title)} />
            <CardBody>
              <CardTitle tag="h4">{item.title}</CardTitle>
              <CardText>{item.description}</CardText>
              <CardText className="text-muted">{item.details}</CardText>
              {item.tags.map((tag) => (
                <Badge
                  color="light-secondary"
                  className="mr-1 mt-1"
                  pill
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </CardBody>
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
