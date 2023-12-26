import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import {db} from "./Firebase";
import {updateDoc, doc, deleteDoc, getDocs, collection, addDoc} from "firebase/firestore";
import Loading from "./Components/HelperComponents/Loading";
import MyIndex from "./Components/MyIndex";

//Create Operation
async function addDataToDB( newTodo , setIsOpen , setTodos , setLoading )
{
    setIsOpen(false)
    await addDoc( collection(db,"todos") , newTodo ).then() ;
    getDataFromDB(setTodos , setLoading).then(()=>
        {
            toast.success("Todo Added Successfully",{ style: { fontWeight: "bold" , fontSize: "larger"  , borderRadius: '10px' } })
        }
    )
}

// Update Operation
async function updateDataToDB( todo , setTodos , setLoading )
{
    await updateDoc(doc(db , "todos" , todo.id) , todo)
    getDataFromDB(setTodos , setLoading).then(()=>{toast.success("Todo Updated")})
}

async function updateDoneToDB( todo , setTodos , setLoading )
{
    await updateDoc(doc(db, "todos", todo.id), {...todo , done:true})
    getDataFromDB(setTodos , setLoading).then(()=>{toast("Task Completed",{icon:"🎉"})})
}


// Read Operation
async function getDataFromDB(setTodos , setLoading)
{
    const querySnapshot = await getDocs(collection(db,"todos"))
    const temp = querySnapshot.docs.map((doc)=>{
        return { ...doc.data() , "id": String(doc.id) }
    })
    await setTodos(temp)
    setLoading(false)
}










// Delete Operation
async function deleteDataFromDB(todoId ,  toggle , setTodos , setLoading)
{
    if (window.confirm("Are you sure you want to delete ?"))
    {
        await deleteDoc(doc(db , "todos" , todoId)).then()
        getDataFromDB(setTodos , setLoading).then(()=>{toast.success("Todo Deleted")})
    }
    else
        toast.error("Deletion Cancelled")
}


export default function App() {

    const day =
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 shadow-blue-200" viewBox="0 0 20 20" fill="currentColor">

            <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
            />
        </svg>

    const night =
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
        </svg>


    const [todos , setTodos] = useState([])
    const [loading ,setLoading] = useState(true)

    const [todoTheme,setTodoTheme] = useState("max-w-9xl flex justify-between bg-orange-200 shadow-2xl mt-12 mb-20 mx-auto px-28 py-6 rounded-2xl border-solid border-4 border-orange-300")
    const [isOpen, setIsOpen] = useState(false)
    const [isUpdateOpen , setIsUpdateOpen] = useState(false)
    const [btnText,setBtnText] =useState(night)
    const [btnIcon,setBtnIcon] = useState("text-stone-700 transition ease-in-out mx-auto")
    const [dayNight,setDayNight] = useState("flex items-center  rounded-tl-2xl rounded-bl-2xl fixed top-32 right-0 bg-slate-500  h-14 w-28")
    const [Theme,setTheme] =useState("absolute top-0 left-0 right-0")




    useEffect(()=>{ getDataFromDB( setTodos , setLoading) },[])







    function toggle ()
    {

        if(Theme==="absolute top-0 left-0 right-0 bg-gray-600 min-h-screen")
        {
            setTheme("absolute top-0 left-0 right-0")
            setBtnText(night)
            setBtnIcon("text-stone-700 transition ease-in-out mx-auto")
            setDayNight("flex items-center  rounded-tl-2xl rounded-bl-2xl fixed top-32 right-0 bg-slate-500  h-14 w-28")
            setTodoTheme("max-w-9xl flex justify-between bg-orange-200 shadow-xl mt-12 mb-20 mx-auto px-28 py-6 rounded-2xl ")
            toast(" Bye bye Dark Mode" , { icon: '👏' })
        }

        else {
            setTheme("absolute top-0 left-0 right-0 bg-gray-600 min-h-screen")
            setDayNight("flex items-center  rounded-tl-2xl rounded-bl-2xl fixed top-32 right-0 bg-white  h-14 w-28")
            setBtnIcon("text-yellow-400 transition ease-in-out mx-auto")
            setBtnText(day)
            setTodoTheme("text-white max-w-9xl flex justify-between bg-gray-900 shadow-xl shadow-blue-200 mt-12 mb-20 mx-auto px-28 py-6 rounded-2xl ")
            toast("Dark Mode Activated", {
                icon: '🌙',
                style: {
                    border: "2px solid white",
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            })
        }
    }


    return (
        <div className="relative ">
            {

                loading?
                    <Loading/>
                    :
                    <MyIndex
                        updateDoneToDB={updateDoneToDB}
                        updateDataToDB={updateDataToDB}
                        isOpen={isOpen}
                        addDataToDB={addDataToDB}
                        Theme={Theme}
                        setIsOpen={setIsOpen}
                        dayNight={dayNight}
                        toggle={toggle}
                        btnIcon={btnIcon}
                        btnText={btnText}
                        todos={todos}
                        todoTheme={todoTheme}
                        deleteDataFromDB={deleteDataFromDB}
                        setTodos={setTodos}
                        setLoading={setLoading}
                        setIsUpdateOpen={setIsUpdateOpen}
                        isUpdateOpen={isUpdateOpen}
                    />

            }
        </div>
    )
}