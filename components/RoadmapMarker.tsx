
import React from 'react';
import { Course } from '../types';

interface RoadmapMarkerProps {
  course: Course;
  isSelected: boolean;
  onClick: () => void;
  style: React.CSSProperties;
}

const RoadmapMarker: React.FC<RoadmapMarkerProps> = ({ course, isSelected, onClick, style }) => {
  return (
    <div 
      className="absolute flex flex-col items-center group cursor-pointer z-10 transition-all duration-300 -translate-x-1/2 -translate-y-1/2" 
      style={style}
      onClick={onClick}
    >
      {/* Etiqueta Pill (Basada en la imagen de referencia) */}
      <div className={`mb-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 shadow-md border-2 text-center leading-tight min-w-[100px] max-w-[140px] md:max-w-none
        ${isSelected 
          ? 'bg-[#6a041a] text-white border-[#ab022f] scale-110 z-20' 
          : 'bg-white text-gray-800 border-gray-100 group-hover:border-[#ab022f] scale-100'}
      `}>
        {course.title}
      </div>

      {/* Pin del Mapa */}
      <div className={`transition-transform duration-300 ${isSelected ? 'scale-125' : 'group-hover:scale-110'}`}>
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill={isSelected ? "#ab022f" : "#f59e0b"} 
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-md"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-13-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
    </div>
  );
};

export default RoadmapMarker;
