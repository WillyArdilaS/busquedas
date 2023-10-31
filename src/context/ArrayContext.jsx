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

  // Sequential
  const addData = () => {
    let repeatedKey = false;
    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      if(newData[i][0] === key) {
        repeatedKey = true;
        break;
      }
    }

    for (let i = 0; i < newData.length; i++) {
      if(newData[i][0] === "") {
        setArrayFull(false);
        break;
      } else {
        setArrayFull(true);
      }
    }

    if(repeatedKey == false && arrayFull == false) {
      for (let i = 0; i < newData.length; i++) {
        if (newData[i][0] === "") {
          alert(`Se insertó la clave ${key}. Nombre: ${name}. Apellido: ${lastName}`);
          newData[i] = [key, name, lastName];
          setData(newData);
          break; 
        }
      }
    } else {
      alert(`La clave ${key} ya ha sido ingresada`);
    }
  }

  const searchDataSeq = () => {
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

  // Binary
  const sortData = () => {
    alert("Ordenando arreglo...");

    const sortedData = data.filter(item => item[0] !== "").sort((a, b) => a[0] - b[0]);
    const newData = new Array(data.length).fill(["", "", ""]);

    for (let i = 0; i < sortedData.length; i++) {
      newData[i] = sortedData[i];
    }
  
    setData(newData);
  
  };

  const searchDataBin = () => {
    let dataFound = false;

    let left = 0;
    let right = data.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (data[mid][0] === key) {
        setName(data[mid][1]);
        setLastName(data[mid][2]);
        setPosition(mid + 1);
        dataFound = true;
        return;
      } else if (data[mid][0] < key) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // Si no se encontró la clave
    if(dataFound == false) {
      alert(`La clave ${key} no se encuentra dentro de la estructura`);
      setKey();
      setName("");
      setLastName("");
      setPosition();
    }
  };

  // Hash
  const hashMod = () => {
    return (key % arraySize);
  }

  const addDataHash = () => {
    let repeatedKey = false;
    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      if(newData[i][0] === key) {
        repeatedKey = true;
        break;
      }
    }

    for (let i = 0; i < newData.length; i++) {
      if(newData[i][0] === "") {
        setArrayFull(false);
        break;
      } else {
        setArrayFull(true);
      }
    }

    if(repeatedKey == false && arrayFull == false) {
	    let index = hashMod();

      if (newData[index][0] === "") {
        alert(`Se insertó la clave ${key}. Nombre: ${name}. Apellido: ${lastName}`);
        newData[index] = [key, name, lastName];
        setData(newData);
      } else {
        alert(`Se presenta una colisión en la posición ${index}`);
      }
    } else {
      alert(`La clave ${key} ya ha sido ingresada`);
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
      searchDataSeq,
      sortData,
      searchDataBin,
      addDataHash}}>

      {children}
    </ArrayContext.Provider>
  );
};

export default ArrayProvider;
