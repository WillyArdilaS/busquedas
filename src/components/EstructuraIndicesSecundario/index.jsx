import React from 'react';
import { IndexContext } from '../IndexContext';
import './EstructuraIndices.css';

function EstructuraIndicesSecundario({ ids  }) {
  const { id1, id2 } = ids;

  const {
    registros
  } = React.useContext(IndexContext);
  const [indicesPorBloque, setindicesPorBloque] = React.useState(0);
  const [cantidadBloques, setCantidadBloques] = React.useState(0);

  const calcularValores = () => {
    if (registros) {
      const indicesPorBloque = Math.round(registros.tamBloque / registros.longitudIndice);
      const cantidadBloques = Math.round(registros.numRegistros / indicesPorBloque);

      setindicesPorBloque(indicesPorBloque);
      setCantidadBloques(cantidadBloques);
    }
  };

  React.useEffect(() => {
    calcularValores();
  }, [registros]);

  return (
    <>
      <div className='flex'>
        <table className="bg-white shadow-md font-title text-center w-1/2 h-1/4">
          <thead>
            <tr className='border-y-2'> 
              <th className="px-4 py-2 border-x-2"> Indices </th> 
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-4 py-2 border-x-2"> {indicesPorBloque} por bloque</td>
            </tr>
          </tbody>
        </table>
        
        <table className="bg-white shadow-md font-title text-center w-1/2">
          <thead>
            <tr className='border-y-2'>
              <th className="px-4 py-2 border-x-2"> # Bloque </th> 
            </tr>
          </thead>

          <tbody>
            <tr className='border-y-2'>
              <td id={id1} className="px-4 py-2 border-x-2">1</td>
            </tr>

            <tr className='border-y-2'>
              <td className="px-4 py-2 border-x-2">2</td>
            </tr>

            <tr className='border-y-2'>
              <td className="px-4 py-2 border-x-2">3</td>
            </tr>

            <tr className='border-y-2'>
              <td  className="flex flex-col items-center py-2 border-x-2 dot-container"><div className='dots'></div></td>
            </tr>

            <tr>
              <td id={id2} className="px-4 py-2 border-x-2">{cantidadBloques}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}


export { EstructuraIndicesSecundario };