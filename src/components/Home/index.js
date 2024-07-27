// Write your code here
import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="bg-home-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
            alt="home"
            className="home-lg-img"
          />

          <img
            src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
            alt="home"
            className="home-sm-img"
          />
        </div>
      </>
    )
  }
}

export default Home
