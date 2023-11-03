import { useArrayContext } from "../../context/ArrayContext";

const KeyInfo = () => {
    const {key, name, lastName, position, deleteData} = useArrayContext();

    return (
        <article id="keyInfo" className="flex flex-col mt-12 px-4 py-6 bg-white rounded-lg shadow-md font-title">
            <div id="keyInfo-position" className="mb-2 font-medium"> Posición: <span className="ml-2 font-normal"> {position} </span> </div>
            <div id="keyInfo-key" className="mb-2 font-medium"> Clave: <span className="ml-2 font-normal"> {key} </span> </div>
            <div id="keyInfo-name" className="mb-2 font-medium"> Nombre: <span className="ml-2 font-normal"> {name} </span> </div>
            <div id="keyInfo-lastName" className="mb-2 font-medium"> Apellido: <span className="ml-2 font-normal"> {lastName} </span> </div>

            <input type="button" id="menu-deleteArray" value="Eliminar registro" className={`w-3/4 mx-auto mt-2 py-3 rounded-lg  shadow-lg text-white text-sm font-semibold 
            font-title ${position == "" ? 'bg-red-300 cursor-not-allowed' : 'bg-red-900 hover:bg-red-800 hover:cursor-pointer hover:scale-105'}`} onClick={deleteData}
            disabled={(position == "") ? true : false} />
        </article>
    )
}

export default KeyInfo