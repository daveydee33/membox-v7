// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, Heart } from 'react-feather'
import { Card, CardBody, CardText, CardTitle, Button, Badge } from 'reactstrap'

const ItemCards = (props) => {
  // ** Props
  const { store, items, activeView, dispatch, getItems } = props

  // ** Renders items
  const renderItems = () => {
    if (items.length) {
      return items.map((item) => {
        return (
          <Card>
            <CardBody>
              <CardTitle tag="h4">{item.word}</CardTitle>
              <CardText>{item.meaning}</CardText>
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
        'list-view': activeView === 'list'
      })}
    >
      {renderItems()}
    </div>
  )
}

export default ItemCards
