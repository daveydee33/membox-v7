import { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, CardText, CardLink, Badge } from 'reactstrap'
import { selectThemeColors } from '@utils'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
} from 'swiper'

import '@styles/react/libs/swiper/swiper.scss'

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

const swiperParams = {
  effect: 'coverflow',
  className: 'swiper-coverflow',
  slidesPerView: 'auto',
  // centeredSlides: true,
  pagination: {
    clickable: true
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  navigation: true
}

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
  const [item, setItem] = useState({})

  useEffect(() => {
    axios.get(`/v1/items/${id}`).then((res) => setItem(res.data))
  }, [])

  return (
    <Card className="card">
      <CardBody>
        {/* TODO: verify that this is a valid URL */}
        <Swiper {...swiperParams}>
          {item?.images?.length > 0 &&
            item.images.map((image) => (
              <SwiperSlide>
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0rem' }}> */}
                <img src={image} alt="image" className="img-fluid" />
                {/* </div> */}
              </SwiperSlide>
            ))}
        </Swiper>
        <CardText tag="h2">{item.title}</CardText>
        <CardText tag="h5">{item.description}</CardText>
        <CardText>{item.details}</CardText>
        <CardText>
          {item.examples?.map((example) => {
            const regexTitle = new RegExp(item.title, 'gi')
            const titleWithBold = example.title.replace(regexTitle, `<b>$&</b>`)
            const regexDescription = new RegExp(`\\b(${item.description.split('; ').join('|')})\\b`, 'gi')
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
          {item.tags?.map((tag) => (
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
