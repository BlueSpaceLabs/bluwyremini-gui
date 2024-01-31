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
import { Box } from "@mui/material";

import CampaignStatus from "./DashboardCards/CampaignStatus";
import ChannelWiseActiveUsers from './DashboardCards/ChannelWiseActiveUsers';
import OutBoundCampaign from './DashboardCards/OutBoundCampaign'

import BarChart from './DashboardCards/Barchart'

const DashboardPage: FC = () => (
  <>
        {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      <ChannelWiseActiveUsers />
      <OutBoundCampaign />
    

      <div className='col-xl-4'>
        <Box className="card bg-success card-xl-stretch mb-xl-8" style={{backgroundColor:""}}>
         <Box className="card-body">
          <Box className="text-white fw-bold fs-2 mb-1 mt-1">
          Templates
          </Box>
          <br/>
              <Box className={`fw-semibold text-lightgray`}>
              Create
              </Box>
             <br/>
             <button className='btn btn-primary' style={{backgroundColor:"green",color:"white",marginRight:0}}>Template Management</button>
         </Box>
        </Box>
      </div>
    </div>
      {/* end::Row */}
     
           {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <Box className="card bg-dark card-xl-stretch mb-xl-8" style={{backgroundColor:""}}>
         <Box className="card-body"><br/>
         <br/><h1 style={{color:"white", textAlign:"center"}}>Perfomance <br/> Metrics</h1>
         </Box>
        </Box>
      </div>


      <div className='col-xl-4'>
        <Box className="card bg-white card-xl-stretch mb-xl-8" style={{backgroundColor:""}}>
         <BarChart/>
        </Box>
      </div>

      <div className='col-xl-4'>
        <Box className="card bg-info card-xl-stretch mb-xl-8" style={{backgroundColor:""}}>
         <Box className="card-body"><br/>
         <br/><h1 style={{color:"white", textAlign:"center"}}>Bot Analytics</h1><br/>
         </Box>
         
        </Box>
      </div>
    </div>
      {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-6'>
        <Box className="card bg-warning card-xl-stretch mb-xl-8" style={{backgroundColor:""}}>
         <Box className="card-body"><br/>
         <br/><h1 style={{color:"white", textAlign:"center"}}>Agent Metrics</h1>
         <center><small>(last 30 days)</small><br/><br/></center>
         </Box>
         <br/>
        </Box>
      </div>

      <div className='col-xl-3'>
        <Box className="card bg-success card-xl-stretch mb-xl-8" style={{backgroundColor:""}}>
         <Box className="card-body"><br/>
         <br/><h3 style={{color:"white", textAlign:"center"}}>Write to us for any new
features that you may
need</h3>
         <center><button className='btn btn-primary' style={{backgroundColor:"green",color:"white",marginRight:0}}>Write to Us</button></center>
         </Box>
         <br/>
        </Box>
      </div>


      <div className='col-xl-3'>
        <Box className="card bg-dark card-xl-stretch mb-xl-8" style={{backgroundColor:""}}>
         <Box className="card-body"><br/>
         <br/><h3 style={{color:"white", textAlign:"center"}}>Explore platform APIs</h3>
         <br/> <center><center><button className='btn btn' style={{backgroundColor:"lightgray",color:"white",marginRight:0}}>API Settings</button></center></center>
         </Box>
         
        </Box>
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
