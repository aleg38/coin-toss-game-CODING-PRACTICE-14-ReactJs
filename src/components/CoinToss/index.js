// Write your code here
import {Component} from 'react'

import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {resultImage: headImage, headsCount: 0, tailsCount: 0}

  onTossCoinButton = () => {
    const {headsCount, tailsCount} = this.state

    const tossValue = Math.floor(Math.random() * 2)
    let tossImage = ''

    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount

    if (tossValue === 0) {
      tossImage = headImage
      updatedHeadsCount += 1
    } else {
      tossImage = tailImage
      updatedTailsCount += 1
    }

    this.setState({
      resultImage: tossImage,
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {resultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="app-card-container">
          <h1 className="coin-toss-heading">Coin Toss Game</h1>
          <p className="heads-tails-text">Heads (or) Tails</p>

          <img src={resultImage} className="coin-image" alt="toss result" />
          <button
            type="button"
            className="coin-toss-btn"
            onClick={this.onTossCoinButton}
          >
            Toss Coin
          </button>

          <div className="list-container">
            <p className="result-text">Total: {totalCount}</p>
            <p className="result-text">Heads: {headsCount}</p>
            <p className="result-text">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
