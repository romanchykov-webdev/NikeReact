import Header from "./components/header/Header";
import Popup from "./components/poup/Popup";
import {useSelector} from "react-redux";
import Step from "./components/step/Step";
import Main from "./components/main/Main";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Footer from "./components/footer/Footer";


function App() {
    const popupIsActive = useSelector(state => state.popupSlice.isActive)
    return (
        <div className="App">
            <Header/>

            <TransitionGroup>
                {popupIsActive && (
                    <CSSTransition classNames="popup" timeout={300}>
                        <Popup/>
                    </CSSTransition>
                )}
            </TransitionGroup>

            <Main/>
            <Footer/>
            <Step/>
        </div>
    );
}

export default App;
