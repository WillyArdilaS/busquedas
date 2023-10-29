const OptionMenu = () => {
    const insertKeys = () => {
        
    }
    
    const searchKeys = () => {

    }
    
    const deleteArray = () => {

    }

    return (
        <article id="menu" className="flex flex-col items-center w-1/6 font-title">
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