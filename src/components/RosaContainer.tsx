import React, { useState, useEffect, useMemo } from 'react';
import Rosa from './Rosa';
import '../styles/RosaContainer.css';

const RosaContainer: React.FC = () => {
  const [baseColor, setBaseColor] = useState('#FF69B4');  // Rosa como color predeterminado
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const rosas = useMemo(() => {
    const minSize = 100; // Tamaño mínimo de una rosa
    const maxSize = 200; // Tamaño máximo de una rosa
    const avgSize = (minSize + maxSize) / 2;
    const count = Math.floor((containerSize.width * containerSize.height) / (avgSize * avgSize * 2));
    
    return Array.from({ length: count }).map((_, index) => {
      const left = `${Math.random() * 90}%`; // Evita que las rosas se salgan del contenedor
      const top = `${Math.random() * 90}%`;
      const size = `${Math.random() * (maxSize - minSize) + minSize}px`;

      return <Rosa key={index} left={left} top={top} size={size} baseColor={baseColor} />;
    });
  }, [baseColor, containerSize]);

  return (
    <div className="rosa-container">
      <div className="color-picker">
        <label htmlFor="colorPicker">Elige el color de las rosas:</label>
        <input
          type="color"
          id="colorPicker"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
        />
      </div>
      {rosas}
    </div>
  );
};

export default RosaContainer;