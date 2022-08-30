import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import WhatIsAkacoin from './components/Home/WhatIsAkacoin';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='what-is-ako' element={<WhatIsAkacoin />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
