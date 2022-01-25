import { useContext, useState, useEffect } from 'react'
import AudioPlayer from '../../components/AudioPlayer'
import classnames from 'classnames'
import { Star, Heart, CheckSquare, Square, Edit2 } from 'react-feather'
import { Card, CardBody, CardText, CardTitle, CardImg, Button, Badge, CardColumns, CardFooter } from 'reactstrap'
import { UserContextFirebase } from '../../utility/context/UserContextFirebase'
import { setFavorite, unsetFavorite, setProgress } from '../../firebase'
import { Link, useHistory } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  // EffectFade,
  EffectCube,
  EffectCoverflow,
  // Autoplay,
  Lazy,
  Virtual
} from 'swiper'
import '@styles/react/libs/swiper/swiper.scss'
SwiperCore.use([Navigation, Pagination, EffectCube, EffectCoverflow, Lazy, Virtual])
const swiperParams = {
  // effect: 'cube',
  // className: 'swiper-cube-effect',
  // pagination: {
  //   clickable: true
  // }
}

import img1 from '@src/assets/images/pages/content-img-1.jpg'
import img2 from '@src/assets/images/pages/content-img-2.jpg'
import img3 from '@src/assets/images/pages/content-img-3.jpg'
import img4 from '@src/assets/images/pages/content-img-4.jpg'

const ItemCards = (props) => {
  // ** Props
  const { dispatch, items, activeView, selectItem, handleFormPanel, userDataRedux, filters } = props

  // Context-Firebase
  const { currentUserFirebase, favorites, progress, role } = useContext(UserContextFirebase)
  const history = useHistory()

  const [itemsFiltered, setItemsFiltered] = useState([])

  useEffect(() => {
    let itemsFiltered = items || []

    if (!filters.favorites) itemsFiltered = itemsFiltered.filter((item) => favorites.includes(item.title))

    if (!filters.learning) itemsFiltered = itemsFiltered.filter((item) => {
        return progress[item.title] && progress[item.title] === 1
      })

    setItemsFiltered(itemsFiltered)

    return () => {
      setItemsFiltered()
    }
  }, [items, filters])

  const handleFavoriteClick = (e, item) => {
    e.stopPropagation()
    if (favorites.includes(item.title)) {
      unsetFavorite(item, currentUserFirebase.uid)
    } else {
      setFavorite(item, currentUserFirebase.uid)
    }
  }

  const handleProgressClick = (e, item) => {
    e.stopPropagation()
    setProgress(item, currentUserFirebase.uid, progress[item.title])
  }

  const handleEditClick = (e, item) => {
    e.stopPropagation()
    dispatch(selectItem(item))
    handleFormPanel()
  }

  const getItemUrls = (title) => [
    `https://lla-audio.s3.amazonaws.com/A/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/B/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/C/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/D/${title}.mp3`
  ]

  const randomImg = () => {
    // const images = [
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFoevIHhvKzRO4UzzNfP4xeLFoc2Cke8PUTJclE0q7fKqkHU&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAqihpKY7crokSxzk2MJZyJ8U3v5VEntMXmUyFXgXtpyvuH47&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qR4YF5Rm3wE63Wg8tnafZ_6yaL452kNJHmGpXgKiB5TQ0K4R&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZDwykMIa3P0Uwoa3bmIBYCxphtV-L-INhIsLcJ8vSrOesog&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlttDq442Q3DpiQTB9v9Xc4u5Bi2AZoHmb5M0K37Kk451vg4&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVERT6mIlMRGuDJLDkQtBU7Iwoz40n0akilnMflFNWU3bwWLN&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinZHOOwjQqh4r604UwfbEKxdRR10hoRuuPb9tEy1fbMhA7VMF&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzasralkpQ6P2ixUwfT8xy0V5MlHcwZXRNJkxbOG_J0R1gnpk&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT348l39vIZYRwC1k63dFnRBJ3FsQhzegBUDXEvkVGsoJn6YrmU&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANSpFxtgvId_v41A1UJy-0Y6AOOF4hpDj8ieSvK-E1WucYxY8&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAW5gpg88kX1f5rTVtD5I85Ai3RUoQpouz0fycPurU6Yp_SB8&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rqmz7xGOT2MBtRWpg8zlKsCgRb_dZrjD2R-u8vmCSVVmJK9H&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUfaVu2x3MulxDaOhyREaUyA3waXXQCVdntWyu6M-da0Me70&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIvOu7DZei7GlxGH8ejCPlw6HDfVWZRFVZ4gkkuYDOPv7_Odj&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLoF36w0_5aioDmLmpE45_NG7O1fEVuv1Wpz74RNGZF5hfDsS&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JCWfIj0OwKOVgBw8PwXgjl-lLZQjQq9m4io3fYFiY7QTbhob&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLg2jzQ4BUVzmTc_tyltTehA7Qp8lXgCLN5VCam-yqL0lOIc&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACNVT3dIDI_SdZX1g1HjeciBjGUkn_Qv-XYW6nZXs64hN_4Q3&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJM7gKxxbUCGbEBCCDtA9FuamJTy3d96HgZKwjQTZJcnY1YE&s',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfiLJY4JRjU_lhKbhjmBmftIYa5J3D9znaIGVhwP_DmX1L1XF&s'
    // ]
    const images = [
      'https://c.tenor.com/uICGiTPlUpgAAAAd/cat-leaving.gif',
      'https://c.tenor.com/a0xEuh3KzUAAAAAC/anime.gif',
      'https://c.tenor.com/vHtBYHVo-_UAAAAC/draco-malfoy-harry-potter.gif',
      'https://c.tenor.com/arE-6aqjG-kAAAAC/unhappy-cry.gif',
      'https://c.tenor.com/Pvf58wBw6aAAAAAC/stickman-running.gif',
      'https://c.tenor.com/ktUJPIC_5PYAAAAC/aku-yang-pergi-meninggalkan.gif',
      'https://c.tenor.com/2gZSSd2YauIAAAAd/silahkan-engkau-pergi-lesti.gif',
      'https://c.tenor.com/yLFv9nftJVUAAAAC/pergi-alif-rizky.gif',
      'https://c.tenor.com/-OKgyxpAYf0AAAAd/teletubbies-dipsy.gif',
      'https://c.tenor.com/hIcHU3Wm7-4AAAAd/running-away-scared.gif',
      'https://c.tenor.com/QbB6ZkF5GXUAAAAC/kiss-running.gif',
      'https://c.tenor.com/jZ9ydsxATuAAAAAd/silahkan-saja-bila-kau-ingin-pergi-lesti.gif',
      'https://c.tenor.com/5Cl6zyZLbUEAAAAd/silahkan-saja-bila-kau-ingin-pergi-lesti.gif',
      'https://c.tenor.com/1_t89d6V0icAAAAC/freaking-out-crying.gif',
      'https://c.tenor.com/Y0DbzNjnh0cAAAAC/run-run-baby-run.gif',
      'https://c.tenor.com/SRQtyNionBUAAAAd/panda-run.gif'
    ]

    const index = Math.floor(Math.random() * images.length)
    return images[index]
  }

  // ** Renders items
  const renderItems = () => {
    const items = itemsFiltered
    if (items.length) {
      return items.map((item) => {
        const progressIcon = () => {
          if (progress[item.title] && progress[item.title] === 1) return <CheckSquare color={'orange'} />
          if (progress[item.title] && progress[item.title] === 2) return <CheckSquare color={'green'} />
          return <Square color={'gray'} />
        }

        return (
          <Card key={item.id} className="ecommerce-card">
            {/* <CardImg src={item.images[0]} /> */}
            <CardBody
            // onClick={() => {
            //   history.push(`/item/${item.id}`)
            // }}
            >
              {/* TODO: verify that this is a valid URL */}
              {item?.images?.length > 0 && (
                <Swiper {...swiperParams} className="mb-1">
                  {item.images.map((image) => (
                    <SwiperSlide key={image}>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0rem' }}>
                        <img src={image} className="img-fluid" style={{ maxHeight: '200px' }} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
                <div>
                  <CardText tag="h2">{item.title}</CardText>
                  <CardText tag="h5">{item.description}</CardText>
                </div>
                <AudioPlayer urls={getItemUrls(item.title)} onClick={(e) => e.stopPropagation()} />
              </div>
              <CardText className="text-muted">{item.details}</CardText>
              {item.examples?.map((example) => {
                const regexTitle = new RegExp(item.title, 'gi')
                const titleWithBold = example.title.replace(regexTitle, `<b>$&</b>`)
                const regexDescription = new RegExp(
                  `\\b(${item.description.split(/\s*,\s*|\s*;\s*/).join('|')})\\b`,
                  'gi'
                )
                const descriptionWithBold = example.description.replace(regexDescription, `<b>$&</b>`)
                return (
                  <div key={example.title} className="mt-1" align="right">
                    <div dangerouslySetInnerHTML={{ __html: titleWithBold }}></div>
                    <div dangerouslySetInnerHTML={{ __html: descriptionWithBold }} className="font-italic"></div>
                  </div>
                )
              })}
              <CardText>
                {item.tags.map((tag) => (
                  <Badge color="light-secondary" className="mr-1 mt-1" pill key={tag}>
                    {tag}
                  </Badge>
                ))}
              </CardText>
            </CardBody>
            <CardFooter
              className="text-center"
              style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}
            >
              {role === 'admin' && (
                <Link onClick={(e) => handleEditClick(e, item)} to="#">
                  <Edit2 color="gray" />
                </Link>
              )}
              <Link onClick={(e) => handleFavoriteClick(e, item)} to="#">
                <Heart color={favorites.includes(item.title) ? 'red' : 'gray'} />
              </Link>
              <Link onClick={(e) => handleProgressClick(e, item)} to="#">
                {progressIcon()}
              </Link>
            </CardFooter>
          </Card>
        )
      })
    }
  }

  return (
    <div
      className={classnames({
        'grid-view': activeView === 'grid',
        'list-view': activeView === 'list',
        'card-columns': activeView === 'columns'
      })}
    >
      {renderItems()}
    </div>
  )
}

export default ItemCards
