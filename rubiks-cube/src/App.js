import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CubeComponent from './components/CubeComponent';
import PathMorphingComponent from './components/PathMorphingComponent';
import ShaderPlane from './components/ShaderPlane';  // Import the shader component
import './App.css';  // Custom styling

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.navLink}>3D Cube</Link>
          <Link to="/morphing" style={styles.navLink}>Path Morphing</Link>
          <Link to="/shader" style={styles.navLink}>Shader</Link> {/* New shader route */}
        </nav>

        <Routes>
          {/* Route for 3D Cube */}
          <Route path="/" element={<CubePage />} />
          {/* Route for Path Morphing */}
          <Route path="/morphing" element={<MorphingPage />} />
          {/* Route for Shader */}
          <Route path="/shader" element={<ShaderPage />} />  {/* New shader page */}
        </Routes>
      </div>
    </Router>
  );
}

function CubePage() {
  return (
    <div style={styles.fullScreen}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        style={styles.canvasStyle}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <CubeComponent />
        <OrbitControls enableZoom={true} minDistance={5} maxDistance={50} />
      </Canvas>
    </div>
  );
}

function MorphingPage() {
  return (
    <div style={styles.whiteBackground}>
      <PathMorphingComponent />
    </div>
  );
}

// New shader page with ShaderPlane component inside Canvas
function ShaderPage() {
  return (
    <div style={styles.fullScreen}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={styles.canvasStyle}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ShaderPlane />  {/* Render the ShaderPlane component */}
      </Canvas>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navbar: {
    padding: '10px',
    background: '#f0f0f0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #ccc',
  },
  navLink: {
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '18px',
    color: '#333',
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    transition: 'background-color 0.3s ease',
  },
  fullScreen: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvasStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  whiteBackground: {
    backgroundColor: '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;













