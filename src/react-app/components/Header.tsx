import { Link, Outlet } from "react-router-dom";

export default function Header(){
  return (
    <>
    
    <div className="flex flex-row justify-center  bg-cyan-900 text-center text-xl">
        <div className="flex justify-around items-center min-w-1/2 min-h-15 ">
            <div className="hover:font-bold w-50 transition-all mx-2 px-3 rounded-xl ">
                <Link to="/">Home</Link>
            </div>
            <div className="hover:font-bold w-60 transition-all mx-2 px-3 rounded-xl ">
                <Link to="/about">About Me</Link>
            </div>
            <div className="hover:font-bold w-60 transition-all mx-2 px-3 rounded-xl ">
                <Link to="/projects">My Projects</Link>
            </div>
            <div className="hover:font-bold w-50 transition-all mx-2 px-3 rounded-xl ">
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    </div>
    {/* <Outlet/> */}
    </>
  );
};
