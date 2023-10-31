import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Intern from "./pages/Intern";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/interna">
          <Route path="secuencial" element={<Intern type="sequential" />} />
          <Route path="binaria" element={<Intern type="binary" />} />

          <Route path="hash">
            <Route path="mod" element={<Intern type="hashMod" />} />
            <Route path="cuadrado" element={<Intern type="hashCuadrado" />} />
            <Route path="truncamiento" element={<Intern type="hashTruncamiento" />} />
            <Route path="plegamiento" element={<Intern type="hashPlegamiento" />} />
          </Route>
        </Route>
        
        <Route path="/externa">
          <Route index element={<Intern />} />
          <Route path="secuencial" element={<Intern type="sequential" />} />
          <Route path="binaria" element={<Intern type="binary" />} />

          <Route path="expansionTotal">
            <Route path="mod" element={<Intern type="hashMod" />} />
            <Route path="cuadrado" element={<Intern type="hashCuadrado" />} />
            <Route path="truncamiento" element={<Intern type="hashTruncamiento" />} />
            <Route path="plegamiento" element={<Intern type="hashPlegamiento" />} />
          </Route>
          
          <Route path="expansionParcial">
            <Route path="mod" element={<Intern type="hashMod" />} />
            <Route path="cuadrado" element={<Intern type="hashCuadrado" />} />
            <Route path="truncamiento" element={<Intern type="hashTruncamiento" />} />
            <Route path="plegamiento" element={<Intern type="hashPlegamiento" />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
