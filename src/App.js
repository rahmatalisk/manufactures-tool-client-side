
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Sheared/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorder from './Pages/Dashboard/Myorder';
import Myprofile from './Pages/Dashboard/Myprofile';
import Myreviews from './Pages/Dashboard/Myreviews';
import Blog from './Pages/Blog';
import AllOrder from './Pages/Dashboard/AllOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Admin from './Pages/Dashboard/Admin';
import AddProduct from './Pages/Dashboard/AddProduct';
import RequireAuth from './Sheared/RequireAuth';
import NotFoundPage from './Sheared/NotFoundPage';
import Portfolio from './Pages/Portfolio/Portfolio';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<RequireAuth><Myorder></Myorder></RequireAuth>}></Route>
          <Route path='review' element={<RequireAuth><Myreviews></Myreviews></RequireAuth>}></Route>
          <Route path="profile" element={<RequireAuth><Myprofile></Myprofile></RequireAuth>}></Route>
          <Route path='allorder' element={<RequireAuth><AllOrder></AllOrder></RequireAuth>}></Route>
          <Route path='manageproduct' element={<RequireAuth><ManageProduct></ManageProduct></RequireAuth>}></Route>
          <Route path='admin' element={<RequireAuth><Admin></Admin></RequireAuth>}></Route>
          <Route path='addproduct' element={<RequireAuth><AddProduct></AddProduct></RequireAuth>}></Route>
          <Route path="profile" element={<RequireAuth><Myprofile></Myprofile></RequireAuth>}></Route>
          
        </Route>
        <Route path='/registation' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
