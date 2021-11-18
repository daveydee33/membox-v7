import { Link } from 'react-router-dom'
import AudioPlayer from '../../components/AudioPlayer'
import classnames from 'classnames'
import { Star, Heart, Check } from 'react-feather'
import { Card, CardBody, CardText, CardTitle, CardImg, Button, Badge, CardColumns } from 'reactstrap'

import img1 from '@src/assets/images/pages/content-img-1.jpg'
import img2 from '@src/assets/images/pages/content-img-2.jpg'
import img3 from '@src/assets/images/pages/content-img-3.jpg'
import img4 from '@src/assets/images/pages/content-img-4.jpg'

const ItemCards = (props) => {
  // ** Props
  const {
    dispatch,
    items,
    activeView,
    selectItem,
    handleFormSidebar,
    addToFavorites,
    removeFromFavorites,
    getUserData,
    userDataRedux
  } = props

  const handleFavoriteClick = (e, id, removeFavorite = false) => {
    e.stopPropagation()
    if (removeFavorite) {
      dispatch(removeFromFavorites(id))
    } else {
      dispatch(addToFavorites(id))
    }
    // dispatch(getProducts(store.params))
  }

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

  const randomImg = (images = [img1, img2, img3, img4]) => {
    const index = Math.floor(Math.random() * images.length)
    return images[index]
  }

  // ** Renders items
  const renderItems = () => {
    if (items.length) {
      return items.map((item) => {
        return (
          <Card className="ecommerce-card" key={item.id} onClick={() => handleItemClick(item)}>
            <CardImg src={randomImg()} />
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

            {/* Buttons */}
            <div className="item-options text-center">
              <Button
                className="btn-wishlist"
                color="light"
                // TODO: fix this onClick third parameter
                onClick={(e) => handleFavoriteClick(e, item.id, userDataRedux?.favorites?.includes(item.id))}
              >
                <Heart
                  className={classnames('mr-50', {
                    'text-danger': userDataRedux?.favorites?.includes(item.id)
                  })}
                  size={14}
                />
                <span>Favorite</span>
              </Button>

              {/* <Button
                className="btn-wishlist"
                color="light"
                onClick={() => handleWishlistClick(item.id, item.isInWishlist)}
              >
                <Check
                  className={classnames('mr-50', { 'text-danger': item.isInWishlist })}
                  size={14}
                  color={'green'}
                />
                <span>Completed</span>
              </Button> */}
            </div>
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
