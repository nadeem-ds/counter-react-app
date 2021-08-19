import './App.css';
import Nadeem from './component/Nadeem';
import Counter from './component/Counter';
import Game from './component/Game';
import Todoapp from './component/Todoapp';


function App() {
  return (
    <div className="App">
    <Nadeem name="Anwar"/>,   
    <Counter/>
    <Game/>

    <Todoapp/>
    </div>
  );
}

export default App;
