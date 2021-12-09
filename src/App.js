import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import PlayerBar from "./components/PlayerBar";
import Home from "./views/Home";
import Artist from "./views/Artist";
import Album from "./views/Album";
import Search from "./views/Search";
import LikePage from "./views/LikePage";
import LibraryAlbums from "./views/LibraryAlbums";
import LibraryPlaylists from "./views/LibraryPlaylists"
import { useEffect } from "react";
import {favoriteSongs} from './store/actions/'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(favoriteSongs());
  }, []);
  return (
    <BrowserRouter>
      <div className="container-master">
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist/:artistId" element={<Artist />} />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/search" element={<Search />} />
            <Route path="/liked/" element={<LikePage />} />
            <Route path="/playlist/:playlistId" element={<LikePage />} />
            <Route path="/library/playlists" element={<LibraryPlaylists />} />
            <Route path="/library/albums" element={<LibraryAlbums />} />
          </Routes>
        </SideBar>
      </div>
      <PlayerBar />
    </BrowserRouter>
  );
}

export default App;