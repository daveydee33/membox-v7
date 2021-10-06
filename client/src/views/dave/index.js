import { Fragment, useEffect, useState } from 'react'

// Page Components
import ItemsList from './ItemsList'
import Sidebar from './Sidebar'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from './store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const ItemsPage = () => {
  // States
  const [activeView, setActiveView] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.items)

  // ** Get items
  useEffect(() => {
    dispatch(
      getItems({
        limit: 9999
      })
    )
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
        //
      ></ItemsList>

      <Sidebar sidebarOpen={sidebarOpen} />
    </Fragment>
  )
}

export default ItemsPage
