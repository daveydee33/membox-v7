import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from './store/actions'

// Page Components
import Items from './Items'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const ItemsPage = () => {
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
      <Items
        dispatch={dispatch}
        store={store}
        getItems={getItems}
        //
      ></Items>
    </Fragment>
  )
}

export default ItemsPage
