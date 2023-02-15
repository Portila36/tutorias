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

const registroAgregado = () => {
  toast.success('Registro agregado!', {
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
  id: "",
  alumno: "",
  fecha: "",
  tipo: "",
  acciones: "",
  estado: "",
};

function RegistroAgregar() {
  const [registro, setRegistro] = useState(initialState);
  const {
    id,
    alumno,
    fecha,
    tipo,
    acciones,
    estado,
  } = registro;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setRegistro({ ...registro, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRegistro(registro);
  };

  const addRegistro = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/registro/agregar",
      data
    );
    if (response.status == 200) {
      console.log(response.data);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Registro agregar</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <p className="fs-3">Datos</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="id">
                <Form.Control 
                  name="id"
                  id="id"
                  type="text"
                  placeholder="Ingresa ID"
                  value={id}
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
                  type="text"
                  placeholder="Ingresa la matricula del alumno"
                  value={alumno}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>

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
          </Row>


          <Row className="mt-3 mb-3">
            <Col>
            {['radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
          <Form.Check
            name="tipo"
            value="Atencion en el medio academico"
            type={type}
            onChange={handleInputChange}
            id={`default-${type}`}
            label={`Atencion en el medio academico`}
          />
          <Form.Check
            name="tipo"
            value="Socioeconomica"
            type={type}
            onChange={handleInputChange}
            id={`default-${type}`}
            label={`Socioeconomica`}
          />
          <Form.Check
            name="tipo"
            value="Personal"
            type={type}
            onChange={handleInputChange}
            id={`default-${type}`}
            label={`Personal`}
          />
          <Form.Check
            name="tipo"
            value="Apoyo en el area de conocimiento"
            type={type}
            onChange={handleInputChange}
            id={`default-${type}`}
            label={`Apoyo en el area de conocimiento`}
          />

          
        </div>
      ))}
              
            </Col>

          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="acciones">
                <Form.Control
                  name="acciones"
                  type="text"
                  placeholder="Ingresa las acciones"
                  value={acciones}
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Select
                name="estado"
                aria-label="Default select example"
                value={estado}
                onChange={handleInputChange}
                required
              >
                <option>Selecciona el estado</option>

                <option value="Proceso">Proceso</option>

                <option value="Concluida">Concluida</option>

              </Form.Select>
            </Col>

          </Row>



          

          <Row>
            <Col>
              <Button onClick={registroAgregado} type="submit" className="btn btn-primary">
                Guardar
              </Button>
            </Col>

            <Col>
              <Button className="btn btn-danger">Cancelar</Button>
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

export default RegistroAgregar;