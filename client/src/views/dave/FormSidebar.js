// ** React Imports
import { useState, Fragment } from 'react'

// ** Third Party Components
import { X, Plus, Trash } from 'react-feather'
import CreatableSelect from 'react-select/creatable'
import Repeater from '@components/repeater'
import {
  Modal,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'

// ** Modal Header
const ModalHeader = (props) => {
  // ** Props
  const { children, handleFormSidebar } = props

  return (
    <div className="modal-header d-flex align-items-center justify-content-between mb-1">
      <h5 className="modal-title">{children}</h5>
      <div className="todo-item-action d-flex align-items-center">
        <X
          className="font-weight-normal mt-25"
          size={16}
          onClick={handleFormSidebar}
        />
      </div>
    </div>
  )
}

const FormSidebar = (props) => {
  // ** Props
  const {
    open,
    handleFormSidebar,
    store,
    dispatch,
    updateSingleItem,
    selectItem,
    addItem,
    deleteItem
  } = props

  // ** Item data
  const [title, setTitle] = useState(''),
    [description, setDescription] = useState(''),
    [details, setDetails] = useState(''),
    [tags, setTags] = useState([]),
    [tagOptions, setTagOptions] = useState([])

  const [repeaterCount, setRepeaterCount] = useState(1)

  const increaseRepeaterCount = () => {
    setRepeaterCount(repeaterCount + 1)
  }

  const deleteRepeaterForm = (e) => {
    e.preventDefault()
    e.target.closest('.repeater-form').remove()
  }

  const getTagOptions = () => {
    const tagOptions = store.tags.map((tag) => ({ value: tag, label: tag }))
    return tagOptions
  }

  // ** Returns sidebar title
  const handleSidebarTitle = () => {
    if (store && !isObjEmpty(store.selectedItem)) {
      return 'Edit Item'
    } else {
      return 'Add New Item'
    }
  }

  // ** Function to run when sidebar opens
  const handleSidebarOpened = () => {
    const { selectedItem } = store
    if (!isObjEmpty(selectedItem)) {
      setTitle(selectedItem.title)
      setDescription(selectedItem.description)
      setDetails(selectedItem.details)
      if (selectedItem.tags && selectedItem.tags.length) {
        const tags = []
        selectedItem.tags.map((tag) => {
          tags.push({ value: tag, label: tag })
        })
        setTags(tags)
      }
    }
    setTagOptions(getTagOptions())
  }

  // ** Function to run when sidebar closes
  const handleSidebarClosed = () => {
    setTitle('')
    setDescription('')
    setDetails('')
    setTags([])
    dispatch(selectItem({}))
  }

  // ** Function to reset fileds
  const handleResetFields = () => {
    setTitle(store.selectedItem.title)
    setDescription(store.selectedItem.description)
    setDetails(store.selectedItem.details)
    if (store.selectedItem.tags.length) {
      const tags = []
      store.selectedItem.tags.map((tag) => {
        tags.push({ value: tag, label: tag })
      })
      setTags(tags)
    }
  }

  // ** Renders Footer Buttons
  const renderFooterButtons = () => {
    const newItemTag = []
    if (tags.length) {
      tags.map((tag) => newItemTag.push(tag.value))
    }
    const state = {
      title,
      description,
      details,
      tags: newItemTag
    }
    if (store && !isObjEmpty(store.selectedItem)) {
      return (
        <Fragment>
          <Button.Ripple
            color="primary"
            disabled={!title.length}
            className="update-btn update-todo-item mr-1"
            onClick={() => {
              dispatch(updateSingleItem(store.selectedItem.id, state))
              handleFormSidebar()
            }}
          >
            Update
          </Button.Ripple>
          <Button.Ripple color="secondary" onClick={handleResetFields} outline>
            Reset
          </Button.Ripple>

          {store && !isObjEmpty(store.selectedItem) ? (
            <Button.Ripple
              color="danger"
              className="ml-1"
              onClick={() => {
                dispatch(deleteItem(store.selectedItem.id))
                handleFormSidebar()
              }}
              outline
            >
              Delete
            </Button.Ripple>
          ) : null}
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button
            color="primary"
            disabled={!title.length}
            className="add-todo-item mr-1"
            onClick={() => {
              dispatch(addItem(state))
              handleFormSidebar()
            }}
          >
            Add
          </Button>
          <Button color="secondary" onClick={handleFormSidebar} outline>
            Cancel
          </Button>
        </Fragment>
      )
    }
  }

  return (
    <Modal
      isOpen={open}
      toggle={handleFormSidebar}
      className="sidebar-lg"
      contentClassName="p-0"
      onOpened={handleSidebarOpened}
      onClosed={handleSidebarClosed}
      modalClassName="modal-slide-in sidebar-todo-modal"
    >
      <Form
        id="form-modal-todo"
        className="todo-modal"
        onSubmit={(e) => e.preventDefault()}
      >
        <ModalHeader
          store={store}
          dispatch={dispatch}
          handleFormSidebar={handleFormSidebar}
        >
          {handleSidebarTitle()}
        </ModalHeader>
        <ModalBody className="flex-grow-1 pb-sm-0 pb-3">
          <FormGroup>
            <Label for="title" className="form-label">
              Title <span className="text-danger">*</span>
            </Label>
            <Input
              id="title"
              value={title}
              placeholder="Title"
              className="new-todo-item-title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="description" className="form-label">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="details" className="form-label">
              Details
            </Label>
            <Input
              id="details"
              value={details}
              placeholder="Details"
              type="textarea"
              rows={6}
              onChange={(e) => setDetails(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="tags" className="form-label">
              Tags
            </Label>
            <CreatableSelect
              isMulti
              value={tags}
              id="tags"
              isClearable={false}
              options={tagOptions}
              className="react-select"
              classNamePrefix="select"
              theme={selectThemeColors}
              onChange={(data, actionMeta) => {
                setTags(data !== null ? [...data] : [])
              }}
            />
          </FormGroup>

          {/* Examples */}
          <h6 className="mt-3">Examples</h6>
          <Repeater count={repeaterCount}>
            {(i) => (
              <div className="repeater-form" key={i}>
                <FormGroup>
                  <Label for="example" className="form-label">
                    Example
                  </Label>
                  <Input
                    id="example"
                    placeholder="Example"
                    value={''}
                    onChange={() => {}}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="meaning" className="form-label">
                    Meaning
                  </Label>
                  <Input
                    id="meaning"
                    placeholder="Meaning"
                    value={''}
                    onChange={() => {}}
                  />
                </FormGroup>

                <Button.Ripple
                  color="flat-danger"
                  className="btn-icon rounded-circle"
                  onClick={deleteRepeaterForm}
                >
                  <Trash size={14} />
                </Button.Ripple>
                <hr />
              </div>
            )}
          </Repeater>
          <Button.Ripple
            className="btn-icon"
            color="bg-gradient-info"
            onClick={increaseRepeaterCount}
          >
            <Plus size={14} />
            <span className="align-middle ml-25">More</span>
          </Button.Ripple>
          <FormGroup className="my-1">{renderFooterButtons()}</FormGroup>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default FormSidebar
