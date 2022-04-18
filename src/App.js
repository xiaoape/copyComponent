import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <Loading boxStyle={{width: '30px', height: '30px'}} circleStyle={{ background: 'red'}}></Loading>
    </div>
  );
}

export default App;
