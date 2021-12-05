import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import PlayerBar from './components/PlayerBar';
import Home from './views/Home';
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
    {/* <SideBar/> */}
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artist/:artistId" element={<div>home</div>} />
      <Route path="/album/:albumId" element={<div>home</div>} />

    </Routes>
    {/* <PlayerBar /> */}

   
    
    </Layout>
    </BrowserRouter>
  )
}

export default App