'use client';
import { useState } from 'react';
export default function Home() {
  const [horasTrabajadas, setHorasTrabajadas] = useState();
  const [horasNoTrabajadas, setHorasNoTrabajadas] = useState();
  const [irpf, setIrpf] = useState();
  const [sueldobruto, setSueldoBruto] = useState();
  const [sueldoneto, setSueldoNeto] = useState();
  const sueldo_FIJOMENSUAL = 1279.53;
  const horas_FIJASMENSUAL = 155;

  function sueldoBRUTO() {
    Math.round(
      setSueldoBruto(
        parseInt(horasTrabajadas * sueldo_FIJOMENSUAL) / horas_FIJASMENSUAL
      ),
      2
    );
  }

  function sueldoNETO() {
    const result = parseInt(sueldobruto * irpf) / 100;
    setSueldoNeto(sueldobruto - result);
  }

  return (
    <div className="flex flex-col items-center justify-between p-14 ">
      <div className="flex flex-col">
        <label>horas trabajadas</label>
        <input
          value={horasTrabajadas}
          type="number"
          className="border-2"
          onChange={(e) => {
            setHorasTrabajadas(e.target.value);
          }}
        ></input>
        <label>horas NO trabajadas</label>
        <input
          value={horasNoTrabajadas}
          type="number"
          className="border-2"
          onChange={(e) => {
            setHorasNoTrabajadas(e.target.value);
          }}
        ></input>
        <label> irpf</label>
        <input
          value={irpf}
          type="number"
          className="border-2"
          onChange={(e) => setIrpf(e.target.value)}
        ></input>

        <div className="flex flex-row items-center justify-between p-24">
          <button
            onClick={() => {
              console.log(
                horasTrabajadas,
                horasNoTrabajadas,
                irpf,
                sueldobruto,
                sueldoneto
              );
              sueldoBRUTO();
              sueldoNETO();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calcular
          </button>

          <button
            onClick={() => {
              console.log('reset');
              setHorasTrabajadas('');
              setHorasNoTrabajadas('');
              setIrpf('');
              setSueldoBruto('');
              setSueldoNeto('');
            }}
            className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            reset
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between p-24">
        <p className="">horas trabajadas: {horasTrabajadas}</p>
        <p>horas NO trabajadas: {horasNoTrabajadas}</p>
        <p>irpf: {irpf}</p>
        <label className="text-2xl flex flex-col items-center justify-center p-2">
          BRUTO <p className="bg-slate-500">{sueldobruto}</p>
        </label>

        <label className="text-2xl flex flex-col items-center justify-center p-2">
          NETO PARA LA BUCHACA
          <p className="bg-lime-400">{sueldoneto}</p>
        </label>
      </div>
    </div>
  );
}
