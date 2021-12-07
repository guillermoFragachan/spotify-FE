import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import PlayerBar from "./components/PlayerBar";
import Home from "./views/Home";
import Artist from "./views/Artist";
import Album from "./views/Album";
import LikePage from "./views/LikePage";
import Playlist from "./views/Playlist";

function App() {
  return (
    <BrowserRouter>
      <div className="container-master">
        <SideBar>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/artist/:artistId" element={<Artist />} />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/liked/" element={<LikePage />} />
            <Route path="/playlist/:playlistId" element={<Playlist />} />

          </Routes>
        </SideBar>
      </div>
      <PlayerBar />
    </BrowserRouter>
  );
}

export default App;