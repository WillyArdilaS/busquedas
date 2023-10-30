import { useArrayContext } from "../../context/ArrayContext";

const OptionMenu = ({setArrayCreated, setInsertOption, setSearchOption, setShowInfo, setCollisionSelected}) => {
    const {setKey, setName, setLastName, setPosition, setArrayFull} = useArrayContext();

    const insertKeys = () => {
        setInsertOption(true);
        setSearchOption(false);
        setShowInfo(false);
    }
    
    const searchKeys = () => {
        setSearchOption(true);
        setInsertOption(false);
    }
    
    const deleteArray = () => {
        setArrayCreated(false);
        setInsertOption(false);
        setSearchOption(false);
        setSearchOption(false);
        setCollisionSelected(false);
        setArrayFull(false);

        setKey(0);
        setName("");
        setLastName("");
        setPosition("");
    }

    return (
        <article id="menu" className="flex flex-col items-center mt-12 font-title">
            <input type="button" id="menu-insertKeys" value="Insertar claves" className="w-3/4 py-3 mb-4 rounded-lg bg-gray-900 shadow-lg text-white text-sm font-semibold 
            font-title hover:cursor-pointer hover:bg-gray-800 hover:scale-105" onClick={insertKeys}/>
                    
            <input type="button" id="menu-searchKeys" value="Buscar claves" className="w-3/4  py-3 mb-4 rounded-lg bg-gray-900 shadow-lg text-white text-sm font-semibold 
            font-title hover:cursor-pointer hover:bg-gray-800 hover:scale-105" onClick={searchKeys}/>
                    
            <input type="button" id="menu-deleteArray" value="Eliminar arreglo" className="w-3/4  py-3 rounded-lg bg-red-900 shadow-lg text-white text-sm font-semibold 
            font-title hover:cursor-pointer hover:bg-red-800 hover:scale-105" onClick={deleteArray}/>
        </article>

    )
}

export default OptionMenu