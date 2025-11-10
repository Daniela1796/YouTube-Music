import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';
import SongCard from './components/SongCard';
import PlaylistCard from './components/PlaylistCard';
import PlaylistSidebar from './components/PlaylistSidebar';
import musicData from './data/musicData';

const songsData = musicData.songsData;
const playlistsData = musicData.playlistsData;
import './App.css';

function App() {
  const [currentSong, setCurrentSong] = useState(songsData[0]);
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
              {songsData.slice(0, 3).map(song => (
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
              {songsData.slice(3, 6).map(song => (
                <SongCard key={song.id} song={song} onPlay={handlePlaySong} layout="horizontal" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <PlaylistSidebar playlists={playlistsData} />
    </div>
  );
}

export default App;



