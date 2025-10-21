import IconBackButton from '@/apps/user/components/IconBackButton'
import PageTitle from '@/components/PageTitle'
import './style.scss'

const PageTitleWithBackButton = ({ title }) => {

  return (
    <div className="page_title_with_backbutton">
      <IconBackButton />
      <PageTitle title={title} />
    </div>
  )
}

export default PageTitleWithBackButton