import React, { useRef, useState } from 'react';
import { FaVideo, FaTrashAlt } from 'react-icons/fa';
import '../assets/css/main.css';

function VideoUploader({ onUpload }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        accept="video/*"
        onChange={onUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button onClick={handleButtonClick} className="start">
        <FaVideo /> Select Video
      </button>
    </>
  );
}

function VideoPage() {
  const [videoFile, setVideoFile] = useState(null);
  const [translation, setTranslation] = useState('');
  const videoRef = useRef(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoFile(videoURL);
      setTranslation('Processing translation...'); // Dummy text or trigger processing
    }
  };

  const handleClearAll = () => {
    setTranslation('');
    setVideoFile(null);
    if (videoRef.current) {
      videoRef.current.src = '';
    }
  };

  return (
    <div className="video-page min-vh-100">
      <div className="left-panel">
        <div className="main-content">
          <div className="video-panel">
            {!videoFile ? (
              <>
                <FaVideo className="video-icon" />
                <span className='translating-label'></span>
              </>
            ) : null}
            <video
              ref={videoRef}
              src={videoFile || ''}
              controls
              className={`video ${!videoFile ? 'hidden' : ''}`}
            />
          </div>

          <div className="upload-button">
            <VideoUploader onUpload={handleVideoUpload} />
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
          </div>
        </div>

        <div className="translation-box">
          {translation ? (
            <p>{translation}</p>
          ) : (
            <p>Select a video to see translation results</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoPage;