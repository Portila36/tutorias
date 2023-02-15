const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tutorias",
});


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});


app.post("/alumno/agregar", (req, res) => {
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
  } = req.body;

  const sql = "insert into alumnos values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
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
      "default.jpg",
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.get("/alumnos", (req, res) => {
  const sql = "select * from alumnos";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/alumno/modificar", (req, res) => {
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
  } = req.body;

  const sql =
    "update alumnos set aPaterno=?, aMaterno=?, nombre=?, sexo=?, dCalle=?, dNumero=?, dColonia=?, dCodigoPostal=?, aTelefono=?, aCorreo=?, aFacebook=?, aInstagram=? where matricula=?";

  db.query(
    sql,
    [
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
      matricula,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});

app.post("/alumno/eliminar", (req, res) => {
  const { matricula } = req.body;

  const sql = "delete from alumnos where matricula=?";

  db.query(sql, [matricula], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/alumno/:matricula", (req, res) => {
  const matricula = req.params.matricula;

  const sqlGet = "select * from alumnos where matricula=?";
  db.query(sqlGet, [matricula], (err, result, fields) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
});


//Empieza el CRUD de asesorias

app.post("/asesoria/agregar", (req, res) => {
  const {
    codigo,
    alumno,
    tema,
    observaciones,
    fecha,
    hora_inicio,
    hora_fin,
  } = req.body;

  const sql = "insert into asesorias values (?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
    codigo,
    alumno,
    tema,
    observaciones,
    fecha,
    hora_inicio,
    hora_fin,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});


app.get("/asesorias", (req, res) => {
  const sql = "select * from asesorias";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});


app.post("/asesoria/modificar", (req, res) => {
  const {
    codigo,
    alumno,
    tema,
    observaciones,
    fecha,
    hora_inicio,
    hora_fin,
  } = req.body;

  const sql =
    "update asesorias set alumno=?, tema=?, observaciones=?, fecha=?, hora_inicio=?, hora_fin=? where codigo=?";

  db.query(
    sql,
    [
      alumno,
      tema,
      observaciones,
      fecha,
      hora_inicio,
      hora_fin,
      codigo,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});


app.post("/asesoria/eliminar", (req, res) => {
  const { codigo } = req.body;

  const sql = "delete from asesorias where codigo=?";

  db.query(sql, [codigo], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/asesoria/:codigo", (req, res) => {
  const codigo = req.params.codigo;

  const sqlGet = "select * from asesorias where codigo=?";
  db.query(sqlGet, [codigo], (err, result, fields) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});



// Empieza el CRUD de registros

app.post("/registro/agregar", (req, res) => {
  const {
    id,
    alumno,
    fecha,
    tipo,
    acciones,
    estado,
  } = req.body;

  const sql = "insert into registros values (?,?,?,?,?,?)";
  db.query(
    sql,
    [
      id,
      alumno,
      fecha,
      tipo,
      acciones,
      estado,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});


app.get("/registros", (req, res) => {
  const sql = "select * from registros";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/registro/modificar", (req, res) => {
  const {
    id,
    alumno,
    fecha,
    tipo,
    acciones,
    estado,
  } = req.body;

  const sql =
    "update registros set alumno=?, fecha=?, tipo=?, acciones=?, estado=? where id=?";

  db.query(
    sql,
    [
      alumno,
      fecha,
      tipo,
      acciones,
      estado,
      id,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});


app.post("/registro/eliminar", (req, res) => {
  const { id } = req.body;

  const sql = "delete from registros where id=?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});


app.get("/registro/:id", (req, res) => {
  const id = req.params.id;

  const sqlGet = "select * from registros where id=?";
  db.query(sqlGet, [id], (err, result, fields) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});