import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  onLoginClicked = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (res.ok === true) {
      console.log(data)
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="bgCon">
        <div className="loginCon">
          <div className="imgContainer">
            <img
              src="https://res.cloudinary.com/dyyexkznb/image/upload/v1647488432/homeScreenLogo_tg0cp3.png"
              alt="website login"
            />
          </div>
          <div className="inputCon">
            <img
              src="https://res.cloudinary.com/dyyexkznb/image/upload/v1647488445/instaShareLogo_wfbdew.png"
              alt="website logo"
            />
            <h1>Insta Share</h1>
            <form className="formCon" onSubmit={this.onLoginClicked}>
              <label htmlFor="userName" className="labelTxt">
                USERNAME
              </label>
              <input
                type="text"
                id="userName"
                className="inputEl"
                onChange={this.onChangeUsername}
              />
              <label htmlFor="password" className="labelTxt">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="inputEl"
                onChange={this.onChangePassword}
              />
              <button type="submit" className="btn">
                Login
              </button>
              {showSubmitError && <p className="err-msg">*{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
