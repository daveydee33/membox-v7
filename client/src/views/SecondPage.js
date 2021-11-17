import { useContext } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import { UserContext } from '../utility/context/UserContext'
import { UserContextFirebase } from '../utility/context/UserContextFirebase'

const SecondPage = () => {
  const { user } = useContext(UserContext)
  const { currentUserFirebase } = useContext(UserContextFirebase)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Awesome 🙌</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>This is your second page.</CardText>
        <CardText>
          Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes.
          Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
        </CardText>

        <CardTitle>UserContext</CardTitle>
        <CardText>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </CardText>

        <CardTitle>UserContextFirebase</CardTitle>
        <CardText>
          <pre>{JSON.stringify(currentUserFirebase, null, 2)}</pre>
        </CardText>
      </CardBody>
    </Card>
  )
}

export default SecondPage
