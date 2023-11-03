import { useEffect } from "react"
import { useArrayContext } from "../../context/ArrayContext";

const Array = () => {
    const {arraySize, data, setData} = useArrayContext();

    useEffect(() => {
      const newData = [];
      for (let i = 1; i <= arraySize; i++) {
        const clave = "";
        const nombre = "";
        const apellido = "";
        newData.push([clave, nombre, apellido]);
      }
      setData(newData);
    }, [arraySize]);

    return (
        <table id="array" className="bg-white shadow-md font-title text-center">
            <thead>
                <tr>
                    <th className="px-10 py-2 border-x-2"> Posición </th> 
                    <th className="px-10 py-2 border-x-2"> Clave </th> 
                    <th className="px-10 py-2 border-x-2"> Nombre </th> 
                    <th className="px-10 py-2 border-x-2"> Apellido </th> 
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className="border-y-2">
                        <td className="px-10 py-2 border-x-2">{index+1}</td>
                        <td className="px-10 py-2 border-x-2">{item[0]}</td>
                        <td className="px-10 py-2 border-x-2">{item[1]}</td>
                        <td className="px-10 py-2 border-x-2">{item[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Array