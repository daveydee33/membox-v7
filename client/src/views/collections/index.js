// ** React Imports
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getCollections } from '../../redux/actions/collections'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const Collections = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.collections)

  //** on mount
  useEffect(() => {
    dispatch(getCollections({ limit: 999 }))
  }, [])

  // ** Renders wishlist products
  const renderCollections = () => {
    return store.collections.map((collection) => {
      const CartBtnTag = collection.isInCart ? Link : 'button'
      return (
        <Card className="ecommerce-card" key={collection.title}>
          <div className="item-img text-center mx-auto">
            {/* <Link to={`/apps/ecommerce/product-detail/${collection.slug}`}>
              <img
                className="img-fluid"
                src={collection.image}
                alt={collection.name}
              />
            </Link> */}
          </div>
          <CardBody>
            <CardTitle>{collection.title}</CardTitle>
            <CardText>{collection.description}</CardText>
          </CardBody>
        </Card>
      )
    })
  }

  return (
    <Fragment>
      {store.collections.length ? (
        <section className="grid-view wishlist-items">{renderCollections()}</section>
      ) : (
        // TODO - display Loading or Empty
        <Fragment>Loading...</Fragment>
      )}
    </Fragment>
  )
}

export default Collections
