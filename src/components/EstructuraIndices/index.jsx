import { IndexContext } from '../IndexContext';
import './EstructuraIndices.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';


function EstructuraIndices({ ids  }) {
  const { id1, id2 } = ids;

  const {
    registros
  } = React.useContext(IndexContext);
  const [indicesPorBloque, setindicesPorBloque] = React.useState(0);
  const [cantidadBloques, setCantidadBloques] = React.useState(0);

  const calcularValores = () => {
    if (registros) {
      const registrosPorBloque = Math.floor(registros.tamBloque / registros.longitudRegistros);
      const numeroIndices = Math.ceil(registros.numRegistros / registrosPorBloque);
      const indicesPorBloque = Math.floor(registros.tamBloque / registros.longitudIndice);
      const cantidadBloques = Math.ceil(numeroIndices / indicesPorBloque);

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
        <table className="bg-white r shadow-md font-title text-center w-1/2 h-1/4">
            <thead>
                <tr>
                    <th className="px-10 py-2  border-x-2"> Indices </th> 
                </tr>
            </thead>

            <tbody>
              <td className="px-10 py-2 border-x-2"> {indicesPorBloque} por bloque</td>
            </tbody>
        </table>
        
        <table className="bg-white r shadow-md font-title text-center w-1/2">
            <thead>
                <tr>
                    <th className="px-10 py-2  border-x-2"> # Bloque </th> 
                </tr>
            </thead>

            <tbody>
                <tr>
                  <td id={id1} className="px-10 py-2 border-x-2">1</td>
                </tr>
                <tr>
                  <td className="px-10 py-2 border-x-2">2</td>
                </tr>
                <tr>
                  <td className="px-10 py-2 border-x-2">3</td>
                </tr>
                <tr>
                  <td  className="px-10 py-2 border-x-2 dot-container"><div className='dots'></div></td>
                </tr>
                <tr>
                  <td id={id2} className="px-10 py-2 border-x-2">{cantidadBloques}</td>
                </tr>
              </tbody>
        </table>
      </div>
    </>
  );
}


export { EstructuraIndices };