
import React from 'react';

interface CheckpointProps {
  text: string;
}

const Checkpoint: React.FC<CheckpointProps> = ({ text }) => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-4 mb-20">
      <div className="bg-[#9a0526] text-white p-10 rounded-2xl shadow-xl text-center transform transition-all hover:shadow-2xl">
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 p-4 rounded-full">
            <span className="text-4xl">✅</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Checkpoint Final del Ciclo</h2>
        <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
          "{text}"
        </p>
      </div>
    </div>
  );
};

export default Checkpoint;
