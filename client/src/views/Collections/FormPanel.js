import { useState, Fragment, useEffect } from 'react'
import _cloneDeep from 'lodash/cloneDeep'
import { X, Plus, Trash } from 'react-feather'
import CreatableSelect from 'react-select/creatable'
import Repeater from '@components/repeater'
import { Modal, ModalBody, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { isObjEmpty, selectThemeColors } from '@utils'
import '@styles/react/libs/react-select/_react-select.scss'

const ModalHeader = (props) => {
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
  const {
    open,
    handleFormPanel,
    store,
    dispatch,
    updateSingleCollection,
    selectedCollection,
    setSelectedCollection,
    addCollection,
    deleteCollection
  } = props

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [details, setDetails] = useState('')
  const [items, setItems] = useState('')
  const [tags, setTags] = useState([])
  const [tagOptions, setTagOptions] = useState([])

  useEffect(() => {
    if (props.defaultSuggestions && focused) {
      setShowSuggestions(true)
    }
  }, [])

  const getTagObjects = () => {
    const tagOptions = store?.tags?.map((tag) => ({ value: tag, label: tag })) || []
    // TODO: fix this because it's always empty
    return tagOptions
  }

  const handleSidebarTitle = () => {
    if (!isObjEmpty(selectedCollection)) {
      return 'Edit Collection'
    } else {
      return 'Create New Collection'
    }
  }

  const handleResetFields = () => {
    const { title, description, details, items, tags } = selectedCollection
    setTitle(title)
    setDescription(description)
    setDetails(details)
    setItems(items?.join('\n') || '')
    if (tags && tags.length) {
      const tagsTrimmed = tags.map((tag) => tag.trim())
      const tagsUnique = [...new Set(tagsTrimmed)]
      const tagObjects = tagsUnique.map((tag) => ({
        value: tag,
        label: tag
      }))
      setTags(tagObjects)
    }
  }

  const handleSidebarOpened = () => {
    if (!isObjEmpty(selectedCollection)) {
      handleResetFields()
    }
    setTagOptions(getTagObjects())
  }

  const handleSidebarClosed = () => {
    setTitle('')
    setDescription('')
    setDetails('')
    setItems('')
    setTags([])
    setSelectedCollection({})
  }

  const renderFooterButtons = () => {
    const newTags = []
    if (tags.length) {
      tags.map((tag) => newTags.push(tag.value))
    }

    const payload = {
      title,
      description,
      details,
      items: items?.split('\n').filter(String)
      // tags: newTags // TODO: add these when server supports it
    }

    if (!isObjEmpty(selectedCollection)) {
      return (
        <Fragment>
          <Button.Ripple
            color="primary"
            disabled={!title.length}
            className="update-btn update-todo-item mr-1"
            onClick={() => {
              dispatch(updateSingleCollection(selectedCollection.id, payload))
              handleFormPanel()
            }}
          >
            Update
          </Button.Ripple>
          <Button.Ripple color="secondary" onClick={handleResetFields} outline>
            Reset
          </Button.Ripple>

          {!isObjEmpty(selectedCollection) ? (
            <Button.Ripple
              color="danger"
              className="ml-1"
              onClick={() => {
                dispatch(deleteCollection(selectedCollection.id))
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
              dispatch(addCollection(payload))
              handleFormPanel()
            }}
          >
            Create
          </Button>
          <Button color="secondary" onClick={handleFormPanel} outline>
            Cancel
          </Button>
        </Fragment>
      )
    }
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
            <Label for="items" className="form-label">
              Words / Phrases (<i>one per line</i>)
            </Label>
            <Input
              id="items"
              value={items}
              placeholder="Word list"
              type="textarea"
              rows={6}
              onChange={(e) => setItems(e.target.value)}
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

export default FormPanel
