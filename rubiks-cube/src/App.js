import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CubeComponent from './components/CubeComponent';

function App() {
  return (
    <Canvas
  camera={{
    position: [0, 0, 20], // Set a farther starting position to allow more zoom out
    fov: 50, // Field of view to control the perspective
  }}
  style={{ height: '100vh', background: '#f0f0f0' }} // Set background to off white or light grey
>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CubeComponent />
      <OrbitControls
        enableZoom={true} // Enable zooming
        minDistance={5} // Minimum distance for zooming in
        maxDistance={50} // Increase this value to allow zooming out further
      />
    </Canvas>
  );
}

export default App;






