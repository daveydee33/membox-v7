import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Col,
  CustomInput,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'

// For inspiration on this page, see:
// Blog Edit:  https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/pages/blog/edit/1
// * MDE / Rich Text Editor / HTML
// * Image Uploaded
// * Select / Tags - Simple: https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/pages/blog/edit/1 (Category)
// * Select / Tags - Images: (Calendar - Add Event - Guests)
// Product Add/Edit:  StrikingDash
// Image Uploaded

const AddWord = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Word</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>This is some Form Text</CardText>
        <CardText>This is more form text...</CardText>
        {/* Later look at Bootstrap 4 Grid system and the correct properties to add on to the Col and Row and Label, etc. */}

        {/* 
        <Col sm="12">
          <FormGroup row>
            <Label sm="3" size="lg" for="1111111111">
              Large
            </Label>
            <Col sm="9">
              <Input
                type="text"
                id="1111111111"
                bsSize="lg"
                placeholder="Large Input"
              />
            </Col>
          </FormGroup>
        </Col> 
        */}

        <Col sm="12">
          <FormGroup row>
            <Label sm="3" size="lg" for="title">
              Title
            </Label>
            <Col sm="9">
              <Input type="text" id="title" bsSize="lg" placeholder="Title" />
            </Col>
          </FormGroup>
        </Col>

        <Col sm="12">
          <FormGroup row>
            <Label sm="3" size="lg" for="description">
              Description
            </Label>
            <Col sm="9">
              <Input
                type="text"
                id="description"
                bsSize="lg"
                placeholder="Description"
                type="textarea"
              />
            </Col>
          </FormGroup>
        </Col>

        {/* Add a Language */}
        {/* With Flag in the dropdown.. can only select one, not a multiple select like Tags/Categories */}

        <Col sm="12">
          <FormGroup row>
            <Label sm="3" size="lg" for="tags">
              Tags
            </Label>
            <Col sm="9">
              <Input type="text" id="tags" bsSize="lg" placeholder="Tags" />
            </Col>
          </FormGroup>
        </Col>

        <Col md="6">
          <FormGroup className="mb-2">
            <Label for="category" size="lg">
              Category
            </Label>
            <Select
              id="category"
              isClearable={false}
              theme={selectThemeColors}
              isMulti
              name="colors"
              options={[
                { value: 'fashion', label: 'Fashion' },
                { value: 'gaming', label: 'Gaming' },
                { value: 'quote', label: 'Quote' },
                { value: 'video', label: 'Video' },
                { value: 'food', label: 'Food' }
              ]}
              className="react-select"
              classNamePrefix="select"
            />
          </FormGroup>
        </Col>

        {/* Checkboxes */}
        <Col sm="12">
          <FormGroup row>
            <Label sm="3" size="lg" for="labels">
              Labels
            </Label>
            <Col sm="9">
              <CustomInput
                type="checkbox"
                className="custom-control-Primary"
                id="Primary"
                label="Have Question / To Ask"
                defaultChecked
                inline
              />
              <CustomInput
                type="checkbox"
                className="custom-control-secondary"
                id="secondary"
                label="To Review"
                defaultChecked
                inline
              />
              <CustomInput
                type="checkbox"
                className="custom-control-success"
                id="success"
                label="Favorite"
                defaultChecked
                inline
              />
              <CustomInput
                type="checkbox"
                className="custom-control-danger"
                id="danger"
                label="Danger"
                defaultChecked
                inline
              />
              <CustomInput
                type="checkbox"
                className="custom-control-warning"
                id="warning"
                label="Warning"
                defaultChecked
                inline
              />
              <CustomInput
                type="checkbox"
                className="custom-control-info"
                id="info"
                label="Info"
                defaultChecked
                inline
              />
            </Col>
          </FormGroup>
        </Col>
      </CardBody>
    </Card>
  )
}

export default AddWord
