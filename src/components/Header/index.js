import {Link, withRouter} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {useState} from 'react'

import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const {searchClicked} = props
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const [searchInput, setSearchInput] = useState('')
  const onChangeSearch = event => setSearchInput(event.target.value)
  const onClickSearch = () => {
    searchClicked(searchInput)
  }

  return (
    <li className="navEl">
      <div className="headCon">
        <div className="websiteContainer">
          <Link to="/" className="linkEl">
            <img
              src="https://res.cloudinary.com/dyyexkznb/image/upload/v1647488445/instaShareLogo_wfbdew.png"
              alt="website logo"
              className="logo"
            />
          </Link>
          <h1 className="logoHead">Insta Share</h1>
        </div>
        <div className="secondCon">
          <div className="searchContainer">
            <input
              type="search"
              onChange={onChangeSearch}
              placeholder="Search Caption"
            />
            <button
              type="button"
              className="searchIcon"
              onClick={onClickSearch}
              data-testid="searchIcon"
            >
              <FaSearch />
            </button>
          </div>
          <Link to="/" className="btnOf">
            Home
          </Link>
          <Link to="/my-profile" className="btnOf">
            Profile
          </Link>
          <button type="button" className="LogoutBtn" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </li>
  )
}

export default withRouter(Header)
