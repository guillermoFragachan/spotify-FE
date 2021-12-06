import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import PlayerBar from "./components/PlayerBar";
import Home from "./views/Home";
import Artist from "./views/Artist";
import Album from "./views/Album";
import Search from "./views/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="container-master">
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist/:artistId" element={<Artist />} />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </SideBar>
      </div>
      <PlayerBar />
    </BrowserRouter>
  );
}


export default App;