import { HashRouter, Routes, Route } from 'react-router-dom'
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
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductCreateScreen from './screens/ProductCreateScreen';

function App() {
  return (
    <div>
      <HashRouter>
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
            <Route path='/payment' element={ <PaymentScreen /> }></Route>
            <Route path='/placeorder' element={ <PlaceOrderScreen /> }></Route>
            <Route path='/order/:id' element={ <OrderScreen /> }></Route>
            <Route path='/admin/users' element={ <UserListScreen /> }></Route>
            <Route path='/admin/orders' element={ <OrderListScreen /> }></Route>
            <Route path='/admin/products' element={ <ProductListScreen /> }></Route>
            <Route path='/admin/user/:id/edit' element={ <UserEditScreen /> }></Route>
            <Route path='/admin/product/:id/edit' element={ <ProductEditScreen /> }></Route>
            <Route path='/admin/product/create' element={ <ProductCreateScreen /> }></Route>
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
