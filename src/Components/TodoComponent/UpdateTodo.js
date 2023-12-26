import {Dialog} from "@headlessui/react";
import {useRef} from "react";

export default function UpdateTodo({ todo , setIsOpen , isUpdateOpen , setIsUpdateOpen})
{
  const title = useRef(null)
  const category = useRef(null)
  const description = useRef(null)


  const options = ["Work" , "Personal" , "Study" , "Urgent" , "Other"]



  return (
      <Dialog open={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} className="relative z-40">

        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

        <div className="fixed inset-0 flex items-center justify-center p-8">


          <div className={"w-1/2 rounded-xl bg-white"}>


            <form >

              {/*Header*/}
              <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Create New Todo</header>


              {/*Body*/}
              <div className={"py-5 px-8"}>



                <div className={"my-5"}>
                  <p className={"mb-2 text-md font-bold"}>Title</p>
                  <input ref={title} type={"text"}  className="
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                focus:border-indigo-500
                                                                focus:shadow-md" placeholder="Title of TODO"
                          value={todo.title}/>

                </div>

                <div className={"my-5"}>
                  <p className={"mb-2 text-md font-bold"}>Category</p>

                  <select ref={category}  className="
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                focus:border-indigo-500
                                                                focus:shadow-md" placeholder="Select Category of TODO">

                    {options.map((option)=>{
                      return(
                          <option key={option} value={option}>
                            {option}
                          </option>
                      )
                    })}
                  </select>

                </div>

                <div className={"my-5"}>
                  <p className={"mb-2 text-md font-bold"}>Description</p>
                  <input ref={description} type={"text"}  className="
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                focus:border-indigo-500
                                                                focus:shadow-md" placeholder="Description of TODO"
                         value={todo.description}/>
                </div>



              </div>


              {/*Footer*/}
              <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                <button className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} onClick={()=>{setIsOpen(false)}}>Cancel</button>

                <button type={"submit"} className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} >
                  Add Todo
                </button>

              </footer>

            </form>


          </div>
        </div>

      </Dialog>
  )
}