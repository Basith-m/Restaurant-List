import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import View from './pages/View';

function App() {
  return (
    <>
      <Header />
      <hr />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* after /: it is path parameter id is a variable */}
        <Route path='/view/:id' element={<View />}></Route> 
      </Routes>
      <hr />
      <Footer />
    </>
  );
}

export default App;
