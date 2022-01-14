import { Fragment, useEffect, useState, useContext } from 'react'
import { Card, CardBody, CardText, CardTitle, Button, Row, Col, Progress } from 'reactstrap'
import Chart from 'react-apexcharts'
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
  const { favorites } = useContext(UserContextFirebase)

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
      const options = {
          chart: {
            sparkline: {
              enabled: true
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1
            }
          },
          colors: ['#51e5a8'],
          plotOptions: {
            radialBar: {
              offsetY: 10,
              startAngle: -150,
              endAngle: 150,
              hollow: {
                size: '77%'
              },
              track: {
                background: '#ebe9f1',
                strokeWidth: '50%'
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  color: '#5e5873',
                  fontFamily: 'Montserrat',
                  fontSize: '2.86rem',
                  fontWeight: '600'
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['lightgreen'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          grid: {
            padding: {
              bottom: 30
            }
          }
        },
        /* eslint-disable */
        series = [(collection.items.filter((item) => favorites.includes(item)).length / collection.items.length) * 100]
      return (
        <Card key={collection.id} onClick={() => handleCardClick(collection)} className="card-hover">
          <CardBody>
            <CardTitle>{collection.title}</CardTitle>
            <CardText>{collection.description}</CardText>
            <Chart options={options} series={series} type="radialBar" height={245} />
            <Progress
              value={
                (collection.items.filter((item) => favorites.includes(item)).length / collection.items.length) * 100
              }
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
        <p>[{store.collections.length}]</p>
        <Button.Ripple color="primary" onClick={handleAddNew}>
          Add Collection
        </Button.Ripple>
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
