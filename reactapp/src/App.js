import './App.css';
import User from './components/User';


function App() {
  return (
    <div className='container'>
      <div className="row">
        <User firstName="Vusal Imanov"/>
        <User firstName="Vusal Aliyev"/>
        <User firstName="Onur Ismayilov"/>
      </div>
    </div>
  );
}

export default App;
