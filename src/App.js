import { Route, Routes } from "react-router-dom";
import "./App.css";
import AlumnoAgregar from "./pages/alumnos/AlumnoAgregar";
import Alumnos from "./pages/alumnos/Alumnos";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BarraSuperior from "./components/BarraSuperior";
import AlumnoEliminar from "./pages/alumnos/AlumnoEliminar";
import AlumnoModificar from "./pages/alumnos/AlumnoModificar";
import Asesorias from "./pages/asesorias/Asesorias";
import AsesoriaAgregar from "./pages/asesorias/AsesoriaAgregar";
import AsesoriaEliminar from "./pages/asesorias/AsesoriaEliminar";
import AsesoriaModificar from "./pages/asesorias/AsesoriaModificar";
import Registros from "./pages/registros/Registros";
import RegistroAgregar from "./pages/registros/RegistroAgregar";
import RegistroEliminar from "./pages/registros/RegistroEliminar";
import RegistroModificar from "./pages/registros/RegistroModificar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BarraSuperior />}>
          <Route index element={<Home />} />
          <Route path="alumnos">
            <Route index element={<Alumnos />} />
            <Route path="agregar" element={<AlumnoAgregar />} />
            <Route path="eliminar/:m" element={<AlumnoEliminar />} />
            <Route path="modificar/:m" element={<AlumnoModificar />} />
          </Route>
          <Route path="asesorias">
            <Route index element={<Asesorias />} />
            <Route path="agregar" element={<AsesoriaAgregar />} />
            <Route path="eliminar/:m" element={<AsesoriaEliminar />} />
            <Route path="modificar/:m" element={<AsesoriaModificar />} />
          </Route>
          <Route path="registros">
            <Route index element={<Registros />} />
            <Route path="agregar" element={<RegistroAgregar />} />
            <Route path="eliminar/:m" element={<RegistroEliminar />} />
            <Route path="modificar/:m" element={<RegistroModificar />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <ToastContainer />
      </div>

    </div>
  );
}

export default App;
