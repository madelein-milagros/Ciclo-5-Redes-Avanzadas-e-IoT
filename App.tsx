
import React, { useState, useEffect } from 'react';
import { COURSES, CHECKPOINT_TEXT } from './constants';
import RoadmapMarker from './components/RoadmapMarker';
import Checkpoint from './components/Checkpoint';

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedCourse = COURSES.find(c => c.id === selectedId);

  // Posiciones mucho más espaciadas para evitar solapamientos en móvil
  const markerPositions = isMobile ? [
    { left: '25%', top: '10%' },
    { left: '75%', top: '30%' },
    { left: '25%', top: '50%' },
    { left: '75%', top: '70%' },
    { left: '30%', top: '90%' },
  ] : [
    { left: '10%', top: '65%' },
    { left: '30%', top: '40%' },
    { left: '50%', top: '75%' },
    { left: '70%', top: '35%' },
    { left: '90%', top: '60%' },
  ];

  const shareOnLinkedIn = (courseTitle: string) => {
    const message = encodeURIComponent(`¡He avanzado en mi carrera de Redes! Completado: ${courseTitle}. #Tecsup #Redes #Administración de Redes y Comunicaciones`);
    window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="pt-8 pb-4 px-6 shrink-0 z-50 bg-white sticky top-0">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6a041a] text-center tracking-tight leading-tight">
          Ciclo 5: Ingeniería de Redes e IoT
        </h1>
        <div className="w-16 h-1 bg-[#ab022f] mx-auto mt-2 rounded-full"></div>
      </header>

      {/* Roadmap Area */}
      <main className="flex-1 relative flex flex-col items-center">
        <div className={`relative w-full max-w-5xl px-4 ${isMobile ? 'h-[1200px]' : 'h-[500px]'}`}>
          
          {/* SVG Carretera Adaptativa */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox={isMobile ? "0 0 400 1200" : "0 0 1000 400"} 
            preserveAspectRatio="none"
          >
            <path 
              d={isMobile 
                ? "M 100 0 Q 400 200 100 400 Q -100 600 300 800 Q 500 1000 150 1250" 
                : "M 0 300 Q 150 300 300 180 Q 450 50 600 280 Q 750 480 900 150 Q 1000 100 1100 250"
              } 
              fill="none" 
              stroke="#f1f5f9" 
              strokeWidth={isMobile ? "22" : "32"} 
              strokeLinecap="round"
            />
            <path 
              d={isMobile 
                ? "M 100 0 Q 400 200 100 400 Q -100 600 300 800 Q 500 1000 150 1250" 
                : "M 0 300 Q 150 300 300 180 Q 450 50 600 280 Q 750 480 900 150 Q 1000 100 1100 250"
              } 
              fill="none" 
              stroke="#334155" 
              strokeWidth={isMobile ? "18" : "26"} 
              strokeLinecap="round"
            />
            <path 
              className="road-path"
              d={isMobile 
                ? "M 100 0 Q 400 200 100 400 Q -100 600 300 800 Q 500 1000 150 1250" 
                : "M 0 300 Q 150 300 300 180 Q 450 50 600 280 Q 750 480 900 150 Q 1000 100 1100 250"
              } 
              fill="none" 
              stroke="#facc15" 
              strokeWidth="1.5" 
              strokeDasharray="10,10"
            />
          </svg>

          {/* Marcadores */}
          {COURSES.map((course, index) => (
            <RoadmapMarker
              key={course.id}
              course={course}
              isSelected={selectedId === course.id}
              onClick={() => setSelectedId(course.id)}
              style={markerPositions[index]}
            />
          ))}
        </div>

        {/* Tarjeta de Detalle Premium */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-end md:items-center justify-center p-0 md:p-6 transition-all">
            <div className="bg-white w-full max-w-xl md:rounded-[2.5rem] rounded-t-[3rem] shadow-2xl overflow-hidden animate-slide-up relative">
              
              {/* Header de la Tarjeta */}
              <div className="bg-[#6a041a] p-8 text-white relative">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 bg-white/10 hover:bg-white/30 rounded-full p-2.5 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">Módulo Académico</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight pr-10">{selectedCourse.title}</h3>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
                <div>
                  <h4 className="text-[11px] font-bold text-[#ab022f] uppercase mb-2 tracking-widest">Descripción</h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{selectedCourse.description}</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Certificación Obtenida</span>
                    <p className="text-sm font-bold text-gray-800 leading-tight">{selectedCourse.certification}</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Institución / Aliado</span>
                    <p className="text-sm font-bold text-gray-800 leading-tight">{selectedCourse.officialName}</p>
                  </div>
                </div>

                {/* Botones Sociales y Recursos */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <a 
                      href={selectedCourse.videoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 bg-[#ff0000] hover:bg-[#cc0000] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 shadow-lg shadow-red-100 transition-all active:scale-95"
                    >
                      <span className="text-xl">▶</span> Ver Tutorial
                    </a>
                    <button 
                      onClick={() => shareOnLinkedIn(selectedCourse.title)}
                      className="flex-1 bg-[#0077b5] hover:bg-[#005a87] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 shadow-lg shadow-blue-100 transition-all active:scale-95"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      Compartir Logro
                    </button>
                  </div>
                  
                  {selectedCourse.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full text-center py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl font-bold text-xs transition-all border-2 border-transparent hover:border-slate-300"
                    >
                      Ver Recursos del Curso 🌐
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer & Meta del Ciclo */}
      <div className="shrink-0 bg-white">
        <Checkpoint text={CHECKPOINT_TEXT} />
        <footer className="pb-10 text-center text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">
          Tecsup • Ingeniería de Redes e IoT • {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default App;
