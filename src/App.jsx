import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Intern from "./pages/Intern";
import Index from "./pages/Index";
import { DinamicasRender } from "./pages/dinamicasTotales";
import { DinamicasRenderParciales } from "./pages/dinamicasParciales";

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
          <Route path="expansionTotal">
            <Route path="mod" element={<DinamicasRender type="1" />} />
            <Route path="cuadrado" element={<DinamicasRender type="2" />} />
            <Route path="truncamiento" element={<DinamicasRender type="3" />} />
            <Route path="plegamiento" element={<DinamicasRender type="4" />} />
          </Route>
          
          <Route path="expansionParcial">
            <Route path="mod" element={<DinamicasRenderParciales type="1" />} />
            <Route path="cuadrado" element={<DinamicasRenderParciales type="2" />} />
            <Route path="truncamiento" element={<DinamicasRenderParciales type="3" />} />
            <Route path="plegamiento" element={<DinamicasRenderParciales type="4" />} />
          </Route>
        </Route>

        <Route path="/indices">
          <Route path="primario" element={<Index opcionIndice="1" />} />
          <Route path="secundario" element={<Index opcionIndice="2" />} />

          <Route path="multinivel">
            <Route path="primario" element={<Index opcionIndice="3" />} />
            <Route path="secundario" element={<Index opcionIndice="4" />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
