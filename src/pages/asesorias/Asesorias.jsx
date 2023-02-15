import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Grid, h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useEffect, useRef } from "react";

function Asesorias() {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const grid = new Grid({
    columns: [
      "Codigo",
      "Alumno",
      "Tema",
      "Observaciones",
      "Fecha",
      "Hora de inicio",
      "Hora de fin",
      {
        name: "Modificar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-primary",
              onClick: () =>
                navigate(`/asesorias/modificar/${row.cells[0].data}`),
            },
            "Modificar"
          );
        },
      },
      {
        name: "Eliminar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-danger",
              onClick: () => navigate(`/asesorias/eliminar/${row.cells[0].data}`),
            },
            "Eliminar"
          );
        },
      },
    ],
    width: "auto",
    search: true,
    pagination: {
      enabled: true,
      limit: 5,
      summary: true,
    },
    sort: true,
    style: {
      th: {
        background: "#3047BD",
        color: "#fbf8f8",
        border: "3px solid #ccc",
        "text-allign": "center",
      },
    },
    autoWidth: true,
    language: {
      search: {
        placeholder: "🔍 Buscar...",
      },
      pagination: {
        previous: "⬅️",
        next: "➡️",
        showing: "😃 Mostrando",
        results: () => "registros",
      },
    },
    server: {
      url: "http://127.0.0.1:5000/asesorias",
      then: (data) =>
        data.result.map((asesoria) => [
          asesoria.codigo,
          asesoria.alumno,
          asesoria.tema,
          asesoria.observaciones,
          asesoria.fecha,
          asesoria.hora_inicio,
          asesoria.hora_fin,
        ]),
    },
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  return (
    <>
      <h1>Asesorias</h1>
      <div ref={wrapperRef} />
    </>
  );
}

export default Asesorias;
