import {useState} from "react";
import EditTodo from "../TodoComponent/EditTodo";
import NormalTodo from "../TodoComponent/NormalTodo";

export default function Todo({ dynamicCSS , updateDoneToDB ,  todo , todoTheme , deleteDataFromDB , todos , setTodos , toggle , setLoading , updateDataToDB ,  setIsOpen , isUpdateOpen , setIsUpdateOpen})
{
    const [updateTodo,setUpdateTodo]= useState(false)
    return(

        <div>
            {
                updateTodo?
                    <EditTodo dynamicCSS={dynamicCSS} todo={todo} setUpdateTodo={setUpdateTodo}  setTodos={setTodos} setLoading={setLoading}  todoTheme={todoTheme} updateDataToDB={updateDataToDB} />


                    :
                    <NormalTodo todo={todo}
                                 deleteDataFromDB={deleteDataFromDB}
                                 updateDoneToDB={updateDoneToDB}
                                  updateDataToDB={updateDataToDB}
                                  setLoading={setLoading}
                                  setTodos={setTodos}
                                  toggle={toggle}
                                  setIsUpdateOpen={setIsUpdateOpen}
                                  isUpdateOpen={isUpdateOpen}
                                  setIsOpen={setIsOpen}
                                  setUpdateTodo={setUpdateTodo}
                                  todoTheme={todoTheme}
                                    dynamicCSS={dynamicCSS}/>
            }
        </div>

    )
}