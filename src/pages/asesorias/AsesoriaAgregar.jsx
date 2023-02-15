import { useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Autosuggest from 'react-autosuggest';


const AsesoriaAgregada = () => {
  toast.success('Asesoria agregada!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
};


const initialState = {
  codigo: "",
  alumno: "",
  tema: "",
  observaciones: "",
  fecha: "",
  hora_inicio: "",
  hora_fin: "",
};



function AsesoriaAgregar() {
  const [asesoria, setAsesoria] = useState(initialState);
  const {
    codigo,
    alumno,
    tema,
    observaciones,
    fecha,
    hora_inicio,
    hora_fin,
  } = asesoria;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setAsesoria({ ...asesoria, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAsesoria(asesoria);
  };

  const addAsesoria = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/asesoria/agregar",
      data
    );
    if (response.status == 200) {
      console.log(response.data);
    }
  };

//////////////////////////////////////////////////////////////////////////////////
const[data, setData]= useState([]);
const[personajes, setPersonajes]= useState([]);
const[value, setValue]= useState("");
const[personajeSeleccionado, setPersonajeSeleccionado]= useState({});

const onSuggestionsFetchRequested=({value})=>{
  setPersonajes(filtrarPersonajes(value));
}

const filtrarPersonajes=(value)=>{
  const inputValue=value.trim().toLowerCase();
const inputLength=inputValue.length;

  var filtrado=data.filter((personaje)=>{
    var textoCompleto=personaje.nombre;

    if(textoCompleto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes(inputValue)){
      return personaje;
    }
  });

  return inputLength===0 ? [] : filtrado;
}

const onSuggestionsClearRequested = () =>{
  setPersonajes([]);
}

const getSuggestionValue=(suggestion)=>{
  return `${suggestion.nombre}`;
}

const renderSuggestion=(suggestion)=>(
  <div className='sugerencia' onClick={()=>seleccionarPersonaje(suggestion)}>
    {`${suggestion.nombre}`}
  </div>
);

const seleccionarPersonaje=(personaje)=>{
  setPersonajeSeleccionado(personaje);
}

const onChange=(e, {newValue})=>{
  setValue(newValue);
}

const inputProps={
placeholder:"Nombre del Personaje",
value,
onChange
};

const eventEnter=(e)=>{
if(e.key == "Enter"){
  var personajeActual = data.filter(p => p.nombre == e.target.value.trim());

  //console.log(personajeActual);
  var personaje ={
    matricula: personajeActual[0].matricula,
    aPaterno: personajeActual[0].aPaterno,
    aMaterno: personajeActual[0].aMaterno,
    nombre: personajeActual[0].nombre,
    sexo: personajeActual[0].sexo,
    dCalle: personajeActual[0].dCalle,
    dNumero: personajeActual[0].dNumero,
    dColonia: personajeActual[0].dColonia,
    dCodigoPostal: personajeActual[0].dCodigoPostal,
    aTelefono: personajeActual[0].aTelefono,
    aCorreo: personajeActual[0].aCorreo,
    aFacebook: personajeActual[0].aFacebook,
    aInstagram: personajeActual[0].aInstagram,
    foto: personajeActual[0].foto,
    

  };
  seleccionarPersonaje(personaje);
}
}

  const obtenerData=()=>{
    axios.get("http://localhost:5000/alumnos").then(response=>{
      //console.log(response.data);
      setPersonajes(response.data);
      setData(response.data);
    })
  }
  
  useEffect(()=>{
  obtenerData();
  }, []);


  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Asesoria agregar</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <p className="fs-3">Ingresar datos</p>
            </Col>
          </Row>

          <Autosuggest 
      suggestions={personajes}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={eventEnter}
     />

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="codigo">
                <Form.Control 
                  name="codigo"
                  id="codigo"
                  type="text"
                  placeholder="Ingresa codigo"
                  value={codigo}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>

                       
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="alumno">
                <Form.Control 
                  name="alumno"
                  id="alumno"
                  type="text"
                  placeholder="Ingresa la matricula del alumno"
                  value={alumno}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>

                       
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="tema">
                <Form.Control
                  name="tema"
                  type="text"
                  placeholder="Ingresa el tema de la sesion"
                  value={tema}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="observaciones">
                <Form.Control
                  name="observaciones"
                  type="text"
                  placeholder="Ingresa observaciones"
                  value={observaciones}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>


          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="fecha">
                <Form.Control
                  name="fecha"
                  type="date"
                  placeholder="Ingresa fecha"
                  value={fecha}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="hora_inicio">
                <Form.Control
                  name="hora_inicio"
                  type="text"
                  placeholder="Ingresa la hora de inicio"
                  value={hora_inicio}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="hora_fin">
                <Form.Control
                  name="hora_fin"
                  type="text"
                  placeholder="Ingresa la hora de fin"
                  value={hora_fin}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col></Col>
          </Row>

      

          <Row>
            <Col>
              <Button onClick={AsesoriaAgregada} type="submit" className="btn btn-primary">
                Guardar
              </Button>
            </Col>

            <Col>
              <Button  className="btn btn-danger">Cancelar</Button>
            </Col>
          </Row>

          {/* <Row className='mt-3 mb-3'>

                                               <Col></Col>

                                               <Col></Col>

                               </Row> */}
        </Form>
      </Container>
    </>
  );
}

export default AsesoriaAgregar;
