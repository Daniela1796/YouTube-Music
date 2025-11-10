import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';
import SongCard from './components/SongCard';
import PlaylistCard from './components/PlaylistCard';
import PlaylistSidebar from './components/PlaylistSidebar';
import musicData from './data/musicData';  // ✅ Default import
import './App.css';

function App() {
  // ✅ Acceder a los datos desde el objeto default
  const [currentSong, setCurrentSong] = useState(musicData.songsData[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="app">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        
        <div className="content-wrapper">
          <Player 
            currentSong={currentSong} 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying}
          />

          <div className="content-section">
            <div className="section-header">
              <h2>Escucha de nuevo</h2>
              <button className="ver-todo">Ver todo →</button>
            </div>
            <div className="songs-list">
              {musicData.songsData.slice(0, 3).map(song => (  // ✅ musicData.songsData
                <SongCard key={song.id} song={song} onPlay={handlePlaySong} layout="horizontal" />
              ))}
            </div>
          </div>

          <div className="content-section">
            <div className="section-header">
              <h2>Artistas que sigues</h2>
              <button className="ver-todo">Ver todo →</button>
            </div>
            <div className="songs-list">
              {musicData.songsData.slice(3, 6).map(song => (  // ✅ musicData.songsData
                <SongCard key={song.id} song={song} onPlay={handlePlaySong} layout="horizontal" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <PlaylistSidebar playlists={musicData.playlistsData} />  {/* ✅ musicData.playlistsData */}
    </div>
  );
}

export default App;




