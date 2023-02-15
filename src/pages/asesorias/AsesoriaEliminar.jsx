import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AsesoriaEliminada = () => {
  toast.warn('Asesoria eliminada!', {
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

function AsesoriaEliminar() {
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

  const { m } = useParams();

  useEffect(() => {
    if (m) {
      getAsesoria(m);
    }
  }, []);

  const getAsesoria = async (m) => {
    const response = await axios.get(`http://127.0.0.1:5000/asesoria/${m}`);

    if (response.status == 200) {
      setAsesoria(response.data.result[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteAsesoria(asesoria);
  };

  const deleteAsesoria = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/asesoria/eliminar",
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
            <h1>Asesoria Eliminar</h1>
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
              <FloatingLabel label="codigo">
                <Form.Control
                  name="codigo"
                  type="text"
                  placeholder="codigo"
                  defaultValue={codigo}
                  required
                  disabled
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
                  defaultValue={alumno}
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
                  defaultValue={tema}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="observaciones">
                <Form.Control
                  name="observaciones"
                  type="text"
                  placeholder="Ingresa observaciones"
                  defaultValue={observaciones}
                />
              </FloatingLabel>
            </Col>
          </Row>


          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="fecha">
                <Form.Control
                  name="fecha"
                  type="text"
                  placeholder="Ingresa fecha"
                  defaultValue={fecha}
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
                  defaultValue={hora_inicio}
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
                  defaultValue={hora_fin}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col></Col>
          </Row>

          <Row>
            <Col>
              <Button onClick={AsesoriaEliminada} type="submit" className="btn btn-danger">
                Eliminar
              </Button>
            </Col>

            <Col>
              <Button className="btn btn-info">Cancelar</Button>
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

export default AsesoriaEliminar;