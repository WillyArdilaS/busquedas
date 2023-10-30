import { useArrayContext } from "../context/ArrayContext";

const KeyInfo = () => {
    const {key, name, lastName, position} = useArrayContext();

    return (
        <article id="keyInfo" className="flex flex-col mt-12 px-4 py-6 bg-white rounded-lg shadow-md font-title">
            <div id="keyInfo-key" className="mb-2 font-medium"> Clave: <span className="ml-2 font-normal"> {key} </span> </div>
            <div id="keyInfo-position" className="mb-2 font-medium"> Posición: <span className="ml-2 font-normal"> {position} </span> </div>
            <div id="keyInfo-name" className="mb-2 font-medium"> Nombre: <span className="ml-2 font-normal"> {name} </span> </div>
            <div id="keyInfo-lastName" className="mb-2 font-medium"> Apellido: <span className="ml-2 font-normal"> {lastName} </span> </div>
        </article>
    )
}

export default KeyInfo