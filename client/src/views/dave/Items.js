// ** React Imports
import { Fragment } from 'react'
import {
  CardColumns,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap'

import ItemsSearchbar from './ItemsSearchbar'

const ItemsPage = (props) => {
  // ** Props
  const { store, getItems, dispatch } = props

  return (
    <div className="content-detached content-right">
      <div className="content-body">
        {/* Searchbar */}
        <ItemsSearchbar
          dispatch={dispatch}
          getItems={getItems}
          store={store}
          //
        />

        {/* Items List */}
        {store.items.length ? (
          store.items.map((item) => (
            <Card>
              <CardBody>
                <CardTitle tag="h4">{item.word}</CardTitle>
                <CardText>{item.meaning}</CardText>
              </CardBody>
            </Card>
          ))
        ) : (
          <div className="d-flex justify-content-center mt-2">
            <p>No Results</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemsPage
