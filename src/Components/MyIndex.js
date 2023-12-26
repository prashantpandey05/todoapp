import {Toaster} from "react-hot-toast";
import NavBar from "./Navigation Bar/Nav Bar";
import Todolist from "./TodoComponent/Todolist";
import AddNewTodo from "./TodoComponent/AddNewTodo";

export default function MyIndex({ updateDoneToDB , setLoading , addDataToDB , isOpen , Theme , setIsOpen , dayNight , toggle , btnIcon , btnText , todos , todoTheme , deleteDataFromDB , setTodos , updateDataToDB , setIsUpdateOpen , isUpdateOpen})
{
  return(
      <div className={Theme}>
          <Toaster/>
          <NavBar setIsOpen={setIsOpen} />

          <div className={dayNight}>
              <button onClick={()=>{toggle()}} className={btnIcon} >
                  {btnText}
              </button>
          </div>

          <div className="mt-36 ">

              <Todolist updateDoneToDB={updateDoneToDB} todos={todos} todoTheme={todoTheme} deleteDataFromDB={deleteDataFromDB} setTodos={setTodos} toggle={toggle} setLoading={setLoading} updateDataToDB={updateDataToDB} setIsUpdateOpen={setIsUpdateOpen} setIsOpen={setIsOpen} isUpdateOpen={isUpdateOpen} />
              <AddNewTodo todos={todos}  setIsOpen={setIsOpen} isOpen={isOpen} addDataToDB={addDataToDB} setTodos={setTodos} setLoading={setLoading} />


          </div>

      </div>
  );
}