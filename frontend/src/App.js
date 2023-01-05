import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingScreen from './screens/LandingScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path='/' element={ <LandingScreen /> }></Route>
            <Route path='/products' element={ <ProductsScreen /> }></Route>
            <Route path='/product/:id' element={ <ProductScreen /> }></Route>
            <Route path='/cart' element={ <CartScreen /> }></Route>
            <Route path='/cart/:id' element={ <CartScreen /> }></Route>
            <Route path='/shipping' element={ <ShippingScreen /> }></Route>
            <Route path='/login' element={ <LoginScreen /> }></Route>
            <Route path='/register' element={ <RegisterScreen /> }></Route>
            <Route path='/profile' element={ <ProfileScreen /> }></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
