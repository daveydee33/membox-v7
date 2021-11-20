import { Fragment, useEffect, useState } from 'react'

// Page Components
import ItemsList from './ItemsList'
import Sidebar from './Sidebar'
import FormSidebar from './FormSidebar'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import {
  getItems,
  updateSingleItem,
  selectItem,
  addItem,
  deleteItem,
  addToFavorites,
  removeFromFavorites
} from '../../redux/actions/items'
import { getUserData } from '../../redux/actions/auth'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const ItemsPage = () => {
  // States
  const [activeView, setActiveView] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [openFormSidebar, setOpenFormSidebar] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.items)
  const userDataRedux = useSelector((state) => state.auth.userData)

  // ** Function to handle Left sidebar & Form sidebar
  const handleFormSidebar = () => setOpenFormSidebar(!openFormSidebar)

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
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        selectItem={selectItem}
        handleFormSidebar={handleFormSidebar}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        getUserData={getUserData}
        userDataRedux={userDataRedux}
        //
      ></ItemsList>

      <Sidebar sidebarOpen={sidebarOpen} handleFormSidebar={handleFormSidebar} />

      <FormSidebar
        store={store}
        // params={params}
        addItem={addItem}
        dispatch={dispatch}
        open={openFormSidebar}
        updateSingleItem={updateSingleItem}
        deleteItem={deleteItem}
        selectItem={selectItem}
        handleFormSidebar={handleFormSidebar}
      />
    </Fragment>
  )
}

export default ItemsPage