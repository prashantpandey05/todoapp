export default function
    SaveCancel({setUpdateTodo , todo , change})
{
  return(

      <div>
          {/*Save*/}
          <button className="text-red-600
                            w-16
                            mr-6
                            rounded-lg
                            border-solid border-4 border-red-600
                            transition ease-in-out
                            hover:bg-red-600
                            hover:text-white"
          onClick={()=>{ change() }}>

              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"/>
              </svg>


          </button>

          {/*Cancel*/}
          <button className="text-purple-600
                            w-16
                            mr-6
                            rounded-lg
                            border-solid border-4 border-purple-600
                            transition ease-in-out
                            hover:bg-purple-600
                            hover:text-white"
          onClick={()=>{setUpdateTodo(false)}}>

              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>


          </button>

      </div>

  );
}