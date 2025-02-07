// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="bg-not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-header">Lost Your Way?</h1>
      <p className="not-found-description">Sorry, we cannot find that page. You will find lots to explore on the home page</p>
    </div>
  </>
)

export default NotFound
