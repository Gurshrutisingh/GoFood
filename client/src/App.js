import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (

    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/Login' element={< Login />}></Route>
    <Route exact path='/Signin' element={< Signin />}></Route>
    </Routes>
  
  //mongoimport --uri mongodb+srv://Gofood:Guru223418@@cluster0.cwmcitj.mongodb.net/GofoodMERN --collection food_item --jsonArray  --file "C:/Users/HP/Downloads/foodData2.json"
  );
}

export default App;
