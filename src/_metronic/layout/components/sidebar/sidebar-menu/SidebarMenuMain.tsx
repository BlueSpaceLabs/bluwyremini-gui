import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem to='/channels' icon='whatsapp' title='Channels' fontIcon='bi-layers' />
      <SidebarMenuItem to='/contactmanagement' icon='phone' title='Manage Contacts' fontIcon='bi-layers' />
      <SidebarMenuItem to='/messages' icon='messages' title='Messages' fontIcon='bi-layers' />
      
      <SidebarMenuItem to='/campaignmanagement' icon='abstract-33' title='Campaign Management' fontIcon='bi-layers' />
      <SidebarMenuItem to='/staticdatamanagement' icon='data' title='Static Data' fontIcon='bi-layers' />
      <SidebarMenuItem to='/templatemanagement' icon='document' title='Templates' fontIcon='bi-layers' />
      <SidebarMenuItem to='/tickets' icon='element-plus' title='Tickets' fontIcon='bi-layers' />
     
        <SidebarMenuItemWithSub
        to='#'
        title='Settings'
        icon='setting-2'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/sendmessage' title='Send Message' hasBullet={true} />
        <SidebarMenuItem to='/profile' title='Profile' hasBullet={true} />
        <SidebarMenuItem to='/faqs' title='FAQs' hasBullet={true} />
      </SidebarMenuItemWithSub>

    </>
  )
}

export {SidebarMenuMain}
