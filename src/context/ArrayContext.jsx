import { createContext, useContext, useEffect, useState } from "react";

const ArrayContext = createContext();

export const useArrayContext = () => {
  return useContext(ArrayContext);
};

export const ArrayProvider = ({ children }) => {
  const [arraySize, setArraySize] = useState(1);
  const [arrayDigits, setArrayDigits] = useState(1);

  const [key, setKey] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState(0);

  const [arrayFull, setArrayFull] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if(arrayFull == true) {
      alert("No hay espacio para insertar otro registro");
    }
  }, [arrayFull])

  const addData = () => {
    let repeatedKey = false;
    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      if(newData[i][0] === key) {
        repeatedKey = true;
        break;
      }
    }

    if(repeatedKey == false) {
      for (let i = 0; i < newData.length; i++) {
        if (newData[i][0] === "") {
          alert(`Se insertó la clave ${key}. Nombre: ${name}. Apellido: ${lastName}`);
          newData[i] = [key, name, lastName];
          setData(newData);
          setArrayFull(false);
          break; 
        }
  
        setArrayFull(true);
      }
    } else {
      alert(`La clave ${key} ya ha sido ingresada`);
    }
  }

  const searchData = () => {
    let dataFound = false;

    for (let i = 0; i < data.length; i++) {
      if(data[i][0] === key) {
        setName(data[i][1]);
        setLastName(data[i][2]);
        setPosition(i+1);
        dataFound = true;
      }
    }

    if(dataFound == false) {
      alert(`La clave ${key} no se encuentra dentro de la estructura`);
      setKey();
      setName("");
      setLastName("");
      setPosition();
    }
  }

  return (
    <ArrayContext.Provider value={{
      arraySize, setArraySize, 
      arrayDigits, setArrayDigits, 
      key, setKey, 
      name, setName, 
      lastName, setLastName, 
      position, setPosition,
      data, setData, 
      arrayFull, setArrayFull,
      addData, 
      searchData}}>

      {children}
    </ArrayContext.Provider>
  );
};

export default ArrayProvider;
