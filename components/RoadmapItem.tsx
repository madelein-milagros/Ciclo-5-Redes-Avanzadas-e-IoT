
import React from 'react';
import { Course } from '../types';

interface RoadmapItemProps {
  course: Course;
  isExpanded: boolean;
  onToggle: () => void;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ course, isExpanded, onToggle }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto mb-8">
      {/* Course Button */}
      <button
        onClick={onToggle}
        className={`w-full py-6 px-8 rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-between text-left
          ${isExpanded ? 'bg-[#6a041a] ring-2 ring-[#ab022f]' : 'bg-[#6a041a]'}
          text-white`}
      >
        <span className="text-xl font-semibold">{course.title}</span>
        <span className={`text-2xl transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Expanded Content Card */}
      {isExpanded && (
        <div className="w-full mt-4 bg-white border-l-8 border-[#ab022f] rounded-r-lg shadow-lg p-6 animate-fadeIn transition-all">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold uppercase text-[#ab022f] mb-1">📘 Nombre Oficial</p>
              <p className="text-gray-800 font-medium">{course.officialName}</p>
            </div>
            
            <div>
              <p className="text-sm font-bold uppercase text-[#ab022f] mb-1">🛠️ Descripción</p>
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase text-[#ab022f] mb-1">🏆 Certificación</p>
              <p className="text-gray-800 italic">{course.certification}</p>
            </div>

            {course.links.length > 0 && (
              <div className="pt-2">
                <p className="text-sm font-bold uppercase text-[#ab022f] mb-2">🔗 Recursos</p>
                <div className="flex flex-wrap gap-3">
                  {course.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#6a041a] hover:text-[#ab022f] font-semibold underline decoration-dotted transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Connection Line */}
      <div className="h-12 w-1 bg-[#ab022f] opacity-30 mt-2"></div>
    </div>
  );
};

export default RoadmapItem;
