import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
  }
`;

const ShaderPlane = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={2} // Double-sided rendering
      />
    </mesh>
  );
};

export default ShaderPlane;



