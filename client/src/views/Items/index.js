import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems, updateSingleItem, selectItem, addItem, deleteItem } from '../../redux/actions/items'
import { getUserData } from '../../redux/actions/auth'
import ItemsList from './ItemsList'
import Filters from './Filters'
import FormPanel from './FormPanel'
import '@styles/base/pages/app-ecommerce.scss'

const ItemsPage = () => {
  // States
  const [activeView, setActiveView] = useState('grid')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [openFormPanel, setOpenFormPanel] = useState(false)
  const [filters, setFilters] = useState({
    favorites: false,
    learning: false,
    complete: false
  })

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.items)
  const userDataRedux = useSelector((state) => state.auth.userData)

  const handleFormPanel = () => setOpenFormPanel(!openFormPanel)

  // ** Get items on mount & based on dependency change
  useEffect(() => {
    dispatch(getItems({ limit: 99 }))
    dispatch(getUserData())
  }, [dispatch])

  return (
    <Fragment>
      {/* 
      <Breadcrumbs
        breadCrumbTitle="Word List"
        breadCrumbParent="Search & Browse"
        breadCrumbActive="All"
      /> 
      */}

      <ItemsList
        dispatch={dispatch}
        store={store}
        getItems={getItems}
        activeView={activeView}
        setActiveView={setActiveView}
        filtersOpen={filtersOpen}
        setFiltersOpen={setFiltersOpen}
        selectItem={selectItem}
        handleFormPanel={handleFormPanel}
        getUserData={getUserData}
        userDataRedux={userDataRedux}
        filters={filters}
      ></ItemsList>

      <Filters filtersOpen={filtersOpen} filters={filters} setFilters={setFilters} />

      <FormPanel
        store={store}
        // params={params}
        addItem={addItem}
        dispatch={dispatch}
        open={openFormPanel}
        updateSingleItem={updateSingleItem}
        deleteItem={deleteItem}
        selectItem={selectItem}
        handleFormPanel={handleFormPanel}
      />
    </Fragment>
  )
}

export default ItemsPage
