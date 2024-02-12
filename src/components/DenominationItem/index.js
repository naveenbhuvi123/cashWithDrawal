import './index.css'

const DenominationItem = props => {
  const {eachNum, decreaseBalance} = props
  const {value} = eachNum
  const onDecrease = () => {
    decreaseBalance(value)
  }
  return (
    <li className="list-container">
      <button type="button" className="btn" onClick={onDecrease}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
