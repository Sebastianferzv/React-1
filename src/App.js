import logo from './logo.svg';
import './App.css';
import componente1 from './components/componente1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola como estamos</h1>
        <componente1 lista={[{id:1, nombre:"Francisca"},{id:2,nombre:"Sebastian"}]}></componente1>
      </header>
      
      
    </div>
    
    




  );
}

export default App;
