import { useState } from "react";

const InsertMenu = () => {
    const [key, setKey] = useState(0);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleInsertKey = () => {
        alert(`Se insertó la clave ${key}. Nombre: ${name}. Apellido: ${lastName}`);
    }

    return (
        <form id="insertForm" className="flex flex-col w-1/6 px-4 py-6 bg-white rounded-lg shadow-md font-title">
            <div id="insertForm-key" className="flex justify-between items-center mb-4">
                <label htmlFor="key" className="font-medium"> Clave </label>
                <input type="number" name="key" id="key" className="w-3/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1} value={key} 
                onChange={(e) => setKey(e.target.value)} required/>
            </div>
            
            <div id="insertForm-name" className="flex justify-between items-center mb-4">
                <label htmlFor="name" className="font-medium"> Nombre </label>
                <input type="text" name="name" id="name" className="w-3/5 px-2 py-2 rounded-sm shadow-md text-sm font-normal" 
                onChange={(e) => setName(e.target.value)} required/>
            </div>
            
            <div id="insertForm-lastName" className="flex justify-between items-center mb-4">
                <label htmlFor="lastName" className="font-medium"> Apellido </label>
                <input type="text" name="lastName" id="lastName" className="w-3/5 px-2 py-2 rounded-sm shadow-md text-sm font-normal" 
                onChange={(e) => setLastName(e.target.value)} required/>
            </div>

            <section id="insertForm-button" className="flex justify-center mt-2">
                <input type="button" id="button-insertKey" value="Insertar clave" className="w-3/4 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 shadow-lg text-white text-sm 
                font-semibold font-title hover:cursor-pointer hover:scale-105" onClick={handleInsertKey}/>
            </section>
        </form>
    )
}

export default InsertMenu