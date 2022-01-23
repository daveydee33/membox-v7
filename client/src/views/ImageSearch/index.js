import { CardColumns, Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'

/// NOTE, this is limited to only 100 queries per day.  THen after that it's $5 / 10000 (10,000 max) so it can get expensive quick
/// https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list; https://stackoverflow.com/questions/34035422/google-image-search-says-api-no-longer-available

/// Other idea... since this seems to turn better results, I can maybe scrape it or just embed the images only? https://cse.google.com/cse?q=tacos&imgSize=medium&searchType=image&cx=d0abe669a69524aba&key=AIzaSyATn174KMuaB_ICmHwnINoH5-0PMjEhkBE#gsc.tab=1&gsc.q=tacos

const ImageSearchPage = () => {
  const [data, setData] = useState()
  // to override/ignore my axios interceptor
  const uninterceptedAxiosInstance = axios.create()

  useEffect(async () => {
    /// Template: https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json
    const q = 'tacos'
    const cx = 'd0abe669a69524aba' // MY google CSE search engine (limited to 100 per day)
    const key = '____API_KEY____'
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

  return (
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
  )
}

export default ImageSearchPage
