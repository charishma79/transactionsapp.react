// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenseAmount} = props

  return (
    <div className="money-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div className="balance-details-container">
          <p className="balance">Your Balance</p>
          <p className="detail" data-testid="balanceAmount">
            Rs {balanceAmount}{' '}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div className="balance-details-container">
          <p className="balance">Your Income</p>
          <p className="detail" data-testid="incomeAmount">
            Rs {incomeAmount}{' '}
          </p>
        </div>
      </div>
      <div className="expense-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div className="balance-details-container">
          <p className="balance">Your Expenses</p>
          <p className="detail" data-testid="expensesAmount">
            Rs {expenseAmount}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
