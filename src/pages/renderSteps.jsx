import React from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import { EstructuraRegistros } from '../components/EstructuraRegistros';
import { EstructuraIndices } from '../components/EstructuraIndices';
import { EstructuraIndicesSecundario } from '../components/EstructuraIndicesSecundario';
import { EstructuraRegistrosSecundario } from '../components/EstructuraRegistroSecundario';
import { MultinivelPrimario } from '../components/MultinivelPrimario';
import { MultinivelSecundario } from '../components/MultinivelSecundario';
import { IndexContext } from '../components/IndexContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Steps({ opcionIndice }) {
  return (
    <>
      <Xwrapper>
        <Container>
          <Row>
            <div className='flex justify-between'>
              <Col>
                {opcionIndice === '1' && (
                  <>
                    <EstructuraIndices ids={{ id1: 'elem1', id2: 'elem2' }} />
                    <Xarrow start={'elem1'} end="elem3" />
                    <Xarrow start={'elem2'} end="elem4" />
                  </>
                )}
                {opcionIndice === '2' && (
                  <>
                    <EstructuraIndicesSecundario ids={{ id1: 'elem1', id2: 'elem2' }} />
                    <Xarrow start={'elem1'} end="elem3" />
                    <Xarrow start={'elem2'} end="elem4" />
                  </>
                )}
                {opcionIndice === '3' && (

                  <MultinivelPrimario />
                )}
                {opcionIndice === '4' && (

                  <MultinivelSecundario />
                )}
              </Col>

              {(opcionIndice === '1' || opcionIndice === '2') && (
                <Col xs={4}></Col>
              )}

              <Col>
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
              </Col>

            </div>
          </Row>
        </Container>
      </Xwrapper>
    </>
  );
}

export { Steps };
