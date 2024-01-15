 import {FC} from 'react'
 import {PageTitle} from '../../../../_metronic/layout/core'
 import SwaggerUI from "swagger-ui-react"
 import "swagger-ui-react/swagger-ui.css"

 const Sendmessage: FC = () => {
   return (
     <>
       <PageTitle breadcrumbs={[]}>Send Message</PageTitle>
     <div><SwaggerUI url="https://qa-bluwyre-assets.s3.ap-south-1.amazonaws.com/openapi-v1.4.json" /></div>
     </>
   )
 }

 export default Sendmessage;