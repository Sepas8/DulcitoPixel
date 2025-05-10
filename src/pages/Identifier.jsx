import React, { useRef, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import '@tensorflow/tfjs';

const Identifier = () => {
  const [error, setError] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const webcamContainerRef = useRef(null);
  const webcamRef = useRef(null);
  const modelRef = useRef(null);

  const initCamera = async () => {
    try {
      setError(null);
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 640 },
          height: { ideal: 480 }
        }
      });
      
      const URL = "https://teachablemachine.withgoogle.com/models/oGgbu9X51/";
      modelRef.current = await tmImage.load(`${URL}model.json`, `${URL}metadata.json`);
      
      webcamRef.current = new tmImage.Webcam(400, 400, true);
      await webcamRef.current.setup({ stream });
      
      webcamContainerRef.current.innerHTML = '';
      webcamContainerRef.current.appendChild(webcamRef.current.canvas);
      setIsCameraOn(true);
      
    } catch (err) {
      console.error("Error de cámara:", err);
      setError(`Error: ${err.message}`);
      setIsCameraOn(false);
    }
  };

  const stopCamera = () => {
    if (webcamRef.current) {
      webcamRef.current.stop();
      setIsCameraOn(false);
    }
  };

  return (
    <div className="page-container identifier-container">
      <h1>Identificador</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <div ref={webcamContainerRef} className="webcam-container"></div>
      
      {!isCameraOn ? (
        <button onClick={initCamera} className="btn">
          Activar Cámara
        </button>
      ) : (
        <button onClick={stopCamera} className="btn stop-btn">
          Detener Cámara
        </button>
      )}
    </div>
  );
};

export default Identifier;