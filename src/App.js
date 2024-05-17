import Home from './Component/Home';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Reg from './Component/Reg';
function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
<Route path='Registration' element={<Reg/>}/>
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
