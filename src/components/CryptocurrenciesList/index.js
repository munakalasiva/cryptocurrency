import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrencyHeader = () => (
    <div className="sty-row">
      <p>Coin Type</p>
      <div className="sty-row1">
        <p className="para">USD</p>
        <p>EURO</p>
      </div>
    </div>
  )

  renderCryptocurrencyView = () => {
    const {currencyData} = this.props

    return (
      <div className="cards">
        {this.renderCryptocurrencyHeader()}
        <ul>
          {currencyData.map(eachObject => (
            <CryptocurrencyItem
              key={eachObject.id}
              currencyDetails={eachObject}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrencyView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
