import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './User/login';
import { Register } from './User/register';
import { Index } from './Main/index';
import { Category } from './Main/category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/index' element={<Index />}></Route>
        <Route path='/category' element={<Category />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;