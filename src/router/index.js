import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

  import Dasboard from "../pagues/dasboard/dasboard";

  import Home from "../pagues/home/home";
import Login from "../pagues/login/Login";


  const RoutesPrincial=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/dasboard" element={<Dasboard></Dasboard>}></Route>
                <Route
                path="*"
                element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    )
  }

export default RoutesPrincial