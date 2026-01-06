
import DashBoard from './pages/DashBoard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { BrowserRouter,Routes,Route } from 'react-router-dom'



function App() {
  
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/signin' element={<SignIn></SignIn>}></Route>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>

    </Routes>
    </BrowserRouter>
  ) 
}

export default App
