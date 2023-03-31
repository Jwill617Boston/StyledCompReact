import "./app.css";
import { useState, createContext, useContext } from "react";
import axios from "axios";
import { Wrapper, Item } from "./components";

const App = () => {
   const [data, setData] = useState([]);
   const [name, setName] = useState("");

   const getData = () => {
      axios.get("https://pokeapi.co/api/v2/berry").then((res) => {
         console.log("Res", res.data.results);
         setData([...data, ...res.data.results]);
      });
   };

   const clearData = () => {
      setData([]);
   };

   console.log("Data", data);

   return (
      <>
         <Wrapper>
            <button onClick={getData}>
               <h1>Click For Data</h1>
            </button>
            <label>
               Text input:
               <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button
               onClick={() => {
                  setData([{ name: name }, ...data]);
               }}
            >
               Add Name
            </button>
            <button onClick={clearData}>
               <h1>Clear</h1>
            </button>

            {data ? (
               data.map((item) => <Item key={item.name}>{item.name}</Item>)
            ) : (
               <Item>
                  <h3>Get Data</h3>
               </Item>
            )}
         </Wrapper>
      </>
   );
};

export default App;
