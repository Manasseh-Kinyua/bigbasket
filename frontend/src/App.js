import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingScreen from './screens/LandingScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductScreen from './screens/ProductScreen';

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
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
