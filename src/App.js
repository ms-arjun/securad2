import{ Route,Routes} from 'react-router-dom'
import Nav from './Comps/Nav';
import Vulnerblities from './Comps/Vulnerblities';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/vulnerblities" element={<Vulnerblities/>} />
     </Routes>
    </div>
  );
}

export default App;
