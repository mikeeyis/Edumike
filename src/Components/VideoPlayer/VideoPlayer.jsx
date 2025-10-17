import React, { use, useRef } from 'react'
import './VideoPlayer.css'
import Video from '../../Assets/student.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
  
  const player = useRef(null);

  const closePlayer = (e)=>{
    if(e.target === player.current){
      setPlayState(false)
    }
  }
  
  
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={Video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer