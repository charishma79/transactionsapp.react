import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  onAddDetailedTransactions = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const transactionOptions = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = transactionOptions
    const newTransaction = {
      id: v4(),
      titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteHistory = id => {
    const {transactionsList} = this.state
    const filteredTransactionsList = transactionsList.filter(
      eachId => eachId.id !== id,
    )
    this.setState({
      transactionsList: filteredTransactionsList,
    })
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeInput = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expenseAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachTransaction.amount
      }
    })

    return expenseAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expenseAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expenseAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expenseAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="money-container">
          <div className="money-bg-container">
            <h1 className="heading">Hi, Richard </h1>
            <p className="text">
              Welcome back to your
              <span className="para"> Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expenseAmount={expenseAmount}
          />

          <div className="transaction-history-container">
            <form
              className="transaction-form-container"
              onSubmit={this.onAddDetailedTransactions}
            >
              <h1 className="transaction-text">Add Transaction</h1>
              <label htmlFor="title-box" className="label-title">
                TITLE
              </label>
              <input
                type="text"
                id="title-box"
                className="title-input"
                value={titleInput}
                placeholder="TITLE"
                onChange={this.onChangeTitleInput}
              />
              <label htmlFor="amount-box" className="label-title">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount-box"
                className="title-input"
                value={amountInput}
                placeholder="AMOUNT"
                onChange={this.onChangeAmountInput}
              />
              <label htmlFor="select" className="label-title">
                TYPE
              </label>
              <select
                id="select"
                className="title-input"
                value={optionId}
                onChange={this.onChangeTypeInput}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                    className="option-input"
                  >
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>

            <div className="transactions-container">
              <h1 className="history">History</h1>
              <div className="transactions-list-container">
                <ul className="transactions-list">
                  <li className="item-list">
                    <p className="item">Title</p>
                    <p className="item">Amount</p>
                    <p className="item">Type</p>
                  </li>
                  {transactionsList.map(eachTransactionItem => (
                    <TransactionItem
                      transactionDetails={eachTransactionItem}
                      key={eachTransactionItem.id}
                      deleteTransactionHistory={this.deleteHistory}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
