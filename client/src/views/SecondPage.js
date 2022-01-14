import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { useContext, useEffect } from 'react'

// Context - with Mongo data
import { UserContext } from '../utility/context/UserContext'

// Context - with Firebase data
import { UserContextFirebase } from '../utility/context/UserContextFirebase'

// Redux - with Mongo data
import { useSelector, useDispatch } from 'react-redux'
// import { getUserData } from '../redux/actions/auth'

const SecondPage = () => {
  // Context-Mongo
  const { user: userDataContextMongo } = useContext(UserContext)
  // Context-Firebase
  const { currentUserFirebase, favorites } = useContext(UserContextFirebase)
  // Redux-Mongo
  const dispatch = useDispatch()
  const userDataRedux = useSelector((state) => state.auth.userData)
  // useEffect(() => dispatch(getUserData()), [dispatch]) // why do i need [dispatch] ?

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
          <pre>{JSON.stringify(userDataContextMongo, null, 2)}</pre>
        </CardText>

        <CardTitle>UserContextFirebase</CardTitle>
        <CardText>
          <pre>{JSON.stringify(currentUserFirebase, null, 2)}</pre>
          <pre>{JSON.stringify(favorites, null, 2)}</pre>
        </CardText>

        <CardTitle>UserDataRedux</CardTitle>
        <CardText>
          <pre>{JSON.stringify(userDataRedux, null, 2)}</pre>
        </CardText>
      </CardBody>
    </Card>
  )
}

export default SecondPage
