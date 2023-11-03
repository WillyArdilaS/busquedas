import React, { useState, useEffect } from 'react';

function Dinamicas(props) {
    const [estructura, setEstructura] = useState([]);
    const [valorInput, setValorInput] = useState('');
    const [matrizTemp, setMatrizTemp] = useState([]);
    const [matrizTempE, setMatrizTempE] = useState([]);
    const [keyM, setKeyM] = useState('');

    
    useEffect(() => {
        setEstructura(Array.from({ length: props.cubetas }, () => Array.from({ length: props.registros }, () => -1)));
    }, [props.registros]);

    useEffect(() => {
        
        if(matrizTemp.length > 0){
            // Se transforma nuevamente en la original
            for (let i = 0; i < props.cubetas; i++) {
                for (let j = 0; j < props.registros; j++) {
                    if (matrizTemp[i] && matrizTemp[i][j] !== -1) {
                        const key = matrizTemp[i][j];
                        const insercion = insert(key);
                        if (!insercion && !matrizLlena()) {
                            alert("Se presentó una colisión");
                        }
                    }
                }
            }
            let cubeta;
            const key = keyM;
            switch (props.hash) {
                case 1:
                    cubeta = hashMod(key, props.cubetas);
                    break;
                case 2:
                    cubeta = hashCuadrado(key, props.cubetas);
                    break;
                case 3:
                    cubeta = hashTrunc(key, props.cubetas);
                    break;
                case 4:
                    cubeta = hashPleg(key, props.cubetas);
                    break;
            }

            let insertado = false;
            for (let i = 0; i < props.registros; i++) {
                if (estructura[cubeta][i] === -1) {
                    estructura[cubeta][i] = key;
                    insertado = true;
                    break;
                }
            }
            setMatrizTemp([]);
        }
        

    }, [matrizTemp]);

    useEffect(() => {
        if(matrizTempE.length > 0){
            for (let i = 0; i < (props.cubetas * 2); i++) {
                for (let j = 0; j < props.registros; j++) {
                    if (matrizTempE[i] && matrizTempE[i][j] !== -1) {
                        const insercion = insert(matrizTempE[i][j]);
                        if (!insercion && !matrizLlena()) {
                            alert("Se presentó una colisión");
                        }
                    }
                }
            }
        }
    }, [matrizTempE]);

    const hashMod = (key, tam) => {
        return (key % tam);
      }

      const hashCuadrado = (key, tam) => {
        const squaredKey = key * key;
        const squaredKeyString = squaredKey.toString();
        const centralDigitIndex = Math.floor((squaredKeyString.length - 1) / 2);
        const centralDigit = parseInt(squaredKeyString[centralDigitIndex]);
    
        return centralDigit % tam;
      };

      const hashTrunc = (key,tam) => {
        const keyString = key.toString();
        const numDigitsToTake = Math.ceil(Math.log10(data.length));
        const randomIndex = Math.floor(Math.random() * (keyString.length - numDigitsToTake + 1));
        const truncatedKey = keyString.substr(randomIndex, numDigitsToTake);
        const index = parseInt(truncatedKey) % tam;
      
        return index;
      };

      const hashPleg = (key, tam) => {
        const keyString = key.toString();
        const numDigitsPerPart = Math.ceil(Math.log10(data.length));
        let sum = 0;
      
        for (let i = 0; i < keyString.length; i += numDigitsPerPart) {
          const part = keyString.substr(i, numDigitsPerPart);
          sum += parseInt(part);
        }
      
        const index = sum % tam;
      
        return index;
      };

      const verificarDensidadReduccion = () => {
        let ocupados = 0;
        for (let i = 0; i < props.cubetas; i++) {
            for (let j = 0; j < props.registros; j++) {
                if (estructura[i][j] !== -1) {
                    ocupados++;
                }
            }
        }
        const densidadActual = (ocupados * 100) / (props.cubetas * props.registros);
        return densidadActual <= props.densidadReduccion;
    };

    const verificarDensidadExpansion = () => {
        let ocupados = 0;
        for (let i = 0; i < props.cubetas; i++) {
            for (let j = 0; j < props.registros; j++) {
                if (estructura[i][j] !== -1) {
                    ocupados++;
                }
            }
        }
        const densidadActual = (ocupados * 100) / (props.cubetas * props.registros);
        return densidadActual >= props.densidadOcupacion;
    };

    const matrizLlena = () => {
        let lleno = true;
        for (let i = 0; i < props.cubetas; i++) {
            for (let j = 0; j < props.registros; j++) {
                if (estructura[i][j] === -1) {
                    lleno = false;
                }
            }
        }
        return lleno;
    };

    const expandir = () => {
        const matrizTemp_int = [...estructura.map((cubeta) => cubeta.slice())];
    
        // Duplica la matriz en la temporal
        for (let i = 0; i < props.cubetas; i++) {
            for (let j = 0; j < props.registros; j++) {
                if (matrizTemp_int[i][j] !== -1) {
                    matrizTemp_int[i][j] = estructura[i][j];
                }
            }
        }
    
        // Actualiza la cantidad de cubetas después de expandir
        const newCubetas = props.cubetas * 2;
        props.setCubetas(newCubetas);
        setEstructura(Array.from({ length: newCubetas }, () => Array.from({ length: props.registros }, () => -1)));
        setMatrizTemp(matrizTemp_int);
        
    }
    

    const reducir = () => {
        const matrizETemp = [...estructura.map((cubeta) => cubeta.slice())];

        // Duplica la matriz en la temporal
        for (let i = 0; i < props.cubetas; i++) {
            for (let j = 0; j < props.registros; j++) {
                if (matrizETemp[i][j] !== -1) {
                    matrizETemp[i][j] = estructura[i][j];
                }
            }
        }

        
        // Se transforma nuevamente en la original
        const newCubetas = props.cubetas / 2;
        props.setCubetas(newCubetas);
        setEstructura(Array.from({ length: newCubetas }, () => Array.from({ length: props.registros }, () => -1)));
        setMatrizTempE(matrizETemp)
        
    };

    const search = (key) => {
        for (let i = 0; i < props.cubetas; i++) {
            for (let j = 0; j < props.registros; j++) {
                if (estructura[i][j] === key) {
                    return true; // Elemento encontrado
                }
            }
        }
        return false; // Elemento no encontrado
    };

    const eliminar = (key) => {
        let cubeta;
        switch (props.hash) {
            case 1:
                cubeta = hashMod(key, props.cubetas);
                break;
            case 2:
                cubeta = hashCuadrado(key, props.cubetas);
                break;
            case 3:
                cubeta = hashTrunc(key, props.cubetas);densidadReduccion
                break;
            case 4:
                cubeta = hashPleg(key, props.cubetas);
                break;
        }

        let eliminado = false;
        for (let i = 0; i < props.registros; i++) {
            if (estructura[cubeta][i] === key) {
                estructura[cubeta][i] = -1;
                eliminado = true;
                break;
            }
        }

        if (eliminado) {
            if (verificarDensidadReduccion()) {
                reducir();
            }
        }
        return eliminado;
    };

    const insert = (key) => {
        let repetido;
        setKeyM(key);
        do {
            // Verificar si la clave ya está repetida
            repetido = search(key);
            if (repetido) {
                alert('Esta clave ya fue insertada');
                return false;
            }
        } while (repetido);

        if (verificarDensidadExpansion()) {
            expandir();
        }

        let cubeta;
        switch (props.hash) {
            case 1:
                cubeta = hashMod(key, props.cubetas);
                break;
            case 2:
                cubeta = hashCuadrado(key, props.cubetas);
                break;
            case 3:
                cubeta = hashTrunc(key, props.cubetas);
                break;
            case 4:
                cubeta = hashPleg(key, props.cubetas);
                break;
        }

        let insertado = false;
        for (let i = 0; i < props.registros; i++) {
            if (estructura[cubeta][i] === -1) {
                estructura[cubeta][i] = key;
                insertado = true;
                break;
            }
        }

        return insertado;
    };

    const contarDigitos = (numero) => {
        // Convierte el número a cadena y calcula la longitud
        var cantidadDigitos = numero.toString().length;
        return cantidadDigitos;
    }

    const handleInsert = () => {
        const valor = parseInt(valorInput);

        if (contarDigitos(valor) !== props.digitos) {
            alert(`Las claves deben tener ${props.digitos} dígitos`);
        }else{

            if (!isNaN(valor)) {
                insert(valor);
                setValorInput(''); // Limpiar el input
            } else {
                alert('Por favor, ingresa una clave numérica válida');
            }
        }
    };

    // Función para manejar la eliminación de un valor
    const handleDelete = () => {
        const valor = parseInt(valorInput);
        if (!isNaN(valor)) {
            if (eliminar(valor)) {
                setValorInput(''); // Limpiar el input
            } else {
                alert(`La clave ${valor} no se encontró en la estructura`);
            }
        } else {
            alert('Por favor, ingresa una clave numérica válida');
        }
    };

    function renderizarEstructura() {
        if (!estructura || estructura.length === 0) {
            return <div>Estructura no inicializada.</div>;
        }

        return (
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <form id="form" className="px-4 py-6 bg-white rounded-lg shadow-md font-title">
                        <div id="form-key" className="flex justify-between items-center mb-4">
                            <label htmlFor="key" className="font-medium"> Clave </label>
                            <input type="number" name="key" id="key" className="w-3/5 px-2 py-1 rounded-sm shadow-md text-sm font-normal" min={0} value={valorInput}
                            onChange={(e) => setValorInput(e.target.value)} required/>
                        </div>

                        <section id="form-button" className="flex justify-center mt-8">
                            <input type="button" id="button-insertKey" value="Insertar clave" className={`w-3/4 py-3 rounded-lg shadow-lg text-white text-sm font-semibold font-title 
                            bg-gray-900 hover:bg-gray-800 hover:cursor-pointer hover:scale-105`} onClick={handleInsert} />
                        </section>
                        
                        <section id="form-button" className="flex justify-center mt-4">
                            <input type="button" id="button-deleteKey" value="Eliminar clave" className={`w-3/4 py-3 rounded-lg shadow-lg text-white text-sm font-semibold font-title 
                            bg-red-900 hover:bg-red-800 hover:cursor-pointer hover:scale-105`} onClick={handleDelete} />
                        </section>
                    </form>

                </div>

                <table className='w-2/3'>
                    <thead className='font-title font-semibold'>
                        <tr>
                            <th></th>
                            {Array.from({ length: props.registros }, (_, j) => (
                                <th key={j} className='px-2 py-2 border-x-2'>Registro {j}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className='font-title font-semibold'>
                        {estructura.map((cubeta, i) => (
                            <tr key={i}>
                                <td className='px-2 py-2 border-x-2 border-y-2'>Cubeta {i}</td>
                                {cubeta.map((valor, j) => (
                                    <td key={j} className='px-2 py-2 border-x-2 border-y-2'>{valor !== -1 ? valor : ''}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        renderizarEstructura()
    );
}

export { Dinamicas };
