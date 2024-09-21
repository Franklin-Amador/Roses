
// import React, { useState, useEffect, useMemo } from 'react';

// interface RosaProps {
//   left: string;
//   top: string;
//   size: string;
// }

// const Rosa: React.FC<RosaProps> = ({ left, top, size }) => {
//   const [position, setPosition] = useState({ x: parseFloat(left), y: parseFloat(top) });
//   const color = useMemo(() => `hsl(${Math.random() * 60 + 300}, 100%, ${Math.random() * 20 + 40}%)`, []);
//   const stemColor = useMemo(() => `hsl(${Math.random() * 60 + 90}, 100%, 30%)`, []);

//   useEffect(() => {
//     const moveRosa = () => {
//       const newX = Math.random() * 100;
//       const newY = Math.random() * 100;
//       setPosition({ x: newX, y: newY });
//     };

//     const interval = setInterval(moveRosa, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="rosa"
//       style={{
//         position: 'absolute',
//         left: `${position.x}%`,
//         top: `${position.y}%`,
//         width: size,
//         height: size,
//         transition: 'all 10s ease-in-out',
//       }}
//     >
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 100 100"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Tallo */}
//         <path
//           d="M50,100 Q45,75 50,50 T50,0"
//           stroke={stemColor}
//           strokeWidth="2"
//           fill="none"
//         />
        
//         {/* Hojas */}
//         <path
//           d="M50,75 C60,70 70,80 50,85 C30,80 40,70 50,75"
//           fill={stemColor}
//         />
//         <path
//           d="M50,45 C60,40 70,50 50,55 C30,50 40,40 50,45"
//           fill={stemColor}
//         />

//         {/* Pétalos */}
//         {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
//           <g key={index} transform={`rotate(${rotation}, 50, 50)`}>
//             <path
//               d="M50,50 C60,40 70,30 50,10 C30,30 40,40 50,50"
//               fill={color}
//               opacity="0.7"
//             >
//               <animateTransform
//                 attributeName="transform"
//                 attributeType="XML"
//                 type="rotate"
//                 from={`0 50 50`}
//                 to={`360 50 50`}
//                 dur="20s"
//                 repeatCount="indefinite"
//               />
//             </path>
//             <path
//               d="M50,50 C55,45 60,40 50,30 C40,40 45,45 50,50"
//               fill={`hsl(${parseInt(color.split(',')[0].split('(')[1]) + 20}, 100%, ${parseInt(color.split('%')[1]) - 10}%)`}
//               opacity="0.7"
//             />
//           </g>
//         ))}

//         {/* Centro de la rosa */}
//         <circle cx="50" cy="50" r="5" fill="#FFD700" />
//         <circle cx="50" cy="50" r="3" fill="#FF8C00" />
//       </svg>
//     </div>
//   );
// };

// export default Rosa;

import React, { useState, useEffect, useMemo } from 'react';

interface RosaProps {
  left: string;
  top: string;
  size: string;
}

const Rosa: React.FC<RosaProps> = ({ left, top, size }) => {
  const [position, setPosition] = useState({ x: parseFloat(left), y: parseFloat(top) });
  
  const petalColor = useMemo(() => {
    const hue = Math.random() * 60 + 300; // Rango de 300 a 360 (tonos de rosa a rojo)
    return `hsl(${hue}, ${Math.random() * 30 + 70}%, ${Math.random() * 20 + 50}%)`;
  }, []);
  
  const innerPetalColor = useMemo(() => {
    const hslMatch = petalColor.match(/\d+/g);
    const hsl = hslMatch ? hslMatch.map(Number) : [0, 0, 0];
    return `hsl(${hsl[0]}, ${hsl[1]}%, ${Math.max(hsl[2] - 15, 30)}%)`;
  }, []);

  useEffect(() => {
    const moveRosa = () => {
      const newX = Math.random() * 100;
      const newY = Math.random() * 100;
      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(moveRosa, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="rosa"
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: size,
        height: size,
        transition: 'all 10s ease-in-out',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pétalos mejorados */}
        {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((rotation, index) => (
          <g key={index} transform={`rotate(${rotation}, 50, 50)`}>
            <path
              d="M50,50 C60,40 65,15 50,0 C35,15 40,40 50,50"
              fill={petalColor}
              opacity="0.9"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from={`0 50 50`}
                to={`360 50 50`}
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M50,50 C55,45 58,25 50,15 C42,25 45,45 50,50"
              fill={innerPetalColor}
              opacity="0.9"
            />
          </g>
        ))}

        {/* Centro de la rosa */}
        <circle cx="50" cy="50" r="7" fill="#FFD700" />
        <circle cx="50" cy="50" r="5" fill="#FFA500" />
      </svg>
    </div>
  );
};

export default Rosa;