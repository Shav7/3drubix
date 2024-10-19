import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Cube = () => {
  const meshRef = useRef();

  // Rotate cube continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

export default function CubeCanvas() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube />
      </Canvas>
    </div>
  );
}












