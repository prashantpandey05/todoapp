import Title from "../List Components/Title";
import Description from "../List Components/Description";
import DoneDeleteUpdate from "../List Components/DoneDeleteUpdate";
import Category from "../List Components/Category";
import Done from "../List Components/Done";
import TodoDate from "../List Components/TodoDate";

export default function NormalTodo({ dynamicCSS , todo , deleteDataFromDB , updateDoneToDB , setLoading , setTodos , toggle , setIsUpdateOpen , isUpdateOpen , setIsOpen , setUpdateTodo , todoTheme })
{
  return(
    <div className={ todoTheme + dynamicCSS } >
        <div className={"flex justify-between flex-col"}>
            <Title todoTitle={todo.title}/>
            <Description todoDesc={todo.description}/>
            <DoneDeleteUpdate
                updateDoneToDB={updateDoneToDB}
                todo={todo}
                todoId={todo.id}
                deleteDataFromDB={deleteDataFromDB}
                setTodos={setTodos}
                toggle={toggle}
                setLoading={setLoading}
                setIsUpdateOpen={setIsUpdateOpen}
                isUpdateOpen={isUpdateOpen}
                setIsOpen={setIsOpen}
                setUpdateTodo={setUpdateTodo}
            />
        </div>


        <div className={"flex justify-between flex-col"}>
            <Category todoCategory={todo.category}/>
            <Done todoStatus={todo.done}/>
            {/* <TodoDate time={todo.date.seconds}/> */}
            <TodoDate time={todo.date ? todo.date.seconds : null}/>

        </div>
    </div>
  );
}