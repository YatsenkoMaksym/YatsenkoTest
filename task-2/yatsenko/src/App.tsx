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
import "./index.css";
function App() {
  const date = new Date();
  const imgs = document.getElementsByTagName("img");
  const [number, setNumber] = useState(imgs.length);
  const [imager, setImage] = useState<string | null>(null);
  const [array,setArray]= useState(
    [
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
      eleven,
      twelve,
    ]
  )
  // const array = [
  //   one,
  //   two,
  //   three,
  //   four,
  //   five,
  //   six,
  //   seven,
  //   eight,
  //   nine,
  //   ten,
  //   eleven,
  //   twelve,
  // ];
  return (
    <div className="relative">
      count :{" "}
      {imgs.length === 0 ? (
        <button
          onClick={() => {
            setNumber(imgs.length);
          }}
        >
          get count
        </button>
      ) : (
        <button onClick={() => {
          setNumber(imgs.length);
        }}>New number is - {number}. Click again to update</button> 
      )}
      <hr />
      time:{" "}
      {`${date.getDate()}:${date.getMonth()+1}:${date.getFullYear()} ${date.getHours()}:${date.getUTCMinutes()}`}
      {imager && (
        <div className="relative grid z-2 h-full place-items-center">
          <div className="bg-slate-900 w-screen top-0 min-h-screen nine:h-[100vh] fixed overflow-auto opacity-90"></div>
          <div className="bg-slate-600 rounded-xl p-16 z-[4] fixed top-5 nine:left-[20%] flex gap-5 max-w-[40rem]">
            <img src={imager} className="w-4/5" />
            <button
              className="rounded-2xl bg-slate-500 p-10 place-self-center"
              onClick={() => {
                setImage(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div
        id="ruller"
        className="bg-slate-300 grid nine:grid-cols-4 nine:grid-rows-3 five:grid-cols-2 grid-cols-1 p-5 gap-4 w-4/5 place-self-center place-items-center"
      >
        {array.map((item,id) => (
          <div className="relative" key={id}>
            <img
            
              src={item}
              onClick={() => {
                setImage(item);
              }}
            />
            <button onClick={()=>{
              setArray((prev)=>prev.filter((need)=>need!==item))
            }} className="absolute top-5 left-5 bg-red-500 px-3 py-1 rounded-full">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
