import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Items from './Components/Items/Items';
import Marks from './Components/Marks/Marks';
import PhoneBar from './Components/PhoneBar/PhoneBar';




function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold underline'>my big big header</h1>
      <h1>this is my home page</h1>
      <Items></Items>
      <Marks></Marks>
      <PhoneBar></PhoneBar>
    </div>

  );
}

export default App;
