// ** React Imports
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Alert } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getCollections } from '../store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const Collection = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.ecommerce)

  //** on mount
  useEffect(() => {
    dispatch(getCollections())
  }, [])

  // ** Renders wishlist products
  const renderCollections = () => {
    return store.wishlist.map((item) => {
      const CartBtnTag = item.isInCart ? Link : 'button'
      return (
        <Card className="ecommerce-card" key={item.name}>
          <div className="item-img text-center mx-auto">
            <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>
              <img className="img-fluid" src={item.image} alt={item.name} />
            </Link>
          </div>
          <CardBody>
            <div className="item-wrapper">
              <div className="item-rating">
                <ul className="unstyled-list list-inline">
                  {new Array(5).fill().map((listItem, index) => {
                    return (
                      <li key={index} className="ratings-list-item mr-25"></li>
                    )
                  })}
                </ul>
              </div>
              <div className="item-cost">
                <h6 className="item-price">$ {item.price}</h6>
              </div>
            </div>
            <div className="item-name">
              <Link to={`/apps/ecommerce/product/${item.slug}`}>
                {item.name}
              </Link>
            </div>
            <CardText className="item-description">{item.description}</CardText>
          </CardBody>
          <div className="item-options text-center">
            {/* Buttons go here */}
          </div>
        </Card>
      )
    })
  }

  return (
    <Fragment>
      {store.collections.length ? (
        <section className="grid-view wishlist-items">
          {renderCollections()}
        </section>
      ) : (
        <Alert color="info">
          <div className="alert-body">
            <Info size={14} />
            <span className="align-middle ml-50">Your Wishlist is empty</span>
          </div>
        </Alert>
      )}
    </Fragment>
  )
}

export default Collection
