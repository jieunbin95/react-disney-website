import './App.css';
import Nav from './components/Nav'
import { Outlet, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import SearchPage from './Pages/SearchPage';

const Layout=()=>{
  return (
    <div>
      <Nav/>

      <Outlet/>
    </div>
  )
}

function App() {
  return (
   <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<LoginPage/>}></Route>
        <Route path="/main" element={<MainPage/>}></Route>
        <Route path='/:movieId' element={<DetailPage/>}></Route>
        <Route path='/search' element={<SearchPage/>}></Route>
      </Route>
   </Routes>
  );
}

export default App;


