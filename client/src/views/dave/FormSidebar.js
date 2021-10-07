// ** React Imports
import { useState, Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { X, Star, Trash } from 'react-feather'
import CreatableSelect from 'react-select/creatable'
import {
  Modal,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Media
} from 'reactstrap'

// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'

// ** Function to capitalize the first letter of string
// const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// ** Modal Header
const ModalHeader = (props) => {
  // ** Props
  const {
    children,
    // store,
    handleFormSidebar
    // setDeleted,
    // deleted,
    // important,
    // setImportant,
    // deleteItem,
    // dispatch
  } = props

  return (
    <div className="modal-header d-flex align-items-center justify-content-between mb-1">
      <h5 className="modal-title">{children}</h5>
      <div className="todo-item-action d-flex align-items-center">
        {/* <span className="todo-item-favorite cursor-pointer mx-75">
          <Star
            size={16}
            onClick={() => setImportant(!important)}
            className={classnames({
              'text-warning': important === true
            })}
          />
        </span> */}
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
    [tags, setTags] = useState([])
  // [completed, setCompleted] = useState(false),
  // [important, setImportant] = useState(false),
  // [deleted, setDeleted] = useState(false),

  // ** Tag Select Options
  const tagOptions = [
    { value: 'aaa', label: 'aaa' },
    { value: 'bbb', label: 'bbb' },
    { value: 'ccc', label: 'ccc' },
    { value: 'ddd', label: 'ddd' },
    { value: 'eee', label: 'eee' },
    { value: 'fff', label: 'fff' },
    { value: 'ggg', label: 'ggg' },
    { value: 'hhh', label: 'hhh' },
    { value: 'iii', label: 'iiii' },
    { value: 'j', label: 'JJJJJ' },
    { value: 'k', label: 'kkkkkk' },
    { value: 'l', label: 'LLLLLLL' }
  ]

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
  }

  // ** Function to run when sidebar closes
  const handleSidebarClosed = () => {
    setTitle('')
    setDescription('')
    setDetails('')
    setTags([])
    // setCompleted(false)
    // setImportant(false)
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
    // setCompleted(store.selectedItem.isCompleted)
    // setImportant(store.selectedItem.isImportant)
    // setDeleted(store.selectedItem.isDeleted)
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
      // isCompleted: completed,
      // isDeleted: deleted,
      // isImportant: important,
    }
    if (store && !isObjEmpty(store.selectedItem)) {
      return (
        <Fragment>
          <Button.Ripple
            color="primary"
            disabled={!title.length} // TODO (form validation)
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
              {/* <Trash className="mr-1" size={16} /> */}
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
            disabled={!title.length} // TODO (form validation)
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
          // deleted={deleted}
          // important={important}
          // setDeleted={setDeleted}
          // setImportant={setImportant}
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

          <FormGroup className="my-1">{renderFooterButtons()}</FormGroup>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default FormSidebar
