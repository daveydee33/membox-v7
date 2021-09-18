// ** React Imports
import { useState } from 'react'
import {
  CardColumns,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap'

// import ItemCards from './ItemCards'
import ItemsHeader from './ItemsHeader'
import ItemsSearchbar from './ItemsSearchbar'

import classnames from 'classnames'

const ItemsList = (props) => {
  // ** Props
  const {
    store,
    getItems,
    dispatch,
    activeView,
    setActiveView,
    sidebarOpen,
    setSidebarOpen
  } = props

  return (
    <div className="content-detached content-right">
      <div className="content-body">
        {/* Header - view grid toggle */}
        <ItemsHeader
          store={store}
          dispatch={dispatch}
          getItems={getItems}
          activeView={activeView}
          setActiveView={setActiveView}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Hamburger menu on small screens */}
        <div
          className={classnames('body-content-overlay', {
            show: sidebarOpen
          })}
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Searchbar */}
        <ItemsSearchbar
          dispatch={dispatch}
          getItems={getItems}
          store={store}
          //
        />

        {/* Items List */}
        {store.items.length ? (
          store.items.map((item) => (
            <Card>
              <CardBody>
                <CardTitle tag="h4">{item.word}</CardTitle>
                <CardText>{item.meaning}</CardText>
              </CardBody>
            </Card>
          ))
        ) : (
          <div className="d-flex justify-content-center mt-2">
            <p>No Results</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemsList
