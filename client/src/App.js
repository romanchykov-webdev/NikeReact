import Header from "./components/header/Header";
import Popup from "./components/poup/Popup";
import {useSelector} from "react-redux";
import Step from "./components/step/Step";
import Main from "./components/main/Main";


function App() {
    const popupIsActive=useSelector(state => state.popupSlice.isActive)
  return (
    <div className="App">
     <Header/>
        {popupIsActive &&<Popup/>}
        <Main/>

        <Step/>
    </div>
  );
}

export default App;
