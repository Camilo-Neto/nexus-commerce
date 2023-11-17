import { Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/Main/Profile'
import Homepage from './pages/Main/HomeView'
import DrinksPage from './pages/Main/Drinks'
import AddProducts from './pages/Main/AddProducts'
import Burguers from './pages/Main/Burguer'
import Delivery from './pages/Main/Delivery'
import MainPage from './pages/Main'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Homepage />}/>
        <Route path='burguers' element={<Burguers />}/>
        <Route path='profile' element={<ProfilePage />}/>
        <Route path='drinks' element={<DrinksPage />}/>
        <Route path='addproducts' element={<AddProducts />}/>
        <Route path='delivery' element={<Delivery />}/>
      </Route>

    </Routes>
  )
}
