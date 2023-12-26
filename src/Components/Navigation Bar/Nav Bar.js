import {Link} from "react-router-dom";

export default function NavBar({setIsOpen})
{
  return(
    <div>
      <nav className={"fixed z-30 top-0 left-0 right-0 h-20 flex justify-between px-32 text-white mx-auto bg-gray-800 items-center"}>
        <div className={"flex"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
            </svg>
            <h1 className={"font-bold text-4xl text-orange-400 px-4 pr-20"} >ToDo-Tasks</h1>

            <Link to={"/"} className={"flex justify-center text-md bg-gray-600 rounded-lg px-3 mr-2 transition ease-in-out hover:bg-gray-500" }>
                <button  >Home</button>
            </Link>





            <Link to={"/Contact-us"} className={"flex justify-center text-md bg-gray-600 rounded-lg px-3 mx-2 transition ease-in-out hover:bg-gray-500"}>
                <button>Contact Us</button>
            </Link>






        </div>
        <div className="flex">
            <button onClick={()=>{setIsOpen(true)}} className={"text-md bg-indigo-700 px-5 py-2 rounded-lg transition ease-in-out hover:bg-indigo-500"} >+&nbsp;&nbsp;Add New Task</button>
        </div>
      </nav>
    </div>
  );
}