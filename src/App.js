import {BrowserRouter, Route, Routes} from 'react-router-dom';
import OpenPage from './Components/OpenPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Offers from './Components/Offers';
import NewAd from "./Components/newAd";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<OpenPage/>}/>
                <Route exact path="/offers" element={<Offers/>}/>
                <Route exact path="/newad" element={<NewAd />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
