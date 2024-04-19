import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './User/login';
import { Register } from './User/register';
import { Index } from './Main/index';
import { Category } from './Main/category';
import { Dashboard } from './DashBoard/dashboard';
import { Movie } from './DashBoard/movie/movie';
import { MovieAdd } from './DashBoard/movie/movieAdd';
import { MovieUpdate } from './DashBoard/movie/movieUpdate';
import { MovieDetail } from './DashBoard/movie/movieDetail';
import { CategoryDetail } from './DashBoard/category/category';
import { CategoryAdd } from './DashBoard/category/categoryAdd';
import { CategoryUpdate } from './DashBoard/category/categoryUpdate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/index' element={<Index />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/movie' element={<Movie />}></Route>
        <Route path='/movieAdd' element={<MovieAdd />}></Route>
        <Route path='/movieUpdate' element={<MovieUpdate />}></Route>
        <Route path='/movieDetail' element={<MovieDetail />}></Route>
        <Route path='/categoryDetail' element={<CategoryDetail />}></Route>
        <Route path='/categoryAdd' element={<CategoryAdd />}></Route>
        <Route path='/categoryUpdate' element={<CategoryUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;