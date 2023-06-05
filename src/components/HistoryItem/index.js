import './index.css'

const HistoryItem = props => {
  const {eachHistory, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onClickDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <p className="date">{timeAccessed}</p>
      <div className="logo-title-domain-container">
        <img src={logoUrl} className="history-item-logo" alt="domain logo" />
        <div className="history-item-text-container">
          <p className="history-item-title">{title}</p>
          <p className="history-item-url">{domainUrl}</p>
        </div>
        <button
          className="delete-btn"
          data-testId="delete"
          type="button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
