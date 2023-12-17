import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onInputChange = event => {
    const {inputText} = this.state
    this.setState({inputText: event.target.value})
    console.log(inputText)
  }

  render() {
    const headingText = 'Calculate the Letters you enter'
    const imageURL =
      'https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png'
    const {inputText} = this.state
    const count = inputText.length

    return (
      <div className="app-container">
        <div className="container">
          <div className="calculate-container">
            <h1 className="heading">{headingText}</h1>
            <label className="label-text" htmlFor="userInput">
              Enter the phrase
            </label>
            <input
              className="user-input"
              type="text"
              placeholder="Enter the phrase"
              id="userInput"
              onChange={this.onInputChange}
            />
            <p className="count-box">No.of letters: {count}</p>
          </div>
          <img className="image" src={imageURL} alt="calImage" />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
