import "./app.css";
import { useState } from "react";
import axios from "axios";

import { Wrapper, Item } from "./components";

const App = () => {
   const [data, setData] = useState({});
   const getData = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
         console.log("Res", res.data);
         setData(res.data);
      });
   };

   console.log("Data", data);

   return (
      <>
         <Wrapper>
            <button onClick={getData}>
               <h1>Ditto Stats</h1>
            </button>
            <Item>
               <h1>Name</h1>
               {data.name}
            </Item>
            <Item>
               <h1>Weight</h1>
               {data.weight}
            </Item>
         </Wrapper>
      </>
   );
};

export default App;
