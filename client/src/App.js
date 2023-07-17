import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import CartProvider from './components/ContextReducer'
import Cart from "./pages/Cart";
import MyOrder from "./pages/MyOrder";
function App() {
  return (
    <CartProvider>
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/Login' element={< Login />}></Route>
    <Route exact path='/Signin' element={< Signin />}></Route>
    <Route exact path='/myOrder' element={< MyOrder />}></Route>
    </Routes>
    </CartProvider>
  //mongoimport --uri mongodb+srv://Gofood:Guru223418@@cluster0.cwmcitj.mongodb.net/GofoodMERN --collection food_item --jsonArray  --file "C:\Users\HP\OneDrive\Documents\foodData2.json"
  );
}

export default App;
