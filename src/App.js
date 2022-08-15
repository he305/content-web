import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import WatchingListPage from './pages/WatchingListPage'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/watchingList" element={<WatchingListPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
