import { Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/Main/Profile'
import Homepage from './pages/Main/HomeView'
import DrinksPage from './pages/Main/Drinks'
import AddProducts from './pages/Main/AddProducts'
import MainPage from './pages/Main'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Homepage />}/>
        <Route path='profile' element={<ProfilePage />}/>
        <Route path='drinks' element={<DrinksPage />}/>
        <Route path='addproducts' element={<AddProducts />}/>
      </Route>

    </Routes>
  )
}
