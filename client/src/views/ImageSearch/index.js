import { CardColumns, Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'

/// NOTE, this is limited to only 100 queries per day.  THen after that it's $5 / 10000 (10,000 max) so it can get expensive quick

const ImageSearchPage = () => {
  const [data, setData] = useState()
  // to override/ignore my axios interceptor
  const uninterceptedAxiosInstance = axios.create()

  useEffect(async () => {
    const res = await uninterceptedAxiosInstance.get(
      'https://www.googleapis.com/customsearch/v1?q=taco&cx=d0abe669a69524aba&key=____API_KEY____&cr=countryID&alt=json'
    )
    // const res = await axios.get('https://jsonplaceholder.typicode.com/photos')

    console.log('res.data', res.data)
    setData(res.data)

    return () => {
      setData()
    }
  }, [])

  return (
    <CardColumns>
      {/* <script async src="https://cse.google.com/cse.js?cx=d0abe669a69524aba"></script> */}
      {/* <div className="gcse-search"></div> */}
      {data?.items &&
        data?.items?.map((item) => {
          return (
            <Card>
              <CardImg
                src={
                  // eslint-disable-next-line multiline-ternary
                  item?.pagemap?.cse_thumbnail?.length
                    ? // eslint-disable-next-line multiline-ternary
                      item.pagemap.cse_thumbnail[0].src
                    : item.pagemap.cse_image[0].src
                }
              ></CardImg>
              <CardText>{item.displayLink}</CardText>
            </Card>
          )
        })}
    </CardColumns>
  )
}

export default ImageSearchPage
