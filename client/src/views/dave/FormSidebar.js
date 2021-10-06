// ** React Imports
import { useState, Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { X, Star, Trash } from 'react-feather'
import Select, { components } from 'react-select'
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

// ** Assignee Avatars
// import img1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
// import img2 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
// import img3 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
// import img4 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
// import img5 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
// import img6 from '@src/assets/images/portrait/small/avatar-s-11.jpg'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'

// ** Function to capitalize the first letter of string
// const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// ** Modal Header
const ModalHeader = (props) => {
  // ** Props
  const {
    children,
    store,
    handleFormSidebar,
    setDeleted,
    // deleted,
    important,
    setImportant,
    deleteItem,
    dispatch
  } = props

  // ** Function to delete item
  const handleDeleteItem = () => {
    // setDeleted(!deleted)
    // dispatch(deleteItem(store.selectedItem.id))
    // handleFormSidebar()
  }

  return (
    <div className="modal-header d-flex align-items-center justify-content-between mb-1">
      <h5 className="modal-title">{children}</h5>
      <div className="todo-item-action d-flex align-items-center">
        {store && !isObjEmpty(store.selectedItem) ? (
          <Trash
            className="cursor-pointer mt-25"
            size={16}
            onClick={() => handleDeleteItem()}
          />
        ) : null}

        <span className="todo-item-favorite cursor-pointer mx-75">
          <Star
            size={16}
            onClick={() => setImportant(!important)}
            className={classnames({
              'text-warning': important === true
            })}
          />
        </span>
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
    updateItem,
    selectItem,
    addItem,
    deleteItem
  } = props

  // ** Item data
  const [title, setTitle] = useState(''),
    [description, setDescription] = useState(''),
    [details, setDetails] = useState('')
  // [assignee, setAssignee] = useState({
  //   value: 'pheobe',
  //   label: 'Pheobe Buffay'
  // }),
  // [tags, setTags] = useState([]),
  // [completed, setCompleted] = useState(false),
  // [important, setImportant] = useState(false),
  // [deleted, setDeleted] = useState(false),

  // ** Assignee Select Options
  // const assigneeOptions = [
  //   { value: 'pheobe', label: 'Pheobe Buffay' },
  //   { value: 'chandler', label: 'Chandler Bing' },
  //   { value: 'ross', label: 'Ross Geller' },
  //   { value: 'monica', label: 'Monica Geller' },
  //   { value: 'joey', label: 'Joey Tribbiani' },
  //   { value: 'Rachel', label: 'Rachel Green' }
  // ]

  // ** Tag Select Options
  // const tagOptions = [
  //   { value: 'team', label: 'Team' },
  //   { value: 'low', label: 'Low' },
  //   { value: 'medium', label: 'Medium' },
  //   { value: 'high', label: 'High' },
  //   { value: 'update', label: 'Update' }
  // ]

  // ** Custom Assignee Component
  // const AssigneeComponent = ({ data, ...props }) => {
  //   return (
  //     <components.Option {...props}>
  //       <Media className="align-items-center">
  //         <img
  //           className="d-block rounded-circle mr-50"
  //           src={data.img}
  //           height="26"
  //           width="26"
  //           alt={data.label}
  //         />
  //         <Media body>
  //           <p className="mb-0">{data.label}</p>
  //         </Media>
  //       </Media>
  //     </components.Option>
  //   )
  // }

  // ** Returns sidebar title
  const handleSidebarTitle = () => {
    if (store && !isObjEmpty(store.selectedItem)) {
      return 'Edit Item'
    } else {
      return 'Add Item'
    }
  }

  // ** Function to run when sidebar opens
  const handleSidebarOpened = () => {
    const { selectedItem } = store
    if (!isObjEmpty(selectedItem)) {
      setTitle(selectedItem.title)
      setDescription(selectedItem.description)
      setDetails(selectedItem.details)
      // setAssignee([
      //   {
      //     value: selectedItem.assignee.fullName,
      //     label: selectedItem.assignee.fullName,
      //     img: selectedItem.assignee.avatar
      //   }
      // ])
      // if (selectedItem.tags.length) {
      //   const tags = []
      //   selectedItem.tags.map((tag) => {
      //     tags.push({ value: tag, label: capitalize(tag) })
      //   })
      //   setTags(tags)
      // }
    }
  }

  // ** Function to run when sidebar closes
  const handleSidebarClosed = () => {
    setTitle('')
    setDescription('')
    setDetails('')
    // setTags([])
    // setAssignee({ value: 'pheobe', label: 'Pheobe Buffay' })
    // setCompleted(false)
    // setImportant(false)
    dispatch(selectItem({}))
  }

  // ** Function to reset fileds
  const handleResetFields = () => {
    setTitle(store.selectedItem.title)
    setDescription(store.selectedItem.description)
    setDetails(store.selectedItem.details)
    // setCompleted(store.selectedItem.isCompleted)
    // setImportant(store.selectedItem.isImportant)
    // setDeleted(store.selectedItem.isDeleted)
    // if (store.selectedItem.assignee.fullName !== assignee.label) {
    //   setAssignee({
    //     value: store.selectedItem.assignee.fullName,
    //     label: store.selectedItem.assignee.fullName,
    //     img: store.selectedItem.assignee.avatar
    //   })
    // }
    // if (store.selectedItem.tags.length) {
    //   const tags = []
    //   store.selectedItem.tags.map((tag) => {
    //     tags.push({ value: tag, label: capitalize(tag) })
    //   })
    //   setTags(tags)
    // }
  }

  // ** Renders Footer Buttons
  const renderFooterButtons = () => {
    // const newItemTag = []
    // const doesInclude =
    //   !isObjEmpty(store.selectedItem) &&
    //   assignee.label === store.selectedItem.assignee.fullName
    // if (tags.length) {
    //   tags.map((tag) => newItemTag.push(tag.value))
    // }
    // const newAssignee = {
    //   fullName: assignee.label,
    //   avatar: assignee.img
    // }
    // const state = {
    //   title,
    //   dueDate,
    //   tags: newItemTag,
    //   description: desc,
    //   isCompleted: completed,
    //   isDeleted: deleted,
    //   isImportant: important,
    //   assignee:
    //     doesInclude || assignee.label === undefined ? store.selectedItem.assignee : newAssignee
    // }
    // if (store && !isObjEmpty(store.selectedItem)) {
    //   return (
    //     <Fragment>
    //       <Button
    //         color="primary"
    //         disabled={!title.length}
    //         className="update-btn update-todo-item mr-1"
    //         onClick={() => {
    //           dispatch(updateItem({ ...state, id: store.selectedItem.id }))
    //           handleFormSidebar()
    //         }}
    //       >
    //         Update
    //       </Button>
    //       <Button color="secondary" onClick={handleResetFields} outline>
    //         Reset
    //       </Button>
    //     </Fragment>
    //   )
    // } else {
    //   return (
    //     <Fragment>
    //       <Button
    //         color="primary"
    //         disabled={!title.length}
    //         className="add-todo-item mr-1"
    //         onClick={() => {
    //           dispatch(addItem(state))
    //           handleFormSidebar()
    //         }}
    //       >
    //         Add
    //       </Button>
    //       <Button color="secondary" onClick={handleFormSidebar} outline>
    //         Cancel
    //       </Button>
    //     </Fragment>
    //   )
    // }
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
          // deleted={deleted}
          dispatch={dispatch}
          // important={important}
          // deleteItem={deleteItem}
          // setDeleted={setDeleted}
          // setImportant={setImportant}
          handleFormSidebar={handleFormSidebar}
        >
          {handleSidebarTitle()}
        </ModalHeader>
        <ModalBody className="flex-grow-1 pb-sm-0 pb-3">
          <FormGroup>
            <Label className="form-label" for="title">
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
          {/*
          <FormGroup>
            <Label className="form-label" for="assignee">
              Assignee
            </Label>
            <Select
              id="assignee"
              className="react-select"
              classNamePrefix="select"
              isClearable={false}
              options={assigneeOptions}
              theme={selectThemeColors}
              value={assignee}
              onChange={(data) => setAssignee(data)}
              components={{ Option: AssigneeComponent }}
            /> 
          </FormGroup>
          */}
          {/* 
          <FormGroup>
            <Label className="form-label" for="tags">
              Tags
            </Label>
            <Select
              isMulti
              value={tags}
              id="tags"
              isClearable={false}
              options={tagOptions}
              className="react-select"
              classNamePrefix="select"
              theme={selectThemeColors}
              onChange={(data) => {
                setTags(data !== null ? [...data] : [])
              }}
            />
          </FormGroup> 
          */}
          <FormGroup>
            <Label for="desc" className="form-label">
              Description
            </Label>
            <Input id="desc" value={description} placeholder="Description" />
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
            />
          </FormGroup>

          <FormGroup className="my-1">{renderFooterButtons()}</FormGroup>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default FormSidebar
