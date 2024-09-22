

// import React, { useState, useEffect, useMemo } from 'react';

// interface RosaProps {
//   left: string;
//   top: string;
//   size: string;
//   baseColor: string;
// }

// const Rosa: React.FC<RosaProps> = ({ left, top, size, baseColor }) => {
//   const [position, setPosition] = useState({ x: parseFloat(left), y: parseFloat(top) });
  
//   const colors = useMemo(() => {
//     const rgb = hexToRgb(baseColor);
//     const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    
//     return {
//       petal: `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`,
//       innerPetal: `hsl(${hsl[0]}, ${Math.min(hsl[1] + 10, 100)}%, ${Math.max(hsl[2] - 10, 30)}%)`,
//     };
//   }, [baseColor]);

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
//         {/* Pétalos externos estilizados */}
//         {[...Array(8)].map((_, index) => (
//           <g key={`outer-${index}`} transform={`rotate(${index * 45}, 50, 50)`}>
//             <path
//               d="M50,50 Q60,25 50,0 Q40,25 50,50"
//               fill={colors.petal}
//               opacity="0.9"
//             >
//               <animateTransform
//                 attributeName="transform"
//                 attributeType="XML"
//                 type="rotate"
//                 from={`0 50 50`}
//                 to={`360 50 50`}
//                 dur="40s"
//                 repeatCount="indefinite"
//               />
//             </path>
//           </g>
//         ))}

//         {/* Pétalos internos estilizados */}
//         {[...Array(8)].map((_, index) => (
//           <g key={`inner-${index}`} transform={`rotate(${index * 45 + 22.5}, 50, 50)`}>
//             <path
//               d="M50,50 Q57,35 50,20 Q43,35 50,50"
//               fill={colors.innerPetal}
//               opacity="0.95"
//             >
//               <animateTransform
//                 attributeName="transform"
//                 attributeType="XML"
//                 type="rotate"
//                 from={`0 50 50`}
//                 to={`-360 50 50`}
//                 dur="35s"
//                 repeatCount="indefinite"
//               />
//             </path>
//           </g>
//         ))}

//         {/* Centro de la rosa (siempre amarillo) */}
//         <circle cx="50" cy="50" r="10" fill="#FFD700" />
//         <circle cx="50" cy="50" r="7" fill="#FFA500" />
//         <circle cx="50" cy="50" r="4" fill="#FF8C00" />
//       </svg>
//     </div>
//   );
// };

// // Funciones auxiliares para la conversión de colores (sin cambios)
// function hexToRgb(hex: string) {
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result ? {
//     r: parseInt(result[1], 16),
//     g: parseInt(result[2], 16),
//     b: parseInt(result[3], 16)
//   } : { r: 0, g: 0, b: 0 };
// }

// function rgbToHsl(r: number, g: number, b: number) {
//   r /= 255, g /= 255, b /= 255;
//   const max = Math.max(r, g, b), min = Math.min(r, g, b);
//   let h = 0, s, l = (max + min) / 2;

//   if (max === min) {
//     h = s = 0;
//   } else {
//     const d = max - min;
//     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//     switch (max) {
//       case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//       case g: h = (b - r) / d + 2; break;
//       case b: h = (r - g) / d + 4; break;
//     }
//     h /= 6;
//   }

//   return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
// }

// export default Rosa;

import React, { useState, useEffect, useMemo } from 'react';

interface RosaProps {
  left: string;
  top: string;
  size: string;
  baseColor: string;
}

const Rosa: React.FC<RosaProps> = ({ left, top, size, baseColor }) => {
  const [position, setPosition] = useState({ x: parseFloat(left), y: parseFloat(top) });
  
  const colors = useMemo(() => {
    const rgb = hexToRgb(baseColor);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    
    return {
      petal: `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`,
      innerPetal: `hsl(${hsl[0]}, ${Math.min(hsl[1] + 10, 100)}%, ${Math.max(hsl[2] - 10, 30)}%)`,
      highlight: `hsl(${hsl[0]}, ${Math.min(hsl[1] + 20, 100)}%, ${Math.min(hsl[2] + 20, 90)}%)`,
    };
  }, [baseColor]);

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
        {/* Pétalos externos más robustos */}
        {[...Array(10)].map((_, index) => (
          <g key={`outer-${index}`} transform={`rotate(${index * 36}, 50, 50)`}>
            <path
              d="M50,50 Q65,25 50,0 Q35,25 50,50"
              fill={colors.petal}
              opacity="0.9"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from={`0 50 50`}
                to={`360 50 50`}
                dur="40s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}

        {/* Pétalos internos más robustos */}
        {[...Array(8)].map((_, index) => (
          <g key={`inner-${index}`} transform={`rotate(${index * 45 + 22.5}, 50, 50)`}>
            <path
              d="M50,50 Q60,35 50,20 Q40,35 50,50"
              fill={colors.innerPetal}
              opacity="0.95"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from={`0 50 50`}
                to={`-360 50 50`}
                dur="35s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}

        {/* Capa adicional de pétalos para más detalle */}
        {[...Array(12)].map((_, index) => (
          <g key={`detail-${index}`} transform={`rotate(${index * 30}, 50, 50)`}>
            <path
              d="M50,50 Q55,40 50,30 Q45,40 50,50"
              fill={colors.highlight}
              opacity="0.7"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from={`0 50 50`}
                to={`-180 50 50`}
                dur="25s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}

        {/* Centro de la rosa (siempre amarillo) */}
        <circle cx="50" cy="50" r="10" fill="#FFD700" />
        <circle cx="50" cy="50" r="7" fill="#FFA500" />
        <circle cx="50" cy="50" r="4" fill="#FF8C00" />
      </svg>
    </div>
  );
};

// Funciones auxiliares para la conversión de colores (sin cambios)
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export default Rosa;