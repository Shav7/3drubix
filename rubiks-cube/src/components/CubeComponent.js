import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { Color } from 'three';

function CubeComponent() {
  const groupRef = useRef();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [colorOffset, setColorOffset] = useState(0);

  // Rotate the cube group and update color offset for gradient animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation.y;
      groupRef.current.rotation.x = rotation.x;
    }

    // Update color offset for gradient animation
    setColorOffset((prevOffset) => (prevOffset + delta * 0.5) % 1);
  });

  // Event handlers for mouse movement
  const handleMouseDown = (e) => {
    e.stopPropagation();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    setRotation((prevRotation) => ({
      x: prevRotation.x + e.movementY * 0.01,
      y: prevRotation.y + e.movementX * 0.01,
    }));
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const cubes = [];

  // Create multiple smaller cubes within a group
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const hue = (colorOffset + (x + 1) * 0.2 + (y + 1) * 0.2 + (z + 1) * 0.2) % 1;
        const color = new Color().setHSL(hue, 0.8, 0.6); // Increased saturation and lightness for brighter colors

        cubes.push(
          <RoundedBox
            key={`${x}-${y}-${z}`}
            position={[x * 2.1, y * 2.1, z * 2.1]}
            args={[2, 2, 2]} // Width, Height, Depth
            radius={0.3} // Radius for rounded corners
            smoothness={5} // Smoothness of the rounded edges
          >
            <meshStandardMaterial
              metalness={0.8} // Increased metalness for a shinier look
              roughness={0.2} // Decreased roughness for a more reflective surface
              color={color} // Animated gradient color
              emissive={color} // Add an emissive color for extra brightness
              emissiveIntensity={0.5} // Adjust emissive intensity for a glowing effect
            />
          </RoundedBox>
        );
      }
    }
  }

  return (
    <group
      ref={groupRef}
      onPointerDown={handleMouseDown}
      onPointerMove={(e) => e.stopPropagation()}
    >
      {cubes}
    </group>
  );
}

export default CubeComponent;











