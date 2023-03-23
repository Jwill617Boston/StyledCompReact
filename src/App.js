import "./app.css";
import { useState, useEffect } from "react";
import CompOne from "./components/CompOne";
import axios from "axios";

const App = () => {
   const [data, setData] = useState(["hello"]);
   useEffect(() => {
      axios.get("https://api.publicapis.org/entries").then((res) => {
         setData(res.data.entries);
      });
   }, []);

   console.log(data);

   return (
      <>
         <section>
            <button>Get Data</button>
            <h1>Data</h1>
            <ul></ul>
         </section>
      </>
   );
};

export default App;
