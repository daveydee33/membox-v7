import ItemsHeader from './ItemsHeader'
import ItemsSearchbar from './ItemsSearchbar'
import ItemCards from './ItemCards'
import classnames from 'classnames'

const ItemsList = (props) => {
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
    userDataRedux
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
          setFiltersOpen={setFiltersOpen}
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
            getItems={getItems}
            userDataRedux={userDataRedux}
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
