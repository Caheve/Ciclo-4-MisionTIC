import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Componentes/Navegacion';
import Cargar from './Componentes/Cargar';


function App() {
  return (
    <div className="App">
      <Navegacion enlace1='Inicio' enlace2='Nuevo' enlace3='Login' />
      <Cargar/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
