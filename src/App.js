import './App.css';
import Logo from './image/logo.png';

function App() {
  return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
        <img 
        src={Logo}
        className='freecodecamp-logo'
        alt='Logo de Freecodecamp'>
         </img>
        </div>
        <div className= 'tareas-lista-principal'>
          <h1>Mis tareas</h1>
        </div>
    </div>
  );
}

export default App;
