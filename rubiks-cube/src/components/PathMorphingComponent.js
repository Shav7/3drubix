import React, { useEffect } from 'react';
import anime from 'animejs';

const PathMorphingComponent = () => {
  useEffect(() => {
    anime({
      targets: '#morphingPath',
      d: [
        {
          value: 'M250,50 L323,172 L410,172 L343,258 L371,371 L250,310 L129,371 L157,258 L90,172 L177,172 Z' 
        }, // Star
        {
          value: 'M250,100 C370,100 400,250 250,400 C100,250 100,100 250,100 Z'
        }  // Circle
      ],
      easing: 'easeInOutQuad',
      duration: 2000,
      loop: true,
      direction: 'alternate',
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px', backgroundColor: '#fff' }}>
      <h2>Path Morphing: Star to Circle</h2>
      <svg width="500" height="500" viewBox="0 0 500 500">
        <path
          id="morphingPath"
          fill="none"
          stroke="black"
          strokeWidth="3"
          d="M250,50 L323,172 L410,172 L343,258 L371,371 L250,310 L129,371 L157,258 L90,172 L177,172 Z" // Star shape
        />
      </svg>
    </div>
  );
};

export default PathMorphingComponent;







