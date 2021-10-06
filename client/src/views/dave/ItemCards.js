// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, Heart } from 'react-feather'
import { Card, CardBody, CardText, CardTitle, Button, Badge } from 'reactstrap'

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
            <CardBody>
              <CardTitle tag="h4">{item.title}</CardTitle>
              <CardText>{item.description}</CardText>
              <CardText>{item.details}</CardText>
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
