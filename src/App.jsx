import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing"
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";


const App = () => {
  return ( 
    <> 
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </>
   );
}
 
export default App;