import { useContext } from 'react'
import { UserContextFirebase } from '../../utility/context/UserContextFirebase'
import classnames from 'classnames'
import { Menu, Grid, List, Columns } from 'react-feather'
import {
  Row,
  Col,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Button,
  ButtonGroup
} from 'reactstrap'

const ItemsHeader = props => {
  // ** Props
  const { activeView, setActiveView, dispatch, getItems, store, setSidebarOpen, handleFormPanel } = props
  const { role } = useContext(UserContextFirebase)

  // ** Sorting obj
  const sortToggleText = {
    'price-desc': 'Highest',
    'price-asc': 'Lowest',
    featured: 'Featured'
  }

  return (
    <div className='ecommerce-header'>
      <Row>
        <Col sm='12'>
          <div className='ecommerce-header-items'>
            <div className='result-toggler'>
              <button className='navbar-toggler shop-sidebar-toggler' onClick={() => setSidebarOpen(true)}>
                <span className='navbar-toggler-icon d-block d-lg-none'>
                  <Menu size={14} />
                </span>
              </button>
              <span className='search-results'>{store.totalItems} Results Found</span>
            </div>

            {role === 'admin' && (
              <Button.Ripple color='flat-primary' onClick={handleFormPanel}>
                Add Item
              </Button.Ripple>
            )}

            <div className='view-options d-flex'>
              <UncontrolledButtonDropdown className='dropdown-sort'>
                <DropdownToggle className='text-capitalize mr-1' color='primary' outline caret>
                  {sortToggleText[store.params.sortBy]}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    className='w-100'
                    onClick={() => dispatch(getItems({ ...store.params, sortBy: 'featured' }))}
                  >
                    Featured
                  </DropdownItem>
                  <DropdownItem
                    className='w-100'
                    onClick={() => dispatch(getItems({ ...store.params, sortBy: 'price-asc' }))}
                  >
                    Lowest
                  </DropdownItem>
                  <DropdownItem
                    className='w-100'
                    onClick={() => dispatch(getItems({ ...store.params, sortBy: 'price-desc' }))}
                  >
                    Highest
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
              <ButtonGroup className='btn-group-toggle'>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn grid-view-btn', {
                    active: activeView === 'grid'
                  })}
                  color='primary'
                  outline
                  onClick={() => setActiveView('grid')}
                >
                  <Grid size={18} />
                </Button>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn list-view-btn', {
                    active: activeView === 'list'
                  })}
                  color='primary'
                  outline
                  onClick={() => setActiveView('list')}
                >
                  <List size={18} />
                </Button>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn columns-view-btn', {
                    active: activeView === 'columns'
                  })}
                  color='primary'
                  outline
                  onClick={() => setActiveView('columns')}
                >
                  <Columns size={18} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ItemsHeader
