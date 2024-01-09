import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li className="list-item">
      <div className="adj1">
        <img className="imgs" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="adj2">
        <p className="p1">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
