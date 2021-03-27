// A) ----------------- All Imports --------------------
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

// B) ------------------ Component ----------------------
const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
}) => {
  // 2) Event Handlers
  // 2.1) Play + Pause funtionality

  const playSongHandler = () => {
    if (isPlaying) {
      // if the isPlaying state is true & we click the pause button, stop the music and make isPlaying false
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      // else, play the music on the click and make isPlaying true
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // 2.3) Drag Slider
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, current: e.target.value});
  };

  // 2.4) Skipping Forward & Backward
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      }
    }
  };

  // 3) Functions
  // 3.1) Format time in seconds and minutes
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  // 4) State

  // 5) Elements
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.current)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.current}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
