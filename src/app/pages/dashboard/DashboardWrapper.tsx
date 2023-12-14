import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
  StatisticsWidget5,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='user'
            color='danger'
            iconColor='white'
            title='Total Users'
            titleColor='white'
            description='199'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='cheque'
            color='primary'
            iconColor='white'
            title='Conversations'
            titleColor='white'
            description='1234'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='user-tick'
            color='success'
            iconColor='white'
            title='Active Users'
            titleColor='white'
            description='21'
            descriptionColor='white'
          />
        </div>
      </div>
      {/* end::Row */}
     
           {/* begin::Row */}
           <div className='row g-5 g-xl-8'>
           <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='people'
            color='dark'
            iconColor='white'
            title='10'
            titleColor='white'
            description='New Customers'
            descriptionColor='white'
          />
        </div>

       

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='chart-pie-simple'
            color='info'
            iconColor='white'
            title='200'
            titleColor='white'
            description='Messages Sent'
            descriptionColor='white'
          />
        </div>
        
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='chart-simple'
            color='pink'
            iconColor='primary'
            title='11'
            description='Campaigns'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='whatsapp'
            color='warning'
            iconColor='white'
            title='4'
            titleColor='white'
            description='Channels'
            descriptionColor='white'
          />
        </div>

      </div>
      {/* end::Row */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
