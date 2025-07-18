
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loginlayout from './Layouts/loginLayout'
import Dashboard from './Pages/Dashboard'
import Notaryupload from './Pages/Documents/Notaryupload'
import UserInfoCallection from './Pages/Documents/userInfo'
import Addsigner from './Pages/Documents/Addsigner'
import SlotSelection from './Pages/Slotselection'
import Personaldetails from './Pages/Personaldetails'

function App() {
 return(
    <Routes>
      
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/notary/upload' element={<Notaryupload/>}></Route>
      <Route path='/user/datacallect' element={<UserInfoCallection/>}></Route>
      <Route path='/document/addsigner' element={<Addsigner/>}></Route>
      <Route path='/slotselection' element={<SlotSelection/>}></Route>
      <Route path='/user/details' element={<Personaldetails/>}></Route>

  
 </Routes>

 )
}

export default App
