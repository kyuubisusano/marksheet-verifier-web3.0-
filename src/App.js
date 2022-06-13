import logo from './logo.svg';
import './App.css';

import AccessSelector from './components/accessSelector';
import { BrowserRouter as Router, Routes, Route,  Navigate} from 'react-router-dom';
import CreateMarkSheetForm from './components/createMarkSheetForm';
import VerifyMarksheet from './components/verifyMarksheet';
import Home from './components/home'


function App() {
  //const [rollNo, setrollNo] = useState('');
  //const [marks, setmarks] = useState({});


 
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
                <Route exact path= "/" element={<Home/>} />
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
