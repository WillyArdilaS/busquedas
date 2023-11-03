import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { IndexContext } from '../components/IndexContext';


const FormIndices = () => {
    const {
        numRegistros,
        setNumRegistros,
        longitudRegistros,
        setLongitudRegistro,
        tamBloque,
        setTamBloque,
        longitudIndice,
        setLongitudIndice,
        addStep
    } = React.useContext(IndexContext);

    const onSubmit = () => {
        if (numRegistros === 0 || numRegistros === undefined) {
            alert("Debe indicar la cantidad de registros");
        }
        else if (longitudRegistros === 0 || longitudRegistros === undefined) {
            alert("Debe indicar la longitud de cada registro");
        }
        else if (tamBloque === 0 || tamBloque === undefined) {
            alert("Debe indicar el tamaño del bloque");
        }
        else if (longitudIndice === 0 || longitudIndice === undefined) {
            alert("Debe indicar la longitud de cada indice");
        }
        else {
            alert("Estructura creada");
            addStep();
        }  
    };

    return (
        <form id="form" className="flex flex-col px-4 py-6 bg-white rounded-lg shadow-md font-title">
            <div id="form-numRegistros" className="flex justify-between items-center mb-4">
                <label htmlFor="numRegistros" className="font-medium"> Cantidad registros </label>
                <input type="number" name="numRegistros" id="numRegistros" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} value={numRegistros}
                placeholder='250000' onChange={(e) => setNumRegistros(e.target.value)} required/>
            </div>
                        
            <div id="form-longitudRegistros" className="flex justify-between items-center mb-4">
                <label htmlFor="longitudRegistros" className="font-medium"> Longitud registros </label>
                <input type="number" name="longitudRegistros" id="longitudRegistros" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} 
                value={longitudRegistros} placeholder='150' onChange={(e) => setLongitudRegistro(e.target.value)} required/>
            </div>
            
            <div id="form-longitudIndice" className="flex justify-between items-center mb-4">
                <label htmlFor="longitudIndice" className="font-medium"> Longitud índice </label>
                <input type="number" name="longitudIndice" id="longitudIndice" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} 
                value={longitudIndice} placeholder='150' onChange={(e) => setLongitudIndice(e.target.value)} required/>
            </div>
            
            <div id="form-tamBloque" className="flex justify-between items-center mb-4">
                <label htmlFor="tamBloque" className="font-medium"> Longitud índice </label>
                <input type="number" name="tamBloque" id="tamBloque" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} 
                value={tamBloque} placeholder='8192' onChange={(e) => setTamBloque(e.target.value)} required/>
            </div>

            <section id="form-button" className="flex justify-center mt-2">
                <input type="button" id="button-createStructure" value="Crear estructura" className={`w-3/4 py-3 rounded-lg text-white text-sm font-semibold font-title 
                bg-gray-900 hover:bg-gray-800 hover:cursor-pointer hover:scale-105`} onClick={onSubmit} />
            </section>
        </form>
    );
};

export { FormIndices };
