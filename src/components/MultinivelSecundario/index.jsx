import React, { useState, useEffect } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { IndexContext } from '../IndexContext';
import './MultinivelSecundario.css';

function MultinivelSecundario() {
  const [bloquesPorNivel, setBloquesPorNivel] = useState([]);
  const [ids, setIds] = useState([]);
  const [estructuras, setEstructuras] = useState([]); 
  const [arrows, setArrows] = useState([]);
  const [indicesPorBloque, setIndicesPorBloque] = useState(0);
  var { registros } = React.useContext(IndexContext);

  useEffect(() => {
    if (registros) {
      setIndicesPorBloque(Math.floor(registros.tamBloque / registros.longitudIndice));
    }
  }, []);

  useEffect(() => {
    if (registros && indicesPorBloque !== 0) {
      setIndicesPorBloque(Math.floor(registros.tamBloque / registros.longitudIndice));

      const cantidadBloques = Math.ceil(registros.numRegistros / indicesPorBloque);
      const niveles = Math.ceil(Math.log(registros.numRegistros) / Math.log(indicesPorBloque));
      const bloquesPorNivel = [cantidadBloques];

      for (let i = 1; i < niveles; i++) {
        bloquesPorNivel.push(Math.ceil(bloquesPorNivel[i - 1] / indicesPorBloque));
      }

      setBloquesPorNivel(bloquesPorNivel);
    }
  }, [registros, indicesPorBloque]);

  useEffect(() => {
    const newIds = [];

    for (let i = 0; i < bloquesPorNivel.length * 2; i++) {
      newIds.push(`elem${i}`);
    }

    setIds([...newIds].reverse());
  }, [bloquesPorNivel]);

  useEffect(() => {
    crearEstructuras();
  }, [ids]);

  useEffect(() => {
    aniadirFlechas();
  }, [estructuras])

  const crearEstructuras = () => {
    let indice = 0;
    const nuevasEstructuras = [];

    for (let i = 0; i < bloquesPorNivel.length; i++) {
      if (bloquesPorNivel[i] > 1) {
        nuevasEstructuras.push(
          <div key={`container-1-${i}`} className='flex'>
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
            
            <table className="bg-white shadow-md font-title text-center w-1/2 mt-28">
              <thead>
                <tr className='border-y-2'>
                  <th className="px-4 py-2 border-x-2"> # Bloque </th> 
                </tr>
              </thead>

              <tbody>
                {(bloquesPorNivel[i] === 1) && (
                  <tr className='border-y-2'>
                    <td id={ids[indice]} className="px-4 py-2 border-x-2">1</td>
                  </tr>
                )}

                {(bloquesPorNivel[i] === 2) && (
                  <>
                    <tr className='border-y-2'>
                      <td id={ids[indice]} className="px-4 py-2 border-x-2">1</td>
                    </tr>

                    <tr className='border-y-2'>
                      <td id={ids[indice + 1]} className="px-4 py-2 border-x-2">2</td>
                    </tr>
                  </>
                )}

                {(bloquesPorNivel[i] === 3) && (
                  <>
                    <tr className='border-y-2'>
                      <td id={ids[indice]} className="px-4 py-2 border-x-2">1</td>
                    </tr>

                    <tr className='border-y-2'>
                      <td className="px-4 py-2 border-x-2">2</td>
                    </tr>

                    <tr className='border-y-2'>
                      <td id={ids[indice + 1]} className="px-4 py-2 border-x-2">3</td>
                    </tr>
                  </>
                )}

                {(bloquesPorNivel[i] > 3) && (
                  <>
                    <tr className='border-y-2'>
                      <td id={ids[indice]} className="px-4 py-2 border-x-2">1</td>
                    </tr>
              
                    <tr className='border-y-2'>
                      <td className="px-4 py-2 border-x-2">2</td>
                    </tr>

                    <tr className='border-y-2'>
                      <td className="px-4 py-2 border-x-2">3</td>
                    </tr>

                    <tr className='border-y-2'>
                      <td className="flex flex-col items-center py-2 border-x-2 dot-container"><div className='dots'></div></td>
                    </tr>

                    <tr className='border-y-2'>
                      <td id={ids[indice + 1]} className="px-4 py-2 border-x-2">{bloquesPorNivel[i]}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        );
      }

      if (bloquesPorNivel[i] === 1 && bloquesPorNivel.length > 1) {
        nuevasEstructuras.push(
          <div key={`container-2-${i}`} className='mr-10'>
            <table className="bg-white shadow-md font-title text-center w-1/2 h-1/4">
              <thead>
                <tr className='border-y-2'> 
                  <th className="px-4 py-2 border-x-2"> # Indices </th> 
                </tr>
              </thead>

              <tbody>
                {(bloquesPorNivel[i - 1] === 1) && (
                  <tr className='border-y-2'>
                    <td id={ids[indice]} className="px-4 py-2 border-x-2">1</td>
                  </tr>
                )}
                
                {(bloquesPorNivel[i - 1] === 2) && (
                  <>
                    <tr className='border-y-2'>
                      <td id={ids[indice]} className="px-4 py-2 border-x-2">1</td>
                    </tr>

                    <tr className='border-y-2'>
                      <td id={ids[indice + 1]} className="px-4 py-2 border-x-2">2</td>
                    </tr>
                  </>
                )}

                {(bloquesPorNivel[i - 1] === 3) && (
                  <>
                    <tr className='border-y-2'>
                      <td id={ids[indice]} className="px-4 py-2 border-x-2">1</td>
                    </tr>

                    <tr className='border-y-2'>
                      <td className="px-4 py-2 border-x-2">2</td>
                    </tr>

                    <tr className='border-y-2'>
                      <td id={ids[indice + 1]} className="px-4 py-2 border-x-2">3</td>
                    </tr>
                  </>
                )}

                {(bloquesPorNivel[i - 1] !== indicesPorBloque) && (bloquesPorNivel[i - 1] > 3) && (
                  <>
                    <tr className='border-y-2'>
                      <td className="flex flex-col items-center py-2 border-x-2 dot-container"><div className='dots'></div></td>
                    </tr>

                    <tr className='border-y-2'>
                      <td id={ids[indice + 1]} className="px-4 py-2 border-x-2">{bloquesPorNivel[i - 1]}</td>
                    </tr>

                    <tr className='border-y-2'>
                      <td className="flex flex-col items-center py-2 border-x-2 dot-container"><div className='dots'></div></td>
                    </tr>

                    <tr className='border-y-2'>
                      <td className="px-4 py-2 border-x-2">{indicesPorBloque}</td>
                    </tr>
                  </>
                )}

                {(bloquesPorNivel[i - 1] !== indicesPorBloque) && (bloquesPorNivel[i - 1] <= 3) && (
                  <>
                    <tr className='border-y-2'>
                      <td className="flex flex-col items-center py-2 border-x-2 dot-container"><div className='dots'></div></td>
                    </tr>

                    <tr className='border-y-2'>
                      <td className="px-4 py-2 border-x-2">{indicesPorBloque}</td>
                    </tr>
                  </>
                )}

                {(bloquesPorNivel[i - 1] === indicesPorBloque) && (bloquesPorNivel[i - 1] > 3) && (
                  <>
                    <tr className='border-y-2'>
                      <td className="flex flex-col items-center py-2 border-x-2 dot-container"><div className='dots'></div></td>
                    </tr>

                    <tr className='border-y-2'>
                      <td id={ids[indice + 1]} className="px-4 py-2 border-x-2">{indicesPorBloque}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        );
      }

      if (bloquesPorNivel[i] === 1 && bloquesPorNivel.length === 1) {
        nuevasEstructuras.push(
          <div key={`container-2-${i}`} className='flex'>
            <table className="bg-white shadow-md font-title text-center w-1/2 h-1/4">
              <thead>
                <tr className='border-y-2'> 
                  <th className="px-4 py-2 border-x-2"> # Indices </th> 
                </tr>
              </thead>
            </table>

            <tbody>
              <tr className='border-y-2'>
                <td id={ids[indice]} className="px-4 py-2 border-x-2">1</td>
              </tr>

              <tr className='border-y-2'>
                <td className="px-4 py-2 border-x-2">2</td>
              </tr>

              <tr className='border-y-2'>
                <td className="px-4 py-2 border-x-2">3</td>
              </tr>

              <tr className='border-y-2'>
                <td className="flex flex-col items-center py-2 border-x-2 dot-container"><div className='dots'></div></td>
              </tr>

              <tr className='border-y-2'>
                <td id={ids[indice + 1]} className="px-4 py-2 border-x-2">{indicesPorBloque}</td>
              </tr>
            </tbody>
          </div>
        );
      }

      indice += 2;
    }
    setEstructuras([...nuevasEstructuras].reverse()); 
  }

  const aniadirFlechas = () => {
    const arrows = [];

    for (let i = 0; i < ids.length - 2; i++) {
      arrows.push(
        <Xarrow key={`arrow-${i}`} start={ids[i + 2]} end={ids[i]} />
      );
    }

    arrows.push(
      <Xarrow key={`arrow-${(ids.length / 2) + 1}`} start={ids[0]} end='elem3ms' />
    );

    arrows.push(
      <Xarrow key={`arrow-${(ids.length / 2) + 2}`} start={ids[1]} end='elem4ms' />
    );

    setArrows(arrows);
  }

  return (
    <Xwrapper>
      <div className='flex justify-between'>
        {estructuras.map((estructura, index) => (
          <div key={index} className='mr-10'>
            {estructura}
          </div>
        ))}

        {arrows}
      </div>
    </Xwrapper>
  );
}

export { MultinivelSecundario };