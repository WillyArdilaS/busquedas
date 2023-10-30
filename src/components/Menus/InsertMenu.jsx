import { useArrayContext } from "../../context/ArrayContext";

const InsertMenu = () => {
    const {arrayDigits, key, setKey, name, setName, lastName, setLastName, addData, arrayFull} = useArrayContext();

    const handleInsert = () => {
        const keyString = key.toString();
        const actualDigits = keyString.length;

        if(key == "" || name == "" || lastName == "") {
            alert("Faltan datos por ingresar");
        } else if (arrayDigits != actualDigits) {
            alert(`Las claves deben tener ${arrayDigits} dígitos`);
        } else {
            addData();
        }
    }
    return (
        <form id="insertForm" className="flex flex-col px-4 py-6 bg-white rounded-lg shadow-md font-title">
            <div id="insertForm-key" className="flex justify-between items-center mb-4">
                <label htmlFor="key" className="font-medium"> Clave </label>
                <input type="number" name="key" id="key" className="w-3/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={0}
                onChange={(e) => setKey(e.target.value)} disabled={arrayFull} required/>
            </div>
            
            <div id="insertForm-name" className="flex justify-between items-center mb-4">
                <label htmlFor="name" className="font-medium"> Nombre </label>
                <input type="text" name="name" id="name" className="w-3/5 px-2 py-2 rounded-sm shadow-md text-sm font-normal" value={name}
                onChange={(e) => setName(e.target.value)} disabled={arrayFull} required/>
            </div>
            
            <div id="insertForm-lastName" className="flex justify-between items-center mb-4">
                <label htmlFor="lastName" className="font-medium"> Apellido </label>
                <input type="text" name="lastName" id="lastName" className="w-3/5 px-2 py-2 rounded-sm shadow-md text-sm font-normal" value={lastName}
                onChange={(e) => setLastName(e.target.value)} disabled={arrayFull} required/>
            </div>

            <section id="insertForm-button" className="flex justify-center mt-2">
                <input type="button" id="button-insertKey" value="Insertar clave" className={`w-3/4 py-3 rounded-lg shadow-lg text-white text-sm font-semibold font-title 
                ${arrayFull ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800 hover:cursor-pointer hover:scale-105'}`} onClick={handleInsert} 
                disabled={arrayFull}/>
            </section>
        </form>
    )
}

export default InsertMenu