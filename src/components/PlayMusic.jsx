import React from 'react'
import { useState, useEffect } from "react";
import sound from "../music/Transhumanism.mp3"

import EqualizerBar from "../components/Equalizer/EqualizerBar"
import EqualizerBar3 from "../components/Equalizer/EqualizerBar3"
import EqualizerBar4 from "../components/Equalizer/EqualizerBar4"

export default function PlayMusic() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
  
    const play = () => {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        if (audio) {
          audio.play();
        } else {
          const newAudio = new Audio(sound);
          newAudio.currentTime = currentTime;
          newAudio.play();
          setAudio(newAudio);
        }
        setIsPlaying(true);
      }
    };
  
    useEffect(() => {
      return () => {
        if (audio) {
          audio.pause();
          setCurrentTime(audio.currentTime);
          setAudio(null);
          setIsPlaying(false);
        }
      };
    }, []);
  

  return (
        <div className='playBtn' onClick={play} style={{ width: "auto", position: "relative" }}>
          <EqualizerBar isPlaying={isPlaying} />
          <EqualizerBar3 isPlaying={isPlaying} />
          <EqualizerBar4 isPlaying={isPlaying} />
        </div>
  )
}
