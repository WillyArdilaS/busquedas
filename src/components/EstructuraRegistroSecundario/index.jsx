import React from 'react';
import { IndexContext } from '../IndexContext';
import './EstructuraRegistros.css';

function EstructuraRegistrosSecundario({ ids }) {
  const { id1, id2 } = ids;
  const {
    registros
  } = React.useContext(IndexContext);
  const [numRegistros, setnumRegistros] = React.useState(0);

  const calcularValores = () => {
    if (registros) {
      setnumRegistros(registros.numRegistros);
    }
  };

  React.useEffect(() => {
    calcularValores();
  }, [registros]);

  return (
    <>
      <table className="bg-white shadow-md font-title text-center w-1/2">
          <thead>
            <tr className='border-y-2'>
              <th className="px-10 py-2 border-x-2"> # Registro </th> 
            </tr>
          </thead>

          <tbody>
            <tr className='border-y-2'>
              <td id={id1} className="px-10 py-2 border-x-2">1</td>
            </tr>

            <tr className='border-y-2'>
              <td className="px-10 py-2 border-x-2">2</td>
            </tr>

            <tr className='border-y-2'>
              <td className="px-10 py-2 border-x-2">3</td>
            </tr>

            <tr className='border-y-2'>
              <td className="flex flex-col items-center py-2 border-x-2 dot-container"><div className='dots'></div></td>
            </tr>

            <tr>
              <td id={id2} className="px-10 py-2 border-x-2">{numRegistros}</td>
            </tr>
          </tbody>
        </table>
    </>
  );
}

export { EstructuraRegistrosSecundario };