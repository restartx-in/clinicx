import './style.scss'

const SubmitButton = ({ onClick, type, disabled, isLoading = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="submit_button2">
      {isLoading ? (
        <span className="submit_button2-loader"></span> // 👈 Loader when true
      ) : (
        <span className="submit_button2-text fs18 fw500 ">
          {type === 'add' ? 'Submit' : 'Update'}
        </span>
      )}
    </button>
  )
}
export default SubmitButton
