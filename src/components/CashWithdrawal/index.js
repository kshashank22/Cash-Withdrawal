// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  getDenominationValue = value => {
    const {count} = this.state
    if (count >= value) {
      this.setState(prevState => ({
        count: prevState.count - value,
      }))
    } else {
      alert('No enough balance')
    }
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    const fullName = 'Sarah Williams'
    const firstChar = fullName.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile">
            <div className="logo">{firstChar}</div>
            <h1 className="heading">{fullName}</h1>
          </div>
          <div className="balance-card">
            <p className="your-balance">Your Balance</p>
            <div className="amount-card">
              <p className="count">{count}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-card">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominations={eachItem}
                  getDenominationValue={this.getDenominationValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
