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
      <div className="bg-red-500 grid grid-cols-4 grid-rows-3 p-5 gap-4 w-4/5 place-self-center place-items-center">
        <img src={one} className="row-start-1" />
        <img src={two} className="row-start-1" />
        <img src={three} className="row-start-1" />
        <img src={four} className="row-start-1" />
        <img src={five} className="row-start-2" />
        <img src={six} className="row-start-2" />
        <img src={seven} className="row-start-2" />
        <img src={eight} className="row-start-2" />
        <img src={nine} className="row-start-3" />
        <img src={ten} className="row-start-3" />
        <img src={eleven} className="row-start-3" />
        <img src={twelve} className="row-start-3" />
        
      </div>
    </div>
  );
}

export default App;
