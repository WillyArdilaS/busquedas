import { createContext, useContext, useEffect, useState } from "react";

const ArrayContext = createContext();

export const useArrayContext = () => {
  return useContext(ArrayContext);
};

export const ArrayProvider = ({ children }) => {
  const [arraySize, setArraySize] = useState(1);
  const [arrayDigits, setArrayDigits] = useState(1);

  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [collision, setCollision] = useState("");

  const [arrayFull, setArrayFull] = useState(false);
  const [data, setData] = useState([]);

  // Arreglo lleno
  useEffect(() => {
    if(arrayFull == true) {
      alert("No hay espacio para insertar otro registro");
    }
  }, [arrayFull]);

  useEffect(() => {
    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      if(newData[i][0] === "") {
        setArrayFull(false);
        break;
      } else {
        setArrayFull(true);
      }
    }
  }, [data])

  // Sequential
  const addData = () => {
    let repeatedKey = false;
    const newData = [...data];

    // Clave repetida
    for (let i = 0; i < newData.length; i++) {
      if(newData[i][0] === key) {
        repeatedKey = true;
        break;
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

  const deleteData = () => {
    const deletedData = [...data];
    deletedData[position-1] = ["", "", ""];
    setData(deletedData);

    alert(`Registro en la posición ${position} eliminado`);

    setKey("");
    setName("");
    setLastName("");
    setPosition("");
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
      setKey("");
      setName("");
      setLastName("");
      setPosition("");
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

    if(dataFound == false) {
      alert(`La clave ${key} no se encuentra dentro de la estructura`);
      setKey("");
      setName("");
      setLastName("");
      setPosition("");
    }
  };

  // Hash
  const hashMod = () => {
    return (key % arraySize);
  }
  
  const hashCuadrado = () => {
    const squaredKey = key * key;
    const squaredKeyString = squaredKey.toString();
    const centralDigitIndex = Math.floor((squaredKeyString.length - 1) / 2);
    const centralDigit = parseInt(squaredKeyString[centralDigitIndex]);

    return centralDigit % arraySize;
  };

  const hashTruncamiento = () => {
    const keyString = key.toString();
    const numDigitsToTake = Math.ceil(Math.log10(data.length));
    const randomIndex = Math.floor(Math.random() * (keyString.length - numDigitsToTake + 1));
    const truncatedKey = keyString.substr(randomIndex, numDigitsToTake);
    const index = parseInt(truncatedKey) % arraySize;
  
    return index;
  };

  const hashPlegamiento = () => {
    const keyString = key.toString();
    const numDigitsPerPart = Math.ceil(Math.log10(data.length));
    let sum = 0;
  
    for (let i = 0; i < keyString.length; i += numDigitsPerPart) {
      const part = keyString.substr(i, numDigitsPerPart);
      sum += parseInt(part);
    }
  
    const index = sum % arraySize;
  
    return index;
  };

  const addDataHash = (hashType) => {
    let repeatedKey = false;
    const newData = [...data];

    // Clave repetida
    for (let i = 0; i < newData.length; i++) {
      if(newData[i][0] === key) {
        repeatedKey = true;
        break;
      }
    }

    if(repeatedKey == false && arrayFull == false) {
      let index; 

      if(hashType == 1) {
        index = hashMod();
      } else if(hashType == 2) {
        index = hashCuadrado();
      }  else if(hashType == 3) {
        index = hashTruncamiento();
      } else if(hashType == 4) {
        index = hashPlegamiento();
      }
      
      if(newData[index][0] === "") {
        alert(`Se insertó la clave ${key} en la posición ${index+1}. 
        \nNombre: ${name} \nApellido: ${lastName}`);
        newData[index] = [key, name, lastName];
        setData(newData);
      } else {
        let cycle= false;
        let i = 1;

        do {
          alert(`Se presenta una colisión en la posición ${index+1}. 
          \nMétodo de solución: ${collision}`);

          if(collision == "lineal") {
            index = linealCollision(index);
          } else if(collision == "cuadratica") {
            index = cuadraticaCollision(index, i);
          } else if(collision == "dobleHash") {
            index = doubleHashCollision(index, hashType);
          }

          if(i > (arraySize*2)) {
            cycle = true;
            break;
          } 
          i++;
        } while(newData[index][0] !== "");

        if(cycle == false) {
          alert(`Se insertó la clave ${key} en la posición ${index+1}. 
          \nNombre: ${name} \nApellido: ${lastName}`);

          newData[index] = [key, name, lastName];
          setData(newData);
        } else {
          alert(`No se pudo insertar la clave ${key} porque se presentó un ciclo`)
        }
      }
    } else {
      alert(`La clave ${key} ya ha sido ingresada`);
    }
  } 

  const searchDataHash = (hashType) => {
    let dataFound = false;
    let index;
    
    if(hashType == 1) {
      index = hashMod();
    } else if(hashType == 2) {
      index = hashCuadrado();
    } else if(hashType == 3) {
      index = hashTruncamiento();
    }  else if(hashType == 4) {
      index = hashPlegamiento();
    }
 
    if (data[index][0] == key) {
      setName(data[index][1]);
      setLastName(data[index][2]);
      setPosition(index+1);
      dataFound = true;
    } else {
      let i = 1;

      do {
        if(collision == "lineal") {
          index = linealCollision(index);
        } else if(collision == "cuadratica") {
          index = cuadraticaCollision(index, i);
        } else if(collision == "dobleHash") {
          index = doubleHashCollision(index, hashType);
        }

        if (data[index][0] == key) {
          setName(data[index][1]);
          setLastName(data[index][2]);
          setPosition(index+1);
          dataFound = true;
          break;
        }

        if(i > (arraySize+1)) {
          break;
        }
        i++;
      } while (data[index][0] != "");
    }

    if(dataFound == false) {
      alert(`La clave ${key} no se encuentra dentro de la estructura`);
      setKey("");
      setName("");
      setLastName("");
      setPosition("");
    }      
  }

  // Collisions
  const linealCollision = (index) => {
    return ((index + 1) % arraySize);
  }

  const cuadraticaCollision = (index, i) => {
    return ((index + (i*i)) % arraySize);
  }
  
  const doubleHashCollision = (index, hashType) => {
    let newIndex = index;
    let displacement = 1;
  
    while (true) {
      if (hashType === 1) {
        newIndex = (index + displacement * hashMod()) % arraySize;
      } else if (hashType === 2) {
        newIndex = (index + displacement * hashCuadrado()) % arraySize;
      } else if (hashType === 3) {
        newIndex = (index + displacement * hashTruncamiento()) % arraySize;
      } else if (hashType === 4) {
        newIndex = (index + displacement * hashPlegamiento()) % arraySize;
      }
  
      if (newIndex !== index) {
        return newIndex;
      }
  
      displacement++;
    }
  };
  

  return (
    <ArrayContext.Provider value={{
      arraySize, setArraySize, 
      arrayDigits, setArrayDigits, 
      key, setKey, 
      name, setName, 
      lastName, setLastName, 
      position, setPosition,
      collision, setCollision,
      data, setData, 
      arrayFull, setArrayFull,
      addData, 
      deleteData,
      searchDataSeq,
      sortData,
      searchDataBin,
      addDataHash,
      searchDataHash}}>

      {children}
    </ArrayContext.Provider>
  );
};

export default ArrayProvider;
