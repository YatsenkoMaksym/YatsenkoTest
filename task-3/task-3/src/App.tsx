import { useEffect, useState } from "react";
import { UniType } from "./models/uni";
function App() {
  const [uni, setUni] = useState<UniType[]>([]);
  const [country, setCountry] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=${country}`
        );
        const result:UniType[] = await response.json();
        setUni(result);
      }
      catch(error){
        console.error("Error",error)
      }
    }
      getData();
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCountry(input);
  };
  const handleReset = () => {
    setInput("");
    setCountry("");
    setUni([])
  };
  return (
    <main>
      <div>
        <h1>Search by country name</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">submit</button>
          <button type="button" onClick={handleReset}>
            reset
          </button>
        </form>
      </div>
      {uni &&
        uni.map((uniType,index) => (
          <div key={`${uniType.domains[0]}-${index}`}>
            <h2>University: {uniType.name}</h2>
            <h3>Country: {uniType.country}</h3>
            <p>Alpha code:{uniType.alpha_two_code}</p>
            <p>domains{uniType.domains.map((item,index)=>(<div key={`${item}-${index}`}>{item}</div>))}</p>
            <a href={uniType.web_pages[0]}>link</a>
          </div>
        ))}
    </main>
  );
}

export default App;
