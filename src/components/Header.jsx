import { useState, useRef } from "react";

const Header = () => {
    const [dropdownStates, setDropdownStates] = useState([false, false, false]);
    const [doubleDropdownStates, setDoubleDropdownStates] = useState([false, false, false]);
    const [dropdownPositions, setDropdownPositions] = useState([{ top: 0, left: 0 }, { top: 0, left: 0 }, { top: 0, left: 0 }]);
    const dropdownButtonRefs = [useRef(), useRef(), useRef()];

    const calculateDropdownPosition = (index) => {
        if (dropdownButtonRefs[index].current) {
            const buttonRect = dropdownButtonRefs[index].current.getBoundingClientRect();
            const updatedDropdownPositions = [...dropdownPositions];
            updatedDropdownPositions[index] = { top: buttonRect.bottom, left: buttonRect.left };
            setDropdownPositions(updatedDropdownPositions);
        }
    };

    const toggleDropdown = (index) => {
        const updatedDropdownStates = [...dropdownStates];
    
        updatedDropdownStates.forEach((_, i) => {
            if (i !== index) {
                updatedDropdownStates[i] = false;
            }
        });
    
        updatedDropdownStates[index] = !updatedDropdownStates[index];
        setDropdownStates(updatedDropdownStates);
    
        calculateDropdownPosition(index);
        setDoubleDropdownStates([false, false, false]);
    };
    

    const toggleDoubleDropdown = (index) => {
        const updatedDoubleDropdownStates = [...doubleDropdownStates];
    
        updatedDoubleDropdownStates.forEach((_, i) => {
            if (i !== index) {
                updatedDoubleDropdownStates[i] = false;
            }
        });
    
        updatedDoubleDropdownStates[index] = !updatedDoubleDropdownStates[index];
        setDoubleDropdownStates(updatedDoubleDropdownStates);
    };
    
    
    return (
        <header className="relative">
            <nav className="bg-white border-gray-200 dark:bg-gray-900 p-8">
                <div className="w-full flex flex-wrap items-center justify-between mx-auto">
                    <a href="/home" className="flex items-center flex-no-shrink ml-16" id="nav-logo">
                        <span className="text-white text-2xl font-paragraph font-semibold">Búsquedas</span>
                    </a>

                    <ul className="flex flex-col font-medium mr-16 md:flex-row md:space-x-8 bg-gray-900">
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between hover:bg-transparent w-auto text-white 
                            hover:text-blue-500 hover:scale-110 text-lg" onClick={() => toggleDropdown(0)} ref={dropdownButtonRefs[0]}> Internas
                                <svg className={`w-2.5 h-2.5 ml-2.5 transform ${dropdownStates[0] ? "rotate-0" : "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div id="dropdownNavbar" className={`z-10 font-normal mr-3 rounded-lg shadow w-44 bg-gray-700 divide-gray-600 transition-max-height ease-in-out 
                            duration-300 absolute top-16 right-0 ${dropdownStates[0] ? "max-h-96" : "max-h-0 hidden"}`}  
                            style={{ top: dropdownPositions[0].top, left: dropdownPositions[0].left }}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/interna/secuencial" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                        onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Secuencial </a>
                                    </li>

                                    <li>
                                        <a href="/interna/binaria" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                        onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Binaria </a>
                                    </li>

                                    <li>
                                        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" 
                                        className="flex items-center justify-between w-full px-4 py-2 text-white font-paragraph hover-bg-gray-600" 
                                        onClick={() => toggleDoubleDropdown(0)} > Hash
                                            <svg className={`w-2.5 h-2.5 ml-2.5 transform ${doubleDropdownStates[0] ? "rotate-0" : "rotate-180"}`} aria-hidden="true" 
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <div id="doubleDropdown" className={`z-10 font-normal divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700 
                                        ${doubleDropdownStates[0] ? "max-h-96" : "max-h-0 hidden"}`}>
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                <li>
                                                    <a href="/interna/hash/mod" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Módulo </a>
                                                </li>
                                                                    
                                                <li>
                                                    <a href="/interna/hash/cuadrado" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Cuadrado </a>
                                                </li>
                                                                    
                                                <li>
                                                    <a href="/interna/hash/truncamiento" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Truncamiento </a>
                                                </li>
                                                                    
                                                <li>
                                                    <a href="/interna/hash/plegamiento" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Plegamiento </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <button id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar2" className="flex items-center justify-between hover:bg-transparent w-auto 
                            text-white hover:text-blue-500 hover:scale-110 text-lg" onClick={() => toggleDropdown(1)} ref={dropdownButtonRefs[1]}> Externas
                                <svg className={`w-2.5 h-2.5 ml-2.5 transform ${dropdownStates[1] ? "rotate-0" : "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div id="dropdownNavbar2" className={`z-10 font-normal mr-3 rounded-lg shadow w-44 bg-gray-700 divide-gray-600 transition-max-height ease-in-out 
                            duration-300 absolute top-16 right-0 ${dropdownStates[1] ? "max-h-96" : "max-h-0 hidden"}`}  
                            style={{ top: dropdownPositions[1].top, left: dropdownPositions[1].left }}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/externa/secuencial" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                        onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Secuencial </a>
                                    </li>

                                    <li>
                                        <a href="/externa/binaria" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                        onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Binaria </a>
                                    </li>

                                    <li>
                                        <button id="doubleDropdownButton2" data-dropdown-toggle="doubleDropdown2" data-dropdown-placement="right-start" type="button" 
                                        className="flex items-center justify-between w-full px-4 py-2 text-white font-paragraph hover-bg-gray-600" 
                                        onClick={() => toggleDoubleDropdown(1)}> Expansión Total
                                            <svg className={`w-2.5 h-2.5 ml-2.5 transform ${doubleDropdownStates[1] ? "rotate-0" : "rotate-180"}`} aria-hidden="true" 
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <div id="doubleDropdown2" className={`z-10 font-normal divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700 
                                        ${doubleDropdownStates[1] ? "max-h-96" : "max-h-0 hidden"}`}>
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                <li>
                                                    <a href="/externa/expansionTotal/mod" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Módulo </a>
                                                </li>
                                                                    
                                                <li>
                                                    <a href="/externa/expansionTotal/cuadrado" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Cuadrado </a>
                                                </li>
                                                                    
                                                <li>
                                                    <a href="/externa/expansionTotal/truncamiento" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600"
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Truncamiento </a>
                                                </li>
                                                                    
                                                <li>
                                                    <a href="/externa/expansionTotal/plegamiento" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Plegamiento </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <button id="doubleDropdownButton3" data-dropdown-toggle="doubleDropdown3" data-dropdown-placement="right-start" type="button" 
                                        className="flex items-center justify-between w-full px-4 py-2 text-white font-paragraph hover-bg-gray-600"
                                        onClick={() => toggleDoubleDropdown(2)}> Expansión Parcial
                                            <svg className={`w-2.5 h-2.5 ml-2.5 transform ${doubleDropdownStates[2] ? "rotate-0" : "rotate-180"}`} aria-hidden="true" 
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <div id="doubleDropdown3" className={`z-10 font-normal divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700 
                                        ${doubleDropdownStates[2] ? "max-h-96" : "max-h-0 hidden"}`}>
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                <li>
                                                    <a href="/externa/expansionParcial/mod" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Módulo </a>
                                                </li>
                                                                    
                                                <li>
                                                    <a href="/externa/expansionParcial/cuadrado" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Cuadrado </a>
                                                </li>
                                                                    
                                                <li>
                                                    <a href="/externa/expansionParcial/truncamiento" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Truncamiento </a>
                                                </li>
                                                                    
                                                <li>
                                                    <a href="/externa/expansionParcial/plegamiento" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                                    onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Plegamiento </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <button id="dropdownNavbarLink3" data-dropdown-toggle="dropdownNavba3" className="flex items-center justify-between hover:bg-transparent w-auto 
                            text-white hover:text-blue-500 hover:scale-110 text-lg" onClick={() => toggleDropdown(2)} ref={dropdownButtonRefs[2]}> Indices
                                <svg className={`w-2.5 h-2.5 ml-2.5 transform ${dropdownStates[2] ? "rotate-0" : "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div id="dropdownNavbar3" className={`z-10 font-normal mr-3 rounded-lg shadow w-44 bg-gray-700 divide-gray-600 transition-max-height ease-in-out 
                            duration-300 absolute top-16 right-0 ${dropdownStates[2] ? "max-h-96" : "max-h-0 hidden"}`}  
                            style={{ top: dropdownPositions[2].top, left: dropdownPositions[2].left }}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/indices/1nivel" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                        onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> 1 Nivel </a>
                                    </li>

                                    <li>
                                        <a href="/indices/multinivel" className="font-paragraph text-white block px-4 py-2 hover:bg-gray-600" 
                                        onClick={() => {setDropdownStates([false, false, false]); setDoubleDropdownStates([false, false, false])}}> Multinivel </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;