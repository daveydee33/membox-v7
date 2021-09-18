import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from './store/actions'
import {
  CardColumns,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap'

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
      <div>blah</div>

      {store.items.map((item) => (
        <Card>
          <CardBody>
            <CardTitle tag="h4">{item.word}</CardTitle>
            <CardText>{item.meaning}</CardText>
          </CardBody>
        </Card>
      ))}
    </Fragment>
  )
}

export default ItemsPage
