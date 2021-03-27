import React, {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
  // Ref
  const audioRef = useRef(null);
  // Functions
  // Event Handlers
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

  // Elements
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
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
          icon={faPlay}
        />
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleRight} />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
