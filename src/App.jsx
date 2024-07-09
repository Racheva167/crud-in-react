import {Route,Routes} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Create from "./create";
import './App.css';
import Home from './home';
import Update from './update';
import Read from './read';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/create" element={<Create />} />
     <Route path="/" element={<Home />} />
     <Route path="/update/:id" element={<Update />} />
     <Route path="/read/:id" element={<Read />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
