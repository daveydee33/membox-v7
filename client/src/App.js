// ** Router Import
import Router from './router/Router'

import { UserContext } from './utility/context/User'
import { useUserData } from './firebase'

function App(props) {
  const userData = useUserData()

  return (
    <UserContext.Provider value={userData}>
      <Router />
    </UserContext.Provider>
  )
}

export default App
