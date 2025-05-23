import React, { useRef, useEffect, useState } from 'react';
import { FaCamera, FaStopCircle, FaTrashAlt, FaEraser } from 'react-icons/fa';
import '../assets/css/main.css';

function GesturePage() {
  const [isRecording, setIsRecording] = useState(false);
  const [translation, setTranslation] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }).catch(error => {
        console.error('Error accessing webcame:', error);
        setIsRecording(false);
      });
    } else {
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  }, [isRecording]);

  const handleClearAll = () => {
  setTranslation('');
  };

  // const handleClearLast = () => {
  //   const newValue = translation.trim().split(' ');
  //   newValue.pop();
  //   setTranslation(newValue.join(' '));
  // };


  return (
    <div className="gesture-page min-vh-100">
      <div className="left-panel">
        <div className="main-content">
          <div className="camera-panel">
            {!isRecording ? (
              <>
                <FaCamera className="camera-icon" />
                <span className='translating-label'></span>
              </>
            ) : null}
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className={`video ${!isRecording ? 'hidden' : ''}`}
            />
          </div>

          <div className="record-button">
            <button
              onClick={() => {
                setIsRecording(!isRecording);
                setTranslation('');
              }}
              className={isRecording ? 'stop' : 'start'}
            >
              {isRecording ? <FaStopCircle /> : <FaCamera />}
              {isRecording ? ' Stop Recording' : ' Start Recording'}
            </button>
          </div>
        </div>
      </div>

      <div className="translation-panel">
        <div className='translation-header'>
          <h2 className='title'>Translation Result</h2>
          <div className="translation-actions">
            <button onClick={handleClearAll} title="Clear All">
              <FaTrashAlt />
            </button>
            {/* <button onClick={handleClearLast} title="Clear Last">
              <FaEraser />
            </button> */}
          </div>
        </div>
        
        <div className="translation-box">
          {translation ? translation : (
            <>
            <p>Start recording to see translation results</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GesturePage;