import { Fragment, useEffect } from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCollections } from '../../redux/actions/collections'
import FormPanel from './FormPanel'
import '@styles/base/pages/app-ecommerce.scss'

const Collection = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.collections)

  useEffect(() => {
    dispatch(getCollections({ limit: 999 }))
  }, [])

  const renderCollections = () => {
    return store.collections.map((collection) => {
      return (
        <Card key={collection.id}>
          <CardBody>
            <CardTitle>{collection.title}</CardTitle>
            <CardText>{collection.description}</CardText>
            <CardText>{collection.id}</CardText>
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
        // TODO: display Loading or Empty
        <Fragment>Loading...</Fragment>
      )}

      {/* <FormPanel
        store={store}
        // params={params}
        // addItem={addItem}
        dispatch={dispatch}
        // open={openFormPanel}
        // updateSingleItem={updateSingleItem}
        // deleteItem={deleteItem}
        // selectItem={selectItem}
        // handleFormPanel={handleFormPanel}
      /> */}
    </Fragment>
  )
}

export default Collection
