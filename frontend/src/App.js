import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingScreen from './screens/LandingScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path='/' element={ <LandingScreen /> }></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
