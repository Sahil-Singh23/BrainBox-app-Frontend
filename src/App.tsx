
import PlusIcon from './icons/PlusIcon'
import { Button } from './components/ui/Button'
import ShareIcon from './icons/ShareIcon'
import Card from './components/ui/Card'
import CreateContentModel from './components/CreateContentModel'
import { useState } from 'react'


function App() {
  const [open,setOpen] = useState(false);
  

  return (
    <section className='columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-7xl mt-20 mx-auto'>
      
      <Button variant="primary" text='Add Content'  onClick={()=>setOpen(true)} size="md" startIcon={<PlusIcon size="lg"></PlusIcon>}></Button>
      
      <Button variant="secondary" text='Share Brain' onClick={()=>{}} size="md" startIcon={<ShareIcon size='lg'></ShareIcon>}></Button> 
      
      <Card type="twitter" title="first tweet"></Card>
      <Card type="youtube" title="polymath"></Card>
      <Card type="instagram" title="valorant latest update"></Card>
      <Card type="pinterest" title="snekars"></Card>
      <CreateContentModel open={open} onClose={()=>setOpen(false)}></CreateContentModel>
    </section>
  ) 
}

export default App
