
import { useState } from 'react';
import { DinamicasParciales } from '../components/DinamicasParciales'; 

const DinamicasRenderParciales = ({type}) => {
  const [digitos, setDigitos] = useState("");
  const [cubetas, setCubetas] = useState("");
  const [registros, setRegistros] = useState("");
  const [densidadOcupacion, setDensidadOcupacion] = useState("");
  const [densidadReduccion, setDensidadReduccion] = useState("");
  const [structureCreated, setStructureCreated] = useState(false);

  let props = {
    cubetas: parseInt(cubetas),
    setCubetas: setCubetas,
    registros: parseInt(registros), 
    densidadOcupacion: parseInt(densidadOcupacion), 
    densidadReduccion: parseInt(densidadOcupacion), 
    hash: parseInt(type), 
    digitos: parseInt(digitos),
  };
  
  const handleCreateStructure = () => {
    if(digitos == "" || cubetas == "" || registros == "" || densidadOcupacion == "" || densidadReduccion == "") {
      alert("Faltan datos por ingresar");
    } else {
      setStructureCreated(true);
      alert(`Estructura creada`);
    }
  }

  const deleteStructure = () => {
    setDigitos("");
    setCubetas("");
    setRegistros("");
    setDensidadOcupacion("");
    setDensidadReduccion("");
    setStructureCreated(false);
  }

  return (
    <main className='flex justify-between w-11/12 my-12 mx-auto'>
      <section className='flex flex-col items-center'>
        <form id="form" className="flex flex-col px-4 py-6 bg-white rounded-lg shadow-md font-title">
          <div id="form-digitos" className="flex justify-between items-center mb-4">
            <label htmlFor="digitos" className="font-medium"> Cantidad dígitos </label>
              <input type="number" name="digitos" id="digitos" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} value={digitos}
              onChange={(e) => setDigitos(e.target.value)} disabled={structureCreated} required/>
          </div>

          <div id="form-cubetas" className="flex justify-between items-center mb-4">
            <label htmlFor="cubetas" className="font-medium"> Número cubetas</label>
              <input type="number" name="cubetas" id="cubetas" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} value={cubetas}
              onChange={(e) => setCubetas(e.target.value)} disabled={structureCreated} required/>
          </div>
                          
          <div id="form-registros" className="flex justify-between items-center mb-4">
            <label htmlFor="registros" className="font-medium"> Número registros </label>
              <input type="number" name="registros" id="registros" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} value={registros}
              onChange={(e) => setRegistros(e.target.value)} disabled={structureCreated} required/>
          </div>
              
          <div id="form-densidadOcupacion" className="flex justify-between items-center mb-4">
            <label htmlFor="densidadOcupacion" className="font-medium"> Densidad ocupación </label>
              <input type="number" name="densidadOcupacion" id="densidadOcupacion" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} value={densidadOcupacion}
              onChange={(e) => setDensidadOcupacion(e.target.value)} disabled={structureCreated} required/>
          </div>
          
          <div id="form-densidadReduccion" className="flex justify-between items-center mb-4">
            <label htmlFor="densidadReduccion" className="font-medium"> Densidad reducción </label>
              <input type="number" name="densidadReduccion" id="densidadReduccion" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} value={densidadReduccion}
              onChange={(e) => setDensidadReduccion(e.target.value)} disabled={structureCreated} required/>
          </div>

          <section id="form-button" className="flex justify-center mt-2">
            <input type="button" id="button-createArray" value="Crear estructura" className={`w-3/4 py-3 rounded-lg text-white text-sm font-semibold font-title 
              ${structureCreated ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800 hover:cursor-pointer hover:scale-105'}`} onClick={handleCreateStructure} 
              disabled={structureCreated}/>
          </section>
        </form>

        <input type="button" id="menu-deleteArray" value="Eliminar estructura" className={`w-3/4 mt-12 py-3 rounded-lg bg-red-900 shadow-lg text-white text-sm font-semibold 
        font-title hover:cursor-pointer hover:bg-red-800 hover:scale-105 ${structureCreated ? "" : "hidden"}`} onClick={deleteStructure}/>
      </section>

      <section className={`${structureCreated ? "" : "hidden"} w-2/3`}> 
        <DinamicasParciales {...props}></DinamicasParciales>
      </section>
    </main>
  );
};

export { DinamicasRenderParciales };

