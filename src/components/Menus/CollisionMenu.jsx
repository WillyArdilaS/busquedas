import { useArrayContext } from "../../context/ArrayContext";

const CollisionMenu = ({collisionSelected, setCollisionSelected}) => {
    const {collision, setCollision} = useArrayContext();

    const handleSelectCollision = () => {
        if(collision != "") {
            setCollisionSelected(true);
            alert(`El método de solución de colisiones es ${collision}`);
        } else {
            alert("No ha seleccionado ningún método de solución de colisiones");
        }
    }

    return (
        <form id="collisionForm" className="flex flex-col px-4 py-6 mt-12 bg-white rounded-lg shadow-md font-title">
            <div id="collisionForm-collision" className="flex flex-col justify-between items-center mb-4">
                <label htmlFor="collision" className="font-medium mb-2"> Solución de colisiones </label>
                <select name="collision" id="collision" className="w-3/4 text-sm" value={collision} disabled={collisionSelected} 
                onChange={(e) => setCollision(e.target.value)}>
                    <option value="" disabled hidden></option>
                    <option value="lineal"> Lineal </option>
                    <option value="cuadratica"> Cuadrática </option>
                    <option value="dobleHash"> Doble hash </option>
                </select>
            </div>

            <section id="insertForm-button" className="flex justify-center mt-2">
                <input type="button" id="button-insertKey" value="Elegir método" className={`w-3/4 py-3 rounded-lg text-white text-sm font-semibold font-title 
                ${collisionSelected ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800 hover:cursor-pointer hover:scale-105'}`} 
                onClick={handleSelectCollision} disabled={collisionSelected}/>
            </section>
        </form>
    )
}

export default CollisionMenu