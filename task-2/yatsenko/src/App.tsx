import one from "../../task-2/1.jpg";
import two from "../../task-2/2.jpg";
import three from "../../task-2/3.jpg";
import four from "../../task-2/4.jpg";
import five from "../../task-2/5.jpg";
import six from "../../task-2/6.jpg";
import seven from "../../task-2/7.jpg";
import eight from "../../task-2/8.jpg";
import nine from "../../task-2/9.jpg";
import ten from "../../task-2/10.jpg";
import eleven from "../../task-2/11.jpg";
import twelve from "../../task-2/12.jpg";
import { useState } from "react";
import './index.css'
function App() {
  const date = new Date();
  const imgs = document.getElementsByTagName("img")
  const [number, setNumber]= useState(imgs.length)

  return (
    <div>
      count : {imgs.length===0?<button onClick={()=>{setNumber(imgs.length)}}>get count</button>:number}
      <hr />
      time:{" "}
      {`${date.getDate()}:${date.getMonth()}:${date.getFullYear()} ${date.getHours()}:${date.getUTCMinutes()}`}
      <div id="ruller" className="bg-slate-300 grid nine:grid-cols-4 nine:grid-rows-3 five:grid-cols-2 grid-cols-1 p-5 gap-4 w-4/5 place-self-center place-items-center">
        <img src={one} className="" />
        <img src={two} className="" />
        <img src={three} className="" />
        <img src={four} className="" />
        <img src={five} className="" />
        <img src={six} className="" />
        <img src={seven} className="" />
        <img src={eight} className="" />
        <img src={nine} className="" />
        <img src={ten} className="" />
        <img src={eleven} className="" />
        <img src={twelve} className="" />
        
      </div>
    </div>
  );
}

export default App;
