import React, { useMemo } from 'react';
import Rosa from './Rosa';
import '../styles/RosaContainer.css';

const RosaContainer: React.FC = () => {
  const rosas = useMemo(() => {
    return Array.from({ length: 20 }).map((_, index) => {
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const size = `${Math.random() * 60 + 50}px`;

      return <Rosa key={index} left={left} top={top} size={size} />;
    });
  }, []);

  return <div className="rosa-container">{rosas}</div>;
};

export default RosaContainer;