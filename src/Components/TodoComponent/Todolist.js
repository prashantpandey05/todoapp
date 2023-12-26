import Todo from "../Model/Todo";
export default function Todolist({ updateDoneToDB ,todos , todoTheme , deleteDataFromDB , setTodos , toggle , setLoading , updateDataToDB , setIsOpen , setIsUpdateOpen , isUpdateOpen})
{
    return(
        <div>

            <div className={"max-w-10xl mb-20 mx-auto rounded-2xl border-2 border-red-300"} >
                <div className={"bg-red-300 rounded-t-xl py-4 font-semibold text-5xl text-center"}>--Uncompleted Task--</div>
                {
                    todos.map(
                        (todo)=>{
                            if(!todo.done)
                            {
                                return(
                                    <Todo key={todo.id} updateDoneToDB={updateDoneToDB} todo={todo} todoTheme={todoTheme} deleteDataFromDB={deleteDataFromDB}  todos={todos} setTodos={setTodos} setLoading={setLoading} updateDataToDB={updateDataToDB}
                                          toggle={toggle}
                                          setIsOpen={setIsOpen}
                                          setIsUpdateOpen={setIsUpdateOpen}
                                          isUpdateOpen={isUpdateOpen}
                                          dynamicCSS={"border-4 border-red-600 shadow-red-300"}
                                    />
                                );
                            }
                            return null
                        }
                    )
                }
            </div>



            <div className={"max-w-10xl mb-20 mx-auto rounded-2xl border-2 border-green-300"} >
                <div className={"bg-green-300 rounded-t-xl py-4 font-semibold text-5xl text-center"}>--Completed Task--</div>
                {
                    todos.map(
                        (todo)=>{
                            if(todo.done)
                            {
                                return(
                                    <Todo key={todo.id} updateDoneToDB={updateDoneToDB} todo={todo} todoTheme={todoTheme} deleteDataFromDB={deleteDataFromDB}  todos={todos} setTodos={setTodos} setLoading={setLoading} updateDataToDB={updateDataToDB}
                                          toggle={toggle}
                                          setIsOpen={setIsOpen}
                                          setIsUpdateOpen={setIsUpdateOpen}
                                          isUpdateOpen={isUpdateOpen}
                                          dynamicCSS={"border-4 border-green-500 shadow-green-300"}
                                    />
                                );
                            }
                            return null
                        }
                    )
                }
            </div>



        </div>
    )
}