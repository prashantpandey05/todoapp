import SaveCancel from "../List Components/SaveCancel";
import Done from "../List Components/Done";
import {useRef} from "react";
import TodoDate from "../List Components/TodoDate";



export default function  EditTodo({todo, setUpdateTodo , todoTheme , updateDataToDB , setTodos , setLoading} )
{
    const title = useRef(todo.title)
    const category = useRef(todo.category)
    const description = useRef(todo.description)
    const options = ["Work" , "Personal" , "Study" , "Urgent" , "Other"]



    options.splice(options.indexOf(todo.category),1)
    options.unshift(todo.category)


    function change()
    {
        if(title.current.value!=="")
        {
            todo = {...todo , title: title.current.value}
        }

        if(description.current.value !== "")
        {
            todo = {...todo , description: description.current.value}
        }

        todo = {...todo , category: category.current.value}
        updateDataToDB(todo , setTodos , setLoading)
        setUpdateTodo(false)
    }



    return(
            <div className={todoTheme} >

                <div className={"flex justify-between flex-col"} >
                    <div className="flex mb-8 font-bold  text-4xl">
                      <h2 className="mr-4 underline">Title:</h2>
                      <input ref={title} type={"text"}   placeholder={todo.title} />
                    </div>

                    <div className="flex mb-10  text-2xl">
                      <h2 className="mr-4 underline font-bold">Description:</h2>
                      <input ref={description} type="text" placeholder={todo.description} />
                    </div>

                    <SaveCancel setUpdateTodo={setUpdateTodo} todo={todo} change={change}  />
                </div>


                <div className={"flex justify-between flex-col"}>
                    <select ref={category} className="w-full  rounded-xl px-2 focus:border-indigo-500 focus:shadow-md" placeholder="Select Category of TODO">

                        {options.map((option)=>{
                            return(
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            )
                        })}
                    </select>

                  <Done todoStatus={todo.done}/>
                  <TodoDate time={todo.date.seconds}/>
                </div>

            </div>
    );
}