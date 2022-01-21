import './styles/index.css';
import {
    Routes,
    Route,
    BrowserRouter
} from 'react-router-dom';
import Main from './components/Main';
import ShopeeHeader from './components/ShopeeHeader'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/shopee" element={<ShopeeHeader/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
