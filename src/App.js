import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import WhatIsAkacoin from './components/Home/WhatIsAkacoin';
import Dashboard from './components/Dashboard/Dashboard';
import QuickStartGuide from './components/Home/QuickStartGuide';
import QuickStartGuide2 from './components/Home/QuickStartGuide2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import ManageBanner from './components/Dashboard/ManageBanner';
import ManageWallets from './components/Dashboard/ManageWallets';
import InputBannerItem from './components/Dashboard/InputBannerItem';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/whatisako' element={<WhatIsAkacoin />}></Route>
        <Route path='/quickStartGuide' element={<QuickStartGuide />}></Route>
        <Route path='/quickStartGuide2' element={<QuickStartGuide2 />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<ManageBanner />} />
          <Route path='managewallets' element={<ManageWallets />}></Route>
          <Route path='inputbanneritem' element={<InputBannerItem />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
