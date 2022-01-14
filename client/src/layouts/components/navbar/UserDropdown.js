import { loginWithGooglePopup, logout } from '../../../firebase'

// ** React Imports
import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogin, handleLogout } from '@store/authentication'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/dave/blank_profile.png'

import { UserContext } from '../../../utility/context/UserContext'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const { user, setUser } = useContext(UserContext)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUser(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  const handleLoginButton = async () => {
    const loginResponseData = await loginWithGooglePopup()
    if (loginResponseData) {
      setUser(loginResponseData.user) // context
      dispatch(handleLogin(loginResponseData)) // redux
    }
  }

  const handleLogoutButton = async () => {
    await logout
    setUser(null)
    dispatch(handleLogout())
  }

  //** Vars
  const userAvatar = (user && user.picture) || defaultAvatar

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle href="/" tag="a" className="nav-link dropdown-user-link" onClick={(e) => e.preventDefault()}>
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name font-weight-bold">{user?.email || 'Login / Register'}</span>
          <span className="user-status">{user?.role !== 'user' && user?.role}</span>
        </div>
        <Avatar img={userAvatar} imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to="#" onClick={handleLoginButton}>
          <User size={14} className="mr-75" />
          <span className="align-middle">{user ? 'Switch User' : 'Login'}</span>
        </DropdownItem>
        {user && (
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
