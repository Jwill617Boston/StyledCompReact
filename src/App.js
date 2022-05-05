import "./App.css";
import Profile from "./comp/profile/Profile";

import styled from "styled-components";

const StyledComp = styled.div``;
function App() {
   return (
      <div className="App">
         <StyledComp>
            <header className="App-header">
               <p>Jason is that dude</p>
               <Profile />
            </header>
         </StyledComp>
      </div>
   );
}

export default App;
