import React, { useEffect, useRef } from 'react';
import './Tile.css';

/**
 * Props
 * - videoTrack: MediaStreamTrack?
 * - audioTrack: MediaStreamTrack?
 * - isLocalPerson: boolean
 * - isLarge: boolean
 * - isLoading: boolean
 * - onClick: Function
 */
export default function Tile(props) {
  const videoEl = useRef(null);
  const audioEl = useRef(null);

  /**
   * When video track changes, update video srcObject
   */
  useEffect(() => {
    videoEl.current &&
      (videoEl.current.srcObject = new MediaStream([props.videoTrack]));
  }, [props.videoTrack]);

  /**
   * When audio track changes, update audio srcObject
   */
  useEffect(() => {
    audioEl.current &&
      (audioEl.current.srcObject = new MediaStream([props.audioTrack]));
  }, [props.audioTrack]);

  function getLoadingComponent() {
    return props.isLoading && <p className="loading">Loading...</p>;
  }

  function getVideoComponent() {
    return (
      props.videoTrack && (
        <video
          className="flex-shrink-0 mx-auto"
          autoPlay
          muted
          playsInline
          ref={videoEl}
        />
      )
    );
  }

  function getAudioComponent() {
    return (
      !props.isLocalPerson &&
      props.audioTrack && <audio autoPlay playsInline ref={audioEl} />
    );
  }

  function getClassNames() {
    let classNames =
      'tile border-4 border-solid border-light-blue-500 bg-black rounded-full';
    classNames += props.isLarge ? ' large' : ' small';
    props.isLocalPerson && (classNames += ' local');
    return classNames;
  }

  return (
    <li>
      <div className={getClassNames()} onClick={props.onClick}>
        <div className="background" />
        {getLoadingComponent()}
        {getVideoComponent()}
        {getAudioComponent()}
      </div>
      <div className="space-y-2">
        <div className="mt-3 text-xs font-medium lg:text-sm">
          <h3>{props.userName}</h3>
        </div>
      </div>
    </li>
  );
}
