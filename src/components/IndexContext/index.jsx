// IndexContext.jsx
import { useLocalStorage } from './useLocalStorage';
import React, { useState, createContext } from 'react';


const IndexContext = createContext();

function UserProvider({ children }) {

  const [numRegistros, setNumRegistros] = useState();
  const [longitudRegistros, setLongitudRegistro] = useState();
  const [longitudIndice, setLongitudIndice] = useState();
  const [tamBloque, setTamBloque] = useState();

  const {
    item: registros,
    saveItem: saveregistros,
  } = useLocalStorage('Registros', []);

  const addStep = () => {
    var registro ={

      "numRegistros": numRegistros,
      "longitudRegistros": longitudRegistros,
      "tamBloque": tamBloque,
      "longitudIndice": longitudIndice
    };
    saveregistros(registro);

  };

  return (
    <IndexContext.Provider value={{
      numRegistros,
      setNumRegistros,
      longitudRegistros,
      setLongitudRegistro,
      tamBloque,
      setTamBloque,
      longitudIndice,
      setLongitudIndice,
      addStep,
      registros
    }}>
      {children}
    </IndexContext.Provider>
  );
};

export { IndexContext, UserProvider };


// const defaultTodos = {
//  numRegistros: '250000', longitudRegistros: '150', tamBloque: '8192', tipoIndice: '1', longitudIndice: '15'
// };

// localStorage.setItem('Registros', JSON.stringify(defaultTodos));
// localStorage.removeItem('Registros');