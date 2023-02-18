import './index.css'

const LanguageButtonItem = props => {
  const {ButtonItemData, onClickUpdatingImage, isActiveButton} = props
  const {buttonText} = ButtonItemData
  const onClickLanguageButton = () => {
    onClickUpdatingImage(buttonText)
  }

  const ActiveButtonClass = isActiveButton ? 'Active-button' : 'Language-button'
  return (
    <li className="list-item">
      <button
        type="button"
        className={ActiveButtonClass}
        onClick={onClickLanguageButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageButtonItem
