// ** React Imports
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, CardText, Alert } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getCollections } from './store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const Collection = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.collections)

  //** on mount
  useEffect(() => {
    dispatch(getCollections())
  }, [])

  // ** Renders wishlist products
  const renderCollections = () => {
    return store.collections.map((collection) => {
      const CartBtnTag = collection.isInCart ? Link : 'button'
      return (
        <Card className="ecommerce-card" key={collection.name}>
          <div className="item-img text-center mx-auto">
            <Link to={`/apps/ecommerce/product-detail/${collection.slug}`}>
              <img
                className="img-fluid"
                src={collection.image}
                alt={collection.name}
              />
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
                <h6 className="item-price">$ {collection.price}</h6>
              </div>
            </div>
            <div className="item-name">
              <Link to={`/apps/ecommerce/product/${collection.slug}`}>
                {collection.name}
              </Link>
            </div>
            <CardText className="item-description">
              {collection.description}
            </CardText>
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
        // TODO - display Loading or Empty
        <Fragment>Loading...</Fragment>
      )}
    </Fragment>
  )
}

export default Collection
