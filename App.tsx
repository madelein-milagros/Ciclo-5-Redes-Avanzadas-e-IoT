
import React, { useState } from 'react';
import { COURSES, CHECKPOINT_TEXT } from './constants';
import RoadmapItem from './components/RoadmapItem';
import Checkpoint from './components/Checkpoint';

const App: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#6a041a] text-center mb-2">
          Ciclo 5 – Redes Avanzadas e IoT
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#ab022f] text-center opacity-90">
          Trayectoria de Especialización Técnica
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1.5 bg-[#ab022f] rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="relative">
          {/* Vertical Path Line (Visual enhancement for desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#ab022f]/10 to-transparent -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-4">
            {COURSES.map((course) => (
              <RoadmapItem
                key={course.id}
                course={course}
                isExpanded={expandedId === course.id}
                onToggle={() => handleToggle(course.id)}
              />
            ))}
          </div>
        </div>

        {/* Final Checkpoint */}
        <Checkpoint text={CHECKPOINT_TEXT} />
      </main>

      {/* Footer Branding */}
      <footer className="py-8 border-t border-gray-100">
        <div className="text-center text-gray-400 text-sm">
          Guía de aprendizaje • Ingeniería de Redes y Comunicaciones
        </div>
      </footer>
    </div>
  );
};

export default App;
