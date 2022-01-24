import { CardColumns, Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap'
import axios from 'axios'
import cheerio from 'cheerio'
import { useState, useEffect } from 'react'

const WEBSCRAPINGAPI_API_KEY = '1ML3kZj___WEB_SCRAPING_API_KEY___nBdNTpAsj' // TODO:

/// NOTE, this is limited to only 100 queries per day.  THen after that it's $5 / 10000 (10,000 max) so it can get expensive quick
/// https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list; https://stackoverflow.com/questions/34035422/google-image-search-says-api-no-longer-available

/// Other idea... since this seems to turn better results, I can maybe scrape it or just embed the images only? https://cse.google.com/cse?q=tacos&imgSize=medium&searchType=image&cx=d0abe669a69524aba&key=AIzaSyATn174KMuaB_ICmHwnINoH5-0PMjEhkBE#gsc.tab=1&gsc.q=tacos

/// I'm finding that the CSE option is better, because:
/// 1) I can customize the search engine to language/region which is especially helpful and needed
/// 2) better image files (the other on only seems to give thumbnails)
/// 3) CSE gives 20 results, and the Google Search API gives 10 results (( but can continue paginating ))

const ImageSearchPage = () => {
  const [data, setData] = useState()
  const [dataGoogle, setDataGoogle] = useState()
  // to override/ignore my main axios interceptor used for auth to my server
  const uninterceptedAxiosInstance = axios.create()

  useEffect(async () => {
    /// Template: https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json
    const q = 'tacos'
    const cx = 'd0abe669a69524aba' // MY google CSE search engine (limited to 100 per day)
    const key = 'AIzaSyAT___GOOGLE_SEARCH_API_KEY____5-0PMjEhkBE' // TODO:
    const imgSize = 'large' // icon, small, medium, large, xlarge, xxlarge, huge //// Large seemed to give me better results, not logos and stuff?
    const searchType = 'image'
    const safe = 'active' // active (safe-search) or off (default)
    const lr = 'lang_id' // lang_id for Indonesian
    const hl = ''
    const imgType = '' // clipart, face, lineart, stock, photo, animated
    const gl = 'id' // google domain to use for the sarch
    const cr = '' // if i want to restrict to a region?

    const res = await uninterceptedAxiosInstance.get(
      `https://www.googleapis.com/customsearch/v1?q=${q}&cx=${cx}&key=${key}&searchType=${searchType}&imgSize=${imgSize}&safe=${safe}`
    )
    setData(res.data)

    return () => {
      setData()
    }
  }, [])

  async function doScrape() {
    const url =
      'https://cse.google.com/cse?q=tacos&imgSize=medium&searchType=image&cx=d0abe669a69524aba&num=20&key=AIzaSyATn174KMuaB_ICmHwnINoH5-0PMjEhkBE#gsc.tab=1&gsc.q=tacos'
    const encodedUrl = encodeURIComponent(url).replace(/%2520/g, '%2B')
    const proxiedUrl = `https://api.webscrapingapi.com/v1?api_key=${WEBSCRAPINGAPI_API_KEY}&method=GET&device=desktop&proxy_type=datacenter&render_js=1&wait_until=load&url=${encodedUrl}`
    const res = await uninterceptedAxiosInstance.get(proxiedUrl)
    const $ = cheerio.load(res.data)
    const list = $('body')
      .find('img.gs-image.gs-image-scalable')
      .toArray()
      .map((element) => $(element).attr('src'))

    // // for testing
    // const list = [
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

    setDataGoogle(list)
  }

  return (
    <>
      <Card>
        <CardBody>
          <CardText>Google Images Search API</CardText>
          <CardColumns>
            {data?.items &&
              data?.items?.map((item) => {
                return (
                  <Card>
                    <CardImg src={item?.image?.thumbnailLink}></CardImg>
                    <CardText>{item.snippet}</CardText>
                  </Card>
                )
              })}
          </CardColumns>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardText>Google CSE + Proxy + Scrape</CardText>
          <Button onClick={doScrape}>Fetch Google Images from CSE (wait 10 seconds)</Button>
          <CardColumns>
            {dataGoogle &&
              dataGoogle.map((imgUrl) => {
                return (
                  <Card key={imgUrl}>
                    <CardImg src={imgUrl}></CardImg>
                    <CardText>{imgUrl}</CardText>
                  </Card>
                )
              })}
          </CardColumns>
        </CardBody>
      </Card>
    </>
  )
}

export default ImageSearchPage
