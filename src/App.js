import logo from './logo.svg';
import './App.css';
import AccessSelector from './components/accessSelector';
import { BrowserRouter as Router, Routes, Route,  Navigate} from 'react-router-dom';
import CreateMarkSheetForm from './components/createMarkSheetForm';
import VerifyMarksheet from './components/verifyMarksheet';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
                <Route exact path= "/" element={<AccessSelector/>} />
                 <Route  path='selectAction' element={<AccessSelector/>} />
                 <Route  path='/createMarksheet' element={<CreateMarkSheetForm/>} />
                 <Route  path='/verifyMarksheet' element={<VerifyMarksheet/>} />
          </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
