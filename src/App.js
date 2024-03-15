import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./App.css"
function App() {
  const [online,setonline] = useState(null);
  let turn = 0
useEffect(()=>{
  const check = ()=>{
    if(window.navigator.onLine){
      setonline("online")
    }else{
      setonline("offline")
  }
  }
  check()
  window.addEventListener("online",check)
  window.addEventListener("offline",check)

  return ()=>{
    window.removeEventListener("online",check)
    window.removeEventListener("offline",check)
  }
})
  return (
    <div className="App flex justify-center items-center h-[100vh]">
        <h1 className="lg:text-[40px] state md:text-[35px] sm:text-[30px] text-[25px] font-bold tracking-[4px]">
          State : <span className={online === "online"?"fot-bold text-lime-500 uppercase":"text-red-500 uppercase"}>
            {online}
          </span>
        </h1>
        <label className="ui-switch absolute top-0 m-10 right-0">
  <input type="checkbox" />
  <div className="slider">
    <div className="circle" onClick={
      ()=>{
        if(turn === 0){
          turn =1
          document.querySelector(".state").classList.add("text-white");
          document.querySelector(".state").classList.remove("text-black");
          document.body.style.backgroundColor="#000"
        }else if(turn === 1){
          turn = 0
          document.querySelector(".state").classList.add("text-black");
          document.querySelector(".state").classList.remove("text-white");
          document.body.style.backgroundColor="#fff"
        }
      }
    }></div>
  </div>
</label>

    </div>
  );
}

export default App;
