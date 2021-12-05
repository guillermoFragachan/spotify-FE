import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import PlayerBar from './components/PlayerBar';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="container-master">
      <SideBar>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artist/:artistId" element={<div>home</div>} />
      <Route path="/album/:albumId" element={<div>home</div>} />

    </Routes>

    </SideBar>

    <PlayerBar/>

    </div>

    
    </BrowserRouter>
  )
}

export default App