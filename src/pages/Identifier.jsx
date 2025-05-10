import React, { useEffect } from 'react';
import { initTeachableMachine } from '../utils/teachableMachine';


const Identifier = () => {
  useEffect(() => {
    // Limpia el contenedor al desmontar
    return () => {
      const containers = ['webcam-container', 'label-container'];
      containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) container.innerHTML = '';
      });
    };
  }, []);

  const handleStart = async () => {
    try {
      await initTeachableMachine();
    } catch (error) {
      console.error('Error al cargar el modelo:', error);
    }
  };

  return (
    <div className="identifier-container">
      <h1>Identificador con Teachable Machine</h1>
      <button onClick={handleStart}>Iniciar Cámara</button>
      <div id="webcam-container"></div>
      <div id="label-container"></div>
    </div>
  );
};

export default Identifier;