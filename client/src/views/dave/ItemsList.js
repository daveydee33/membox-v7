// ** React Imports
import { useState } from 'react'

// import ItemCards from './ItemCards'
import ItemsHeader from './ItemsHeader'
import ItemsSearchbar from './ItemsSearchbar'
import ItemCards from './ItemCards'

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
          <ItemCards items={store.items} activeView={activeView} />
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
