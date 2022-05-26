
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Blogs/Blogs';
import ContactUs from './Pages/Home/ContactUs/ContactUs';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import Items from './Pages/Home/Items/Items';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/inventory" element={<Items></Items>}></Route>
        <Route path="/inventory/:inventoryId" element={
          <RequireAuth>
             <ItemDetails></ItemDetails>
          </RequireAuth>
       }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/addItem" element={
        <RequireAuth>
            <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path="/myItems" element={
        <RequireAuth>
            <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path="/manageItem" element={
        <RequireAuth>
            <ManageItem></ManageItem>
        </RequireAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
     <Footer></Footer>
     <ToastContainer />
    </div>
  );
}

export default App;
