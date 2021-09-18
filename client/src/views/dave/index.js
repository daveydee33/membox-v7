import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from './store/actions'

const ItemsPage = () => {
  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.items)

  // ** Get items
  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  return (
    <Fragment>
      <div>blah</div>
      {store.items.map((item) => (
        <div>
          <h2>{item.word}</h2>
          <h4>{item.meaning}</h4>
        </div>
      ))}
    </Fragment>
  )
}

export default ItemsPage
