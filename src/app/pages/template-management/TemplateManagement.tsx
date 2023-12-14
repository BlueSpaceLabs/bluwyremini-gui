import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import { TemplateListViewWrapper } from "./TemplateListView/TemplateListViewWrapper";

const TemplateManagement: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Templates</PageTitle>
      <TemplateListViewWrapper />
    </>
  )
}

export default TemplateManagement
