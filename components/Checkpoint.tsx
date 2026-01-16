
import React from 'react';

interface CheckpointProps {
  text: string;
}

const Checkpoint: React.FC<CheckpointProps> = ({ text }) => {
  const shareOnLinkedIn = () => {
    const message = encodeURIComponent(`¡Meta del Ciclo 5 de Redes lograda! 🚩 #Tecsup #Redes #Administración de Redes y Comunicaciones`);
    window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${message}`, '_blank');
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-12 mb-16 px-6">
      <div className="bg-[#9a0526] text-white p-10 rounded-[2.5rem] shadow-2xl text-center transform transition-all flex flex-col items-center">
        {/* Icono de Bandera Circular */}
        <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-white/20">
          <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Meta del Ciclo Lograda</h2>
        <p className="text-sm opacity-90 leading-relaxed mb-8 max-w-xs">
          {text}
        </p>
        
        <button 
          onClick={shareOnLinkedIn}
          className="w-full bg-[#0077b5] hover:bg-[#005a87] text-white py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          Publicar Certificado en LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Checkpoint;
