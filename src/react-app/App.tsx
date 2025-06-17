import { Route , Routes} from "react-router";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

export default function App(){
  return (
    <>
    
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/projects" element={<Projects/>}/>
      <Route path = "/blog" element={<Blog/>}/>
    </Routes>
    
    </>
  );
};



