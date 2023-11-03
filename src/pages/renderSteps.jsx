import React from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { EstructuraRegistros } from '../components/EstructuraRegistros';
import { EstructuraIndices } from '../components/EstructuraIndices';
import { EstructuraIndicesSecundario } from '../components/EstructuraIndicesSecundario';
import { EstructuraRegistrosSecundario } from '../components/EstructuraRegistroSecundario';
import { MultinivelPrimario } from '../components/MultinivelPrimario';
import { MultinivelSecundario } from '../components/MultinivelSecundario';

function Steps({ opcionIndice }) {
  return (
    <>
      <Xwrapper>
        <div>
          <div className='flex justify-between animate-fade-down animate-once animate-ease-out animate-duration-[2500]'>
            <div>
              {opcionIndice === '1' && (
                <>
                  <EstructuraIndices ids={{ id1: 'elem1', id2: 'elem2' }} />
                </>
              )}
              {opcionIndice === '2' && (
                <>
                  <EstructuraIndicesSecundario ids={{ id1: 'elem1', id2: 'elem2' }} />
                </>
              )}
              {opcionIndice === '3' && (
                <MultinivelPrimario />
              )}
              {opcionIndice === '4' && (
                <MultinivelSecundario />
              )}
            </div>

            <div>
              {opcionIndice === '1' && (
                <>
                  <EstructuraRegistros ids={{ id1: 'elem3', id2: 'elem4' }} />
                  <Xarrow start={'elem1'} end="elem3" />
                  <Xarrow start={'elem2'} end="elem4" />
                </>
              )}
              {opcionIndice === '2' && (
                <>
                  <EstructuraRegistrosSecundario ids={{ id1: 'elem3', id2: 'elem4' }} />
                  <Xarrow start={'elem1'} end="elem3" />
                  <Xarrow start={'elem2'} end="elem4" />
                </>
              )}
              {opcionIndice === '3' && (
                <EstructuraRegistros ids={{ id1: 'elem3mp', id2: 'elem4mp' }} />
              )}
              {opcionIndice === '4' && (
                <EstructuraRegistrosSecundario ids={{ id1: 'elem3ms', id2: 'elem4ms' }} />
              )}
            </div>
          </div>
        </div>
      </Xwrapper>
    </>
  );
}

export { Steps };
