import { Search } from 'react-feather'
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText
} from 'reactstrap'

const ItemsSearchbar = (props) => {
  const { dispatch, getItems, store } = props

  return (
    <div id="ecommerce-searchbar" className="ecommerce-searchbar">
      <Row className="mt-1">
        <Col sm="12">
          <InputGroup className="input-group-merge">
            <Input
              className="search-product"
              placeholder="Search"
              onChange={(e) => dispatch(getItems({ ...store.params, q: e.target.value }))}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <Search className="text-muted" size={14} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ItemsSearchbar
