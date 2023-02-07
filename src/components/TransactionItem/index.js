import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransactionHistory} = props
  const {titleInput, amount, type, id} = transactionDetails

  const onClickDelete = () => {
    deleteTransactionHistory(id)
  }

  return (
    <li className="items-list">
      <p className="text">{titleInput}</p>
      <p className="text">Rs {amount}</p>
      <p className="text">{type}</p>
      <button
        className="button"
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
