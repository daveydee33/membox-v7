// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import classnames from 'classnames'
import { Card, CardBody, Row, Col, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/noui-slider/noui-slider.scss'

const Sidebar = (props) => {
  // ** Props
  const { sidebarOpen, handleFormSidebar } = props

  // ** Hooks
  const [isRtl, setIsRtl] = useRTL()

  // ** Array of categories
  const categories = [
    {
      id: 'review',
      title: 'To Review',
      checked: true
    },
    {
      id: 'favorites',
      title: 'My Favorites',
      checked: true
    },
    {
      id: 'question',
      title: 'Has Question',
      checked: true
    },
    {
      id: 'everything',
      title: 'Everything Else',
      checked: true
    }
  ]

  // ** Array of brands
  const brands = [
    {
      title: 'Insignia™',
      total: 746
    },
    {
      title: 'Samsung',
      total: 633,
      checked: true
    },
    {
      title: 'Metra',
      total: 591
    },
    {
      title: 'HP',
      total: 530
    },
    {
      title: 'Apple',
      total: 422,
      checked: true
    },
    {
      title: 'GE',
      total: 394
    },
    {
      title: 'Sony',
      total: 350
    },
    {
      title: 'Incipio',
      total: 320
    },
    {
      title: 'KitchenAid',
      total: 318
    },
    {
      title: 'Whirlpool',
      total: 298
    }
  ]

  // ** Array of ratings
  const ratings = [
    {
      ratings: 4,
      total: 160
    },
    {
      ratings: 3,
      total: 176
    },
    {
      ratings: 2,
      total: 291
    },
    {
      ratings: 1,
      total: 190
    }
  ]

  return (
    <div className="sidebar-detached sidebar-left">
      <div className="sidebar">
        <div
          className={classnames('sidebar-shop', {
            show: sidebarOpen
          })}
        >
          <Row>
            <Col sm="12">
              <h6 className="filter-heading d-none d-lg-block">Filters</h6>
            </Col>
          </Row>
          <Card>
            <CardBody>
              {/* Categories */}
              <div className="categories">
                <h6 className="filter-title mt-0">Categories</h6>
                <ul className="list-unstyled brand-list">
                  {categories.map((category) => {
                    return (
                      <li key={category.title}>
                        <CustomInput
                          type="checkbox"
                          id={category.title}
                          label={category.title}
                          defaultChecked={category.checked}
                        />
                        <span>{category.total}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Brands */}
              {/* <div className="brands">
                <h6 className="filter-title">Brands</h6>
                <ul className="list-unstyled brand-list">
                  {brands.map((brand) => {
                    return (
                      <li key={brand.title}>
                        <CustomInput
                          type="checkbox"
                          id={brand.title}
                          label={brand.title}
                          defaultChecked={brand.checked}
                        />
                        <span>{brand.total}</span>
                      </li>
                    )
                  })}
                </ul>
              </div> */}

              {/* Clear button */}
              <div id="clear-filters">
                <Button.Ripple color="primary" block>
                  Clear All Filters
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
          <Button.Ripple color="primary" onClick={handleFormSidebar} block>
            Add Item
          </Button.Ripple>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
