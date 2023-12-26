import NavBar from "../Navigation Bar/Nav Bar";
import loadingGif from "../../Assets/Images/giphy.webp"

export default function Loading()
{
  return(
    <div className={"relative"}>
        <NavBar/>

        <div className={"flex flex-col border-2 bg-loadingBg  border-amber-600 min-h-screen pt-32"}>

            <img className={"mx-auto mt-44 max-h-full"} src={loadingGif} alt=""/>

        </div>


    </div>
  );
}