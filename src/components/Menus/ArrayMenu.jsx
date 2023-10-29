import { useState } from "react";

const ArrayMenu = () => {
    const [arraySize, setArraySize] = useState(1);
    const [arrayDigits, setArrayDigits] = useState(1)
    const [arrayCreated, setArrayCreated] = useState(false);

    const handleCreateArray = () => {
        setArrayCreated(true);
        alert(`Arreglo de tamaño ${arraySize} y con ${arrayDigits} dígitos creado`);
    }

    return (
        <form id="form" className="flex flex-col w-1/6 px-4 py-6 bg-white rounded-lg shadow-md font-title">
            <div id="form-arraySize" className="flex justify-between items-center mb-4">
                <label htmlFor="arraySize" className="font-medium"> Tamaño arreglo </label>
                <input type="number" name="arraySize" id="arraySize" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} value={arraySize} 
                onChange={(e) => setArraySize(e.target.value)} required/>
            </div>
            
            <div id="form-arrayDigits" className="flex justify-between items-center mb-4">
                <label htmlFor="arrayDigits" className="font-medium"> Cantidad dígitos </label>
                <input type="number" name="arrayDigits" id="arrayDigits" className="w-2/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} value={arrayDigits} 
                onChange={(e) => setArrayDigits(e.target.value)} required/>
            </div>

            <section id="form-button" className="flex justify-center mt-2">
                <input type="button" id="button-createArray" value="Crear arreglo" className={`w-3/4 py-3 rounded-lg text-white text-sm font-semibold font-title 
                ${arrayCreated ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800 hover:cursor-pointer hover:scale-105'}`} onClick={handleCreateArray} 
                disabled={arrayCreated}/>
            </section>
        </form>
    )
}

export default ArrayMenu