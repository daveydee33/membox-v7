import { loginWithGooglePopup, logout } from '../../firebase'

// ** React Imports
import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn, saveToLocalStorage, removeFromLocalStorage } from '@utils'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/dave/blank_profile.png'

import { UserContext } from '../../utility/context/UserContext'

const UserDropdown = () => {
  // ** State
  const { user, setUser } = useContext(UserContext)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUser(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  const handleLoginClick = async () => {
    const loginResponseData = await loginWithGooglePopup()
    if (loginResponseData) {
      const { user, accessToken, refreshToken } = loginResponseData
      setUser(user)
      saveToLocalStorage(user, accessToken, refreshToken)
    }
  }

  const handleLogoutClick = async () => {
    await logout
    setUser(null)
    removeFromLocalStorage()
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
      <DropdownMenu right>
        <DropdownItem tag={Link} to="#" onClick={handleLoginClick}>
          <User size={14} className="mr-75" />
          <span className="align-middle">{user ? 'Switch User' : 'Login'}</span>
        </DropdownItem>
        {user && (
          <DropdownItem tag={Link} to="#" onClick={handleLogoutClick}>
            <Power size={14} className="mr-75" />
            <span className="align-middle">Logout</span>
          </DropdownItem>
        )}
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
