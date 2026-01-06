
import PlusIcon from '../icons/PlusIcon'
import { Button } from '../components/ui/Button'
import ShareIcon from '../icons/ShareIcon'
import Card from '../components/ui/Card'
import CreateContentModel from '../components/CreateContentModel'
import { useState } from 'react'


function DashBoard() {
  const [open,setOpen] = useState(false);
  

  return (
    <>
    <nav>
      <div className='flex gap-4 mt-6 pr-6 w-full justify-end'>
      <Button variant="primary" text='Add Content'  onClick={()=>setOpen(true)} size="md" startIcon={<PlusIcon size="lg"></PlusIcon>}></Button>
     
      <Button variant="secondary" text='Share Brain' onClick={()=>{}} size="md" startIcon={<ShareIcon size='lg'></ShareIcon>}></Button> 
       </div>
    </nav>
    <section className='columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-7xl mt-12 mx-auto'>
      
      <Card type="twitter" title="first tweet"></Card>
      <Card type="youtube" title="polymath"></Card>
      <Card type="instagram" title="valorant latest update"></Card>
      <Card type="pinterest" title="snekars"></Card>
      <CreateContentModel open={open} onClose={()=>setOpen(false)}></CreateContentModel>
    </section>
    </>
  ) 
}

export default DashBoard
