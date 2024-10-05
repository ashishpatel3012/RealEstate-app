


import './App.css'


import { Footer } from './assets/components/Footer'
import { HomePage } from './assets/components/HomePage'
import { Navbar } from './assets/components/navbar'
import { SigninPage } from './assets/components/signin'
import { SignupPage } from './assets/components/signup'
import { Routes,Route } from 'react-router-dom'
// import { Home } from './pages/home'
// import { About } from './pages/About'
// import { Contact } from './pages/Contact'
import { Profile } from './assets/components/profile'
import { ContactPage } from './assets/components/contactPage'
import { HomeDetail } from './assets/components/HomeDetail'
import { CardDetail } from './assets/components/CardDetail'
import { Card } from './assets/components/Card'
import { useState } from 'react'
import { Cart } from './assets/components/Cart'




// import { Navbar } from './assets/components/navbar'







function App() {
  
  
  const [cart, setCart] = useState([])
  
 

  return (
   < >
   
   {/* <div>
   <Navbar/>
  <Routes>
    
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </div> */}
<Navbar size={cart.length}/>
    <Routes>
    <Route path='/navbar' element={<Navbar/> } />
      <Route path='/' element={<HomePage/> } />
      <Route path='/signup' element={<SignupPage/> } />
      <Route path='/signin' element={<SigninPage/> } />
      <Route path='/card' element={<Card/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/homedetail' element={<HomeDetail/>} />
      <Route path='/carddetail' element={<CardDetail/>} />
      <Route path='/cart' element={<Cart/>} />
      
    </Routes>
   

    
   </>
  )
}

export default App
