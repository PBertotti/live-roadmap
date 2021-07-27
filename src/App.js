//---------------------------
//File: App.js
//Author: Paulo Bertotti
//Date: 21/09/2020
//Brief: Live roadmap main application file
//---------------------------

//--------------------------
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
//--------------------------

//--------------------------
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
//--------------------------

//--------------------------
export default App;
//--------------------------
