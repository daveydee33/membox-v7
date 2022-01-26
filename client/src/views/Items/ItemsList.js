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
    filtersOpen,
    setFiltersOpen,
    selectItem,
    handleFormPanel,
    getUserData,
    userDataRedux,
    filters
  } = props

  console.log('store', store)

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
          setFiltersOpen={setFiltersOpen}
          handleFormPanel={handleFormPanel}
        />

        {/* Hamburger menu on small screens */}
        <div
          className={classnames('body-content-overlay', {
            show: filtersOpen
          })}
          onClick={() => setFiltersOpen(false)}
        ></div>

        {/* Searchbar */}
        <ItemsSearchbar
          dispatch={dispatch}
          getItems={getItems}
          store={store}
          //
        />

        {/* Item Cards */}
        {store.items.length ? (
          <ItemCards
            items={store.items}
            activeView={activeView}
            selectItem={selectItem}
            dispatch={dispatch}
            handleFormPanel={handleFormPanel}
            getUserData={getUserData}
            getItems={getItems}
            userDataRedux={userDataRedux}
            filters={filters}
          />
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
