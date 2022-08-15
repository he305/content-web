import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import WatchingListPage from './pages/WatchingListPage'
import StreamListPage from './pages/StreamListPage';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/watchingList" element={<WatchingListPage/>} />
        <Route path='/streamList' element={<StreamListPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
