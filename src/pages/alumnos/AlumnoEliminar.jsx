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

const alumnoEliminado = () => {
  toast.warn('Alumno eliminado!', {
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
  matricula: "",
  aPaterno: "",
  aMaterno: "",
  nombre: "",
  sexo: "",
  dCalle: "",
  dNumero: "",
  dColonia: "",
  dCodigoPostal: "",
  aTelefono: "",
  aCorreo: "",
  aFacebook: "",
  aInstagram: "",
};

function AlumnoEliminar() {
  const [alumno, setAlumno] = useState(initialState);
  const {
    matricula,
    aPaterno,
    aMaterno,
    nombre,
    sexo,
    dCalle,
    dNumero,
    dColonia,
    dCodigoPostal,
    aTelefono,
    aCorreo,
    aFacebook,
    aInstagram,
  } = alumno;

  const { m } = useParams();

  useEffect(() => {
    if (m) {
      getAlumno(m);
    }
  }, []);

  const getAlumno = async (m) => {
    const response = await axios.get(`http://127.0.0.1:5000/alumno/${m}`);

    if (response.status == 200) {
      setAlumno(response.data.result[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteAlumno(alumno);
  };

  const deleteAlumno = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/alumno/eliminar",
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
            <h1>Alumno Eliminar</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <p className="fs-3">Datos generales</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Matricula">
                <Form.Control
                  name="matricula"
                  type="text"
                  placeholder="Ingresa la matricula"
                  defaultValue={matricula}
                  required
                  disabled
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Nombre">
                <Form.Control
                  name="nombre"
                  type="text"
                  placeholder="Ingresa nombre"
                  defaultValue={nombre}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Apellido Paterno">
                <Form.Control
                  name="aPaterno"
                  type="text"
                  placeholder="Ingresa Apellido paterno"
                  defaultValue={aPaterno}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Apellido Materno">
                <Form.Control
                  name="aMaterno"
                  type="text"
                  placeholder="Ingresa Apellido materno"
                  defaultValue={aMaterno}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Select
                name="sexo"
                aria-label="Default select example"
                defaultValue={sexo}
                required
              >
                <option>Selecciona tu sexo</option>

                <option value="1">Femenino</option>

                <option value="2">Masculino</option>
              </Form.Select>
            </Col>

            <Col>
              <FloatingLabel label="Teléfono">
                {" "}
                <Form.Control
                  name="aTelefono"
                  type="text"
                  placeholder="Ingresa Telefono (618)1232323"
                  defaultValue={aTelefono}
                  pattern="[(][0-9]{3}[)][0-9]{7}"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Correo Electrónico">
                <Form.Control
                  name="aCorreo"
                  type="email"
                  placeholder="Ingresa Correo electronico"
                  defaultValue={aCorreo}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Facebook">
                <Form.Control
                  name="aFacebook"
                  type="text"
                  placeholder="Ingresa perfil Facebook"
                  defaultValue={aFacebook}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Instagram">
                <Form.Control
                  name="aInstagram"
                  type="text"
                  placeholder="Ingresa perfil Instagram"
                  defaultValue={aInstagram}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col></Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="fs-3">Dirección</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Calle">
                <Form.Control
                  name="dCalle"
                  type="text"
                  placeholder="Ingresa la calle"
                  defaultValue={dCalle}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Número de Casa">
                <Form.Control
                  name="dNumero"
                  type="number"
                  placeholder="Ingresa el numero"
                  defaultValue={dNumero}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Colonia">
                <Form.Control
                  name="dColonia"
                  type="text"
                  placeholder="Ingresa la colonia"
                  defaultValue={dColonia}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Código Postal">
                <Form.Control
                  name="dCodigoPostal"
                  type="number"
                  placeholder="Ingresa el código postal"
                  defaultValue={dCodigoPostal}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button onClick={alumnoEliminado} type="submit" className="btn btn-danger">
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

export default AlumnoEliminar;
