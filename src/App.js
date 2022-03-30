import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Resturant from './components/Resturant/Resturant';
import About from './components/About/About';
import Details from './components/Details/Details';
import Contact from './components/Contact/Contact';
import Errorpage from './components/Errorpage/Errorpage';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Resturant></Resturant>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/details/:mealId' element={<Details></Details>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='*' element={<Errorpage></Errorpage>}></Route>
     </Routes> 
     
    </div>
  );
}

export default App;
