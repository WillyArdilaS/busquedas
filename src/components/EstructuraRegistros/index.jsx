import Table from 'react-bootstrap/Table';
import { IndexContext } from '../IndexContext';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EstructuraRegistros.css';

function EstructuraRegistros({ ids }) {
  const { id1, id2 } = ids;
  const {
    registros
  } = React.useContext(IndexContext);
  const [registrosPorBloque, setRegistrosPorBloque] = React.useState(0);
  const [cantidadBloques, setCantidadBloques] = React.useState(0);

  const calcularValores = () => {
    if (registros) {
      const registrosPorBloque = Math.floor(registros.tamBloque / registros.longitudRegistros);
      const cantidadBloques = Math.ceil(registros.numRegistros / registrosPorBloque);

      setRegistrosPorBloque(registrosPorBloque);
      setCantidadBloques(cantidadBloques);
    }
  };

  React.useEffect(() => {
    calcularValores();
  }, [registros]);

  return (
    <>
      <div className='flex'>
        <table className="bg-white shadow-md font-title text-center w-1/2">
            <thead>
                <tr>
                    <th className="px-10 py-2  border-x-2"> # Bloque </th> 
                </tr>
            </thead>

            <tbody>
                <tr>
                  <td id={id1} className="px-10 py-2  border-x-2">1</td>
                </tr>
                <tr>
                  <td className="px-10 py-2  border-x-2">2</td>
                </tr>
                <tr>
                  <td className="px-10 py-2  border-x-2">3</td>
                </tr>
                <tr>
                  <td className="px-10 py-2  border-x-2 dot-container"><div className='dots'></div></td>
                </tr>
                <tr>
                  <td id={id2} className="px-10 py-2  border-x-2">{cantidadBloques}</td>
                </tr>
              </tbody>
        </table>
        
        <table className="bg-white r shadow-md font-title text-center w-1/2 h-1/4">
            <thead>
                <tr>
                    <th className="px-10 py-2 border-x-2"> Registros </th> 
                </tr>
            </thead>

            <tbody>
                <tr>
                  <td className="px-10 py-2 border-x-2"> {registrosPorBloque} por bloque</td>
                </tr>
              </tbody>
        </table>
      </div>
      

    </>
  );
}

export { EstructuraRegistros };