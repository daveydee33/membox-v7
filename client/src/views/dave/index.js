import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from './store/actions'

// Page Components
import Items from './Items'
import Sidebar from './Sidebar'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const ItemsPage = () => {
  // States
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.items)

  // ** Get items
  useEffect(() => {
    dispatch(
      getItems({
        q: ''
      })
    )
  }, [dispatch])

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Word List"
        breadCrumbParent="Search & Browse"
        breadCrumbActive="All"
      />

      <Items
        dispatch={dispatch}
        store={store}
        getItems={getItems}
        //
      ></Items>

      <Sidebar sidebarOpen={sidebarOpen} />
    </Fragment>
  )
}

export default ItemsPage
