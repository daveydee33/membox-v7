import { loginWithGooglePopup, logout } from '../../firebase'
import { UserContext } from '../../utility/context/User'

// ** React Imports
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogin, handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/dave/blank_profile.png'

const UserDropdown = () => {
  const { currentUser } = useContext(UserContext)

  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  const handleLoginButton = async () => {
    const loginResponseUserData = await loginWithGooglePopup()
    dispatch(handleLogin(loginResponseUserData))
  }

  const handleLogoutButton = async () => {
    await logout
    dispatch(handleLogout())
  }

  //** Vars
  const userAvatar = currentUser?.photoURL || defaultAvatar

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle href="/" tag="a" className="nav-link dropdown-user-link" onClick={(e) => e.preventDefault()}>
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name font-weight-bold">
            {/* {(userData && userData['username']) || 'John Doe'} */}
            {currentUser?.email || 'Login / Register'}
          </span>
          <span className="user-status">{/* {(userData && userData.role) || 'Admin'} */}</span>
        </div>
        <Avatar img={userAvatar} imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to="#" onClick={handleLoginButton}>
          <User size={14} className="mr-75" />
          <span className="align-middle">{currentUser ? 'Switch User' : 'Login'}</span>
        </DropdownItem>
        {currentUser && (
          <DropdownItem tag={Link} to="#" onClick={handleLogoutButton}>
            <Power size={14} className="mr-75" />
            <span className="align-middle">Logout</span>
          </DropdownItem>
        )}
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
