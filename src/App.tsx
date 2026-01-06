
import PlusIcon from './icons/PlusIcon'
import { Button } from './components/ui/Button'
import ShareIcon from './icons/ShareIcon'
import Card from './components/Card'


function App() {
  

  return (
    <section className='columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-7xl mt-20 mx-auto'>
      
      {/* <Button variant="primary" text='Add Content' onClick={()=>{}} size="md" startIcon={<PlusIcon size="lg"></PlusIcon>}></Button>
      <Button variant="secondary" text='Share Brain' onClick={()=>{}} size="md" startIcon={<ShareIcon size='lg'></ShareIcon>}></Button> */}
      <Card type="twitter" title="first tweet"></Card>
      <Card type="youtube" title="polymath"></Card>
      <Card type="instagram" title="valorant latest update"></Card>
      <Card type="pinterest" title="snekars"></Card>

    </section>
  ) 
}

export default App
