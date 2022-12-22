import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer nombre="Alejandro"/>
      </header>
    </div>
  );
}

export default App;
