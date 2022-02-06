import _cloneDeep from 'lodash/cloneDeep'
// ** React Imports
import { useState, Fragment, useEffect } from 'react'

// ** Third Party Components
import { X, Plus, Trash } from 'react-feather'
import CreatableSelect from 'react-select/creatable'
import Repeater from '@components/repeater'
import { Modal, ModalBody, Button, Form, FormGroup, Input, Label } from 'reactstrap'

// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'

// ** Modal Header
const ModalHeader = (props) => {
  // ** Props
  const { children, handleFormPanel } = props
  return (
    <div className="modal-header d-flex align-items-center justify-content-between mb-1">
      <h5 className="modal-title">{children}</h5>
      <div className="todo-item-action d-flex align-items-center">
        <X className="font-weight-normal mt-25" size={16} onClick={handleFormPanel} />
      </div>
    </div>
  )
}

const FormPanel = (props) => {
  // ** Props
  const { open, handleFormPanel, store, dispatch, updateSingleItem, selectItem, addItem, deleteItem } = props

  // ** Item data
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [details, setDetails] = useState('')
  const [tags, setTags] = useState([])
  const [seeAlso, setSeeAlso] = useState([])
  const [examples, setExamples] = useState([])
  const [tagOptions, setTagOptions] = useState([])
  const [repeaterCount, setRepeaterCount] = useState(1)

  const increaseRepeaterCount = () => {
    setRepeaterCount(repeaterCount + 1)
  }

  const deleteRepeaterForm = (e, index) => {
    e.preventDefault()
    setExamples(examples.filter((k, i) => i !== index))
  }

  const getTagObjects = () => {
    const tagOptions = store.tags.filter((tag) => tag).map((tag) => ({ value: tag, label: tag }))
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

  useEffect(() => {
    setRepeaterCount(examples.length || 1)
  }, [examples])

  // ** Function to reset fileds with selectedItem values
  const handleResetFields = () => {
    const { title, description, details, examples, tags, seeAlso } = store.selectedItem
    setTitle(title)
    setDescription(description)
    setDetails(details)
    setSeeAlso(seeAlso)
    setExamples(_cloneDeep(examples))
    if (tags && tags.length) {
      const trimmed = tags.map((tag) => tag.trim()).filter((tag) => tag)
      const unique = [...new Set(trimmed)]
      const objects = unique.map((tag) => ({
        value: tag,
        label: tag
      }))
      setTags(objects)
    }
    if (seeAlso && seeAlso.length) {
      const trimmed = seeAlso.map((tag) => tag.trim()).filter((tag) => tag)
      const unique = [...new Set(trimmed)]
      const objects = unique.map((tag) => ({
        value: tag,
        label: tag
      }))
      setSeeAlso(objects)
    }
  }

  // ** Function to run when sidebar opens
  const handleSidebarOpened = () => {
    if (!isObjEmpty(store.selectedItem)) {
      handleResetFields()
    }
    setTagOptions(getTagObjects())
  }

  // ** Function to run when sidebar closes
  const handleSidebarClosed = () => {
    setTitle('')
    setDescription('')
    setDetails('')
    setExamples([])
    setTags([])
    setSeeAlso([])
    dispatch(selectItem({}))
    setRepeaterCount(1)
  }

  // ** Renders Footer Buttons
  const renderFooterButtons = () => {
    const examplesWithEmptyObjectsRemoved = examples.filter((example) => example.title || example.description)

    const payload = {
      title,
      description,
      details,
      examples: examplesWithEmptyObjectsRemoved,
      tags: tags.map((tag) => tag.value),
      seeAlso: seeAlso.map((tag) => tag.value)
    }

    if (store && !isObjEmpty(store.selectedItem)) {
      return (
        <Fragment>
          <Button.Ripple
            color="primary"
            disabled={!title.length}
            className="update-btn update-todo-item mr-1"
            onClick={() => {
              dispatch(updateSingleItem(store.selectedItem.id, payload))
              handleFormPanel()
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
                handleFormPanel()
              }}
              outline
            >
              Delete
            </Button.Ripple>
          ) : null}
          <Button color="secondary" onClick={handleFormPanel} outline>
            Cancel
          </Button>
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
              dispatch(addItem(payload))
              handleFormPanel()
            }}
          >
            Add
          </Button>
          <Button color="secondary" onClick={handleFormPanel} outline>
            Cancel
          </Button>
        </Fragment>
      )
    }
  }

  const handleOnChangeExampleTitle = (event, i) => {
    const newExamples = [...examples]
    if (!newExamples[i]) {
      for (let a = examples.length; a <= i; a++) {
        newExamples.push({ title: '', description: '' })
      }
    }
    newExamples[i].title = event.target.value
    setExamples(newExamples)
  }

  const handleOnChangeExampleDescription = (event, i) => {
    const newExamples = [...examples]
    if (!newExamples[i]) {
      for (let a = examples.length; a <= i; a++) {
        newExamples.push({ title: '', description: '' })
      }
    }
    newExamples[i].description = event.target.value
    setExamples(newExamples)
  }

  return (
    <Modal
      isOpen={open}
      toggle={handleFormPanel}
      className="sidebar-lg"
      contentClassName="p-0"
      onOpened={handleSidebarOpened}
      onClosed={handleSidebarClosed}
      modalClassName="modal-slide-in sidebar-todo-modal"
    >
      <Form id="form-modal-todo" className="todo-modal" onSubmit={(e) => e.preventDefault()}>
        <ModalHeader store={store} dispatch={dispatch} handleFormPanel={handleFormPanel}>
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

          <FormGroup>
            <Label for="seeAlso" className="form-label">
              See Also
            </Label>
            <CreatableSelect
              isMulti
              value={seeAlso}
              id="seeAlso"
              isClearable={false}
              // options={tagOptions}
              className="react-select"
              classNamePrefix="select"
              theme={selectThemeColors}
              onChange={(data, actionMeta) => {
                setSeeAlso(data !== null ? [...data] : [])
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
                    value={examples[i] ? examples[i].title : ''}
                    onChange={(e) => handleOnChangeExampleTitle(e, i)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="meaning" className="form-label">
                    Meaning
                  </Label>
                  <Input
                    id="meaning"
                    placeholder="Meaning"
                    value={examples[i] ? examples[i].description : ''}
                    onChange={(e) => handleOnChangeExampleDescription(e, i)}
                  />
                </FormGroup>

                <Button.Ripple
                  color="flat-danger"
                  className="btn-icon rounded-circle"
                  onClick={(e) => deleteRepeaterForm(e, i)}
                >
                  <Trash size={14} />
                </Button.Ripple>
                <hr />
              </div>
            )}
          </Repeater>
          <Button.Ripple className="btn-icon" color="bg-gradient-info" onClick={increaseRepeaterCount}>
            <Plus size={14} />
            <span className="align-middle ml-25">More</span>
          </Button.Ripple>
          <FormGroup className="my-1">{renderFooterButtons()}</FormGroup>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default FormPanel
