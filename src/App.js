import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import { Route, Routes } from 'react-router';
import About from './components/About';
import BlogList from './components/BlogList';
import SingleBlog from './components/SingleBlog';

function App() {
  return (
    <>
    <Routes>
        <Route path = "/" element = { <Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<BlogList/>}/>
        <Route path='/blogdetails/:id' element={<SingleBlog/>}/>
    </Routes>
    </>
  );
}

export default App;
