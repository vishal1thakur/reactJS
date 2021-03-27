// A) ----------------- All Imports --------------------
import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

// B) ------------------ Component ----------------------
const Player = ({currentSong, isPlaying, setIsPlaying}) => {
  // 1) HTML Ref
  const audioRef = useRef(null);

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

  // 2.2) Song Time Slider
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...setSongInfo, current, duration});
  };

  // 2.3) Drag Slider
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, current: e.target.value});
  };

  // 3) Functions
  // 3.1) Format time in seconds and minutes
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  // 4) State
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
  });

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
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleRight} />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
