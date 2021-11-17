import Router from './router/Router'
import { useState, useMemo } from 'react'
import { UserContext } from './utility/context/UserContext'
import { UserContextFirebase } from './utility/context/UserContextFirebase'
import { useUserDataFirebase } from './firebase'

function App(props) {
  // Mongo Auth
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  // Firebase Auth
  const userDataFirebase = useUserDataFirebase()

  return (
    <UserContext.Provider value={value}>
      <UserContextFirebase.Provider value={userDataFirebase}>
        <Router />
      </UserContextFirebase.Provider>
    </UserContext.Provider>
  )
}

export default App
