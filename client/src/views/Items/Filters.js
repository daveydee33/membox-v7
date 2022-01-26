// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import classnames from 'classnames'
import { Card, CardBody, Row, Col, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/noui-slider/noui-slider.scss'

const Filters = (props) => {
  // ** Props
  const { filtersOpen, filters, setFilters } = props

  // ** Hooks
  const [isRtl, setIsRtl] = useRTL()

  function handleChange(e) {
    filters[e.target.id] = e.target.checked
    setFilters({ ...filters })
  }

  function resetFilters() {
    setFilters({
      favorites: false,
      learning: false,
      complete: false
    })
  }

  return (
    <div className="sidebar-detached sidebar-left">
      <div className="sidebar">
        <div
          className={classnames('sidebar-shop', {
            show: filtersOpen
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
                <h6 className="filter-title mt-0">Show Only</h6>
                <ul className="list-unstyled brand-list">
                  <li>
                    <CustomInput
                      id="favorites"
                      type="checkbox"
                      label="Favorites"
                      checked={filters.favorites}
                      onChange={(e) => handleChange(e)}
                    />
                  </li>
                  <li>
                    <CustomInput
                      id="learning"
                      type="checkbox"
                      label="Still Learning"
                      checked={filters.learning}
                      onChange={(e) => handleChange(e)}
                    />
                  </li>
                  <li>
                    <CustomInput
                      id="complete"
                      type="checkbox"
                      label="Completed"
                      checked={filters.complete}
                      onChange={(e) => handleChange(e)}
                    />
                  </li>
                </ul>
              </div>

              {/* Clear button */}
              <div id="clear-filters">
                <Button.Ripple color="primary" block onClick={resetFilters}>
                  Reset Filters
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Filters
