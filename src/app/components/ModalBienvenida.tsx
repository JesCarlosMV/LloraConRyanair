'use client';
import React from 'react';
import { useState } from 'react';

const ModalBienvenida = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-gray-900 opacity-75"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="flex flex-col justify-center items-center text-center relative bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">No te cuadra el sueldo?</h2>
            <p className="text-gray-700">
              Introduce las horas trabajadas y el porcentaje de IRPF y disfruta
            </p>
            <button
              className=" w-20 mt-4 bg-blue-200 text-white px-4 py-2 rounded hover:scale-125 transition-all"
              onClick={() => setIsOpen(false)}
            >
              ✈️
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalBienvenida;
