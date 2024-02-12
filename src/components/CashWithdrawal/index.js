import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  decreaseBalance = val => {
    this.setState(prevState => ({
      balance: prevState.balance - val,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="container">
        <div className="denomination-container">
          <div className="user-details">
            <p className="profile">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-counter">
            <p className="balance-info">Your Balance</p>
            <p className="balance-amount">{balance}</p>
          </div>
          <p className="currency">In Rupees</p>
          <div className="withdraw-section">
            <p className="heading">Withdraw</p>
            <div className="section">
              <p className="balance-info">CHOOSE SUM (IN RUPEES)</p>
              <ul className="denominationContainer">
                {denominationsList.map(eachNum => (
                  <DenominationItem
                    eachNum={eachNum}
                    decreaseBalance={this.decreaseBalance}
                    key={eachNum.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
