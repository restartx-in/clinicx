import SettingsIconBackButton from '@/apps/user/components/SettingsIconBackButton'
import PageTitle from '@/components/PageTitle'
import './style.scss'

// Accept the special function as 'onBackClick'
const SettingsBackButton = ({ title, onBackClick }) => {
  return (
    <div className="settings_backbutton">
      {/* 
        If 'onBackClick' exists, it means we are on a page that needs
        special back button behavior (like Profile Settings).
        We pass that function to the IconBackButton's 'onClick' prop.
        If 'onBackClick' does not exist, the back button is not shown.
      */}
      {onBackClick && <SettingsIconBackButton onClick={onBackClick} />}
      
      <PageTitle title={title} />
    </div>
  )
}

export default SettingsBackButton
