import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Col,
  CustomInput,
  FormGroup,
  Input,
  Label,
  Badge
} from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

// For inspiration on this page, see:
// Blog Edit:  https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/pages/blog/edit/1
// * MDE / Rich Text Editor / HTML
// * Image Uploaded
// * Select / Tags - Simple: https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/pages/blog/edit/1 (Category)
// * Select / Tags - Images: (Calendar - Add Event - Guests)
// Product Add/Edit:  StrikingDash
// Image Uploaded

const ItemPage = () => {
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get(`/v1/items/${id}`).then((res) => setData(res.data))
  }, [])

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h1">{data.title}</CardTitle>
        <CardSubtitle className="mb-2">{data.description}</CardSubtitle>
        <CardText>{data.details}</CardText>
        <CardText>
          {data.examples?.map((example) => {
            const regexTitle = new RegExp(data.title, 'gi')
            const titleWithBold = example.title.replace(regexTitle, `<b>$&</b>`)
            const regexDescription = new RegExp(`\\b(${data.description.split('; ').join('|')})\\b`, 'gi')
            const descriptionWithBold = example.description.replace(regexDescription, `<b>$&</b>`)
            return (
              <span style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem' }} key={example.title}>
                <span dangerouslySetInnerHTML={{ __html: titleWithBold }}></span>
                <span className="mr-1 ml-1">-</span>
                <span dangerouslySetInnerHTML={{ __html: descriptionWithBold }} className="font-italic"></span>
              </span>
            )
          })}
        </CardText>
        <CardText>
          {data.tags?.map((tag) => (
            <Badge color="light-secondary" className="mr-1 mt-1" pill key={tag}>
              {tag}
            </Badge>
          ))}
        </CardText>
        <CardLink>Link 1</CardLink>
        <CardLink>Link 2</CardLink>
      </CardBody>
    </Card>
  )
}

export default ItemPage
