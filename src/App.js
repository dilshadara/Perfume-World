
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import AddInventory from './Pages/Inventory/AddInventory/AddInventory';
// import Inventory from './Pages/Home/Inventory/Inventory';
import InventoryDetail from './Pages/Inventory/InventoryDetail/InventoryDetail';
import ManageInventory from './Pages/Inventory/ManageInventory/ManageInventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyItems from './Pages/MyInventory/MyItems/MyItems';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/perfume/:perfumeId" element={
          <RequireAuth>
              <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>
             <MyItems></MyItems>
          </RequireAuth>
        }></Route>
       
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/manageInventory" element={<ManageInventory
        ></ManageInventory>}></Route>
        <Route path="/addInventory" element={<AddInventory
        ></AddInventory>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
