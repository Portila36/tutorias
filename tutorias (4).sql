-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-02-2023 a las 15:53:34
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tutorias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `matricula` varchar(10) NOT NULL,
  `aPaterno` varchar(255) NOT NULL,
  `aMaterno` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `sexo` tinyint(4) NOT NULL,
  `dCalle` varchar(255) NOT NULL,
  `dNumero` int(11) NOT NULL,
  `dColonia` varchar(255) NOT NULL,
  `dCodigoPostal` int(11) NOT NULL,
  `aTelefono` varchar(12) NOT NULL,
  `aCorreo` varchar(255) NOT NULL,
  `aFacebook` varchar(255) NOT NULL,
  `aInstagram` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`matricula`, `aPaterno`, `aMaterno`, `nombre`, `sexo`, `dCalle`, `dNumero`, `dColonia`, `dCodigoPostal`, `aTelefono`, `aCorreo`, `aFacebook`, `aInstagram`, `foto`) VALUES
('3041210015', 'Portilla', 'Cardenas', 'Jared', 2, 'Fairgrounds RD', 655, 'Circuito Interior', 34166, '(618)3046186', 'jaredpor36@gmail.com', 'Jared36 PC', 'Jared PC', 'default.jpg'),
('3465444645', 'Portilla', 'Carrillo', 'Emeli', 2, 'Fairgrounds RD', 521, 'Circuito Interior', 34166, '(618)3046186', 'jaredpor36@gmail.com', 'Jared PC', 'Jared PC', 'default.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos2`
--

CREATE TABLE `alumnos2` (
  `matricula` varchar(10) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos2`
--

INSERT INTO `alumnos2` (`matricula`, `nombre`, `tipo`, `password`) VALUES
('3041210015', 'Jared', 'admin', '$2b$10$wxV3upiC8iEE.ceLsj0pveEQ1ps.5e3I39.qwi9fY1usUv.ClwDEG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asesorias`
--

CREATE TABLE `asesorias` (
  `codigo` varchar(11) NOT NULL,
  `alumno` varchar(10) NOT NULL,
  `tema` varchar(30) NOT NULL,
  `observaciones` varchar(100) NOT NULL,
  `fecha` varchar(100) NOT NULL,
  `hora_inicio` varchar(10) NOT NULL,
  `hora_fin` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asesorias`
--

INSERT INTO `asesorias` (`codigo`, `alumno`, `tema`, `observaciones`, `fecha`, `hora_inicio`, `hora_fin`) VALUES
('8888', 'portilla', 'matematicas', 'No se', '2022-11-18', '12am', '5pm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `idMatricula` int(11) NOT NULL,
  `materia` varchar(50) NOT NULL,
  `matriculaAlumno` varchar(25) NOT NULL,
  `calificacion` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` varchar(11) NOT NULL,
  `alumno` varchar(10) NOT NULL,
  `fecha` varchar(100) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `acciones` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `alumno`, `fecha`, `tipo`, `acciones`, `estado`) VALUES
('5', '3041210015', '2022-11-19', 'Atencion en el medio academico', 'No se hizo nada', 'Proceso'),
('666', 'portilla', '2022-11-18', 'Personal', 'No se hizo nada', 'Proceso'),
('hjh', 'portilla', '2022-11-18', 'Personal', 'No se hizo nada', 'Concluida');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`matricula`);

--
-- Indices de la tabla `alumnos2`
--
ALTER TABLE `alumnos2`
  ADD PRIMARY KEY (`matricula`);

--
-- Indices de la tabla `asesorias`
--
ALTER TABLE `asesorias`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `alumno` (`alumno`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`idMatricula`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumno` (`alumno`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `idMatricula` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
