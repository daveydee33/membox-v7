import { Fragment, useEffect, useState, useContext } from 'react'
import { Card, CardBody, CardText, CardTitle, Button, Progress } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCollections,
  addCollection,
  updateSingleCollection,
  deleteCollection
} from '../../redux/actions/collections'
import FormPanel from './FormPanel'
import { UserContextFirebase } from '../../utility/context/UserContextFirebase'

const Collection = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.collections)
  const [selectedCollection, setSelectedCollection] = useState({})
  const [openFormPanel, setOpenFormPanel] = useState(false)
  const { progress, role } = useContext(UserContextFirebase)

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
            <Progress
              value={(collection.items.filter((item) => progress[item] > 0).length / collection.items.length) * 100}
            />
            <CardText>{/* <i>{collection.items.join(', ')}</i> */}</CardText>
          </CardBody>
        </Card>
      )
    })
  }

  const handleAddNew = () => {
    setSelectedCollection({})
    handleFormPanel()
  }

  return (
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
        <h1>Collections</h1>
        {role === 'admin' && (
          <Button.Ripple color="flat-primary" onClick={handleAddNew}>
            Add Collection
          </Button.Ripple>
        )}
        <p>[{store.collections.length}]</p>
      </div>

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
