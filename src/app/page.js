'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [horasTrabajadas, setHorasTrabajadas] = useState('');
  const [horasNoTrabajadas, setHorasNoTrabajadas] = useState('');
  const [irpf, setIrpf] = useState('2');
  const [sueldobruto, setSueldoBruto] = useState(0);
  const [sueldoneto, setSueldoNeto] = useState(0);
  const sueldo_FIJOMENSUAL = 1279.53;
  const horas_FIJASMENSUAL = 155;

  const calculate = () => {
    const _sueldoBruto =
      (Number(horasTrabajadas) * sueldo_FIJOMENSUAL) / horas_FIJASMENSUAL;
    const _sueldoNeto = _sueldoBruto - (_sueldoBruto * Number(irpf)) / 100;
    setSueldoBruto(_sueldoBruto);
    setSueldoNeto(_sueldoNeto);
  };

  const reset = () => {
    setHorasTrabajadas('');
    setHorasNoTrabajadas('');
    setIrpf('');
    setSueldoBruto(0);
    setSueldoNeto(0);
  };

  return (
    <div className="flex flex-col items-center justify-between p-14">
      <Image
        src="https://i.giphy.com/Btn42lfKKrOzS.webp"
        className="p-10"
        alt="logo"
        width={300}
        height={300}
      />
      <div className="flex flex-col p-10">
        <label className="flex flex-col text-center">
          Horas trabajadas
          <input
            value={horasTrabajadas}
            type="text"
            className="border-2"
            onChange={(e) => setHorasTrabajadas(e.target.value)}
          ></input>
        </label>
        {/*
          ---------------------------- AÑADIR ESTA FUNCIONALIDAD ------------------
          
        <label className="flex flex-col text-center">
          Horas NO trabajadas
          <input
            value={horasNoTrabajadas}
            type="text"
            className="border-2"
            onChange={(e) => setHorasNoTrabajadas(e.target.value)}
          ></input>
        </label>*/}
        <label className="flex flex-col text-center">
          Irpf
          <input
            value={irpf}
            type="text"
            className="border-2"
            onChange={(e) => setIrpf(e.target.value)}
          ></input>
        </label>

        <div className="flex flex-row items-center justify-between p-2">
          <button
            onClick={calculate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calcular
          </button>

          <button
            onClick={reset}
            className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            reset
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between p-2">
        <label className="text-2xl flex flex-col items-center justify-center p-2">
          BRUTO <span className="bg-red-500">{sueldobruto.toFixed(2)}€</span>
        </label>
        <label className="text-2xl flex flex-col items-center justify-center p-2">
          NETO
          <span className="bg-lime-400">{sueldoneto.toFixed(2)}€</span>
        </label>
      </div>
    </div>
  );
}
