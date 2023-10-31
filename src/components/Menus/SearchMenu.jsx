import { useArrayContext } from "../../context/ArrayContext";
import KeyInfo from '../KeyInfo'

const SearchMenu = ({showInfo, setShowInfo, type}) => {
    const {key, setKey, searchDataSeq, searchDataBin} = useArrayContext();

    const handleSearchKey = () => {
        alert(`Se está buscando la clave ${key}`);
        if(type == "sequential") {
            searchDataSeq();
        } else if(type == "binary") {
            searchDataBin();
        } else {
            
        }

        setShowInfo(true);
    }

    return (
        <>
            <form id="searchForm" className="flex flex-col px-4 py-6 bg-white rounded-lg shadow-md font-title">
                <div id="searchForm-key" className="flex justify-between items-center mb-4">
                    <label htmlFor="searchKey" className="font-medium"> Clave </label>
                    <input type="number" name="searchKey" id="searchKey" className="w-3/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={1}
                    onChange={(e) => setKey(e.target.value)} required/>
                </div>

                <section id="insertForm-button" className="flex justify-center mt-2">
                    <input type="button" id="button-insertKey" value="Buscar clave" className="w-3/4 py-3 rounded-lg bg-gray-900 shadow-lg text-white text-sm font-semibold 
                    font-title hover:cursor-pointer hover:bg-gray-800 hover:scale-105" onClick={handleSearchKey}/>
                </section>
            </form>

            <div className={showInfo? "" : "hidden"}>
                <KeyInfo />
            </div>
        </>
    )
}

export default SearchMenu