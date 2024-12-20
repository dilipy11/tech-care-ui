import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Patient from './pages/Patient/Patient';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Patient />
    </div>
  );
}

export default App;
