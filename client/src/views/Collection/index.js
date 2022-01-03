import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCollections,
  addCollection,
  updateSingleCollection,
  deleteCollection
} from '../../redux/actions/collections'
import FormPanel from './FormPanel'

const Collection = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.collections)
  const [selectedCollection, setSelectedCollection] = useState({})
  const [openFormPanel, setOpenFormPanel] = useState(false)

  useEffect(() => {
    dispatch(getCollections({ limit: 999 }))
  }, [])

  const handleFormPanel = () => setOpenFormPanel(!openFormPanel)

  function handleCardClick(collection) {
    setSelectedCollection(collection)
    handleFormPanel()
  }

  const renderCollections = () => {
    return store.collections.map((collection) => {
      return (
        <Card key={collection.id} onClick={() => handleCardClick(collection)} className="card-hover">
          <CardBody>
            <CardTitle>{collection.title}</CardTitle>
            <CardText>{collection.description}</CardText>
            {/* <CardText>{collection.item_titles.join(', ')}</CardText> */}
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

      <FormPanel
        store={store}
        // params={params}
        dispatch={dispatch}
        open={openFormPanel}
        addCollection={addCollection}
        updateSingleCollection={updateSingleCollection}
        deleteCollection={deleteCollection}
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
        handleFormPanel={handleFormPanel}
      />
    </Fragment>
  )
}

export default Collection
