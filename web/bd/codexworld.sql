-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-06-2018 a las 07:47:42
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `codexworld`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ban`
--

CREATE TABLE `ban` (
  `id` int(10) NOT NULL,
  `facebook_id` varchar(100) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `motivo` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enlinea`
--

CREATE TABLE `enlinea` (
  `ip` varchar(20) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `fecha` varchar(20) NOT NULL,
  `token` varchar(50) NOT NULL,
  `lvl` varchar(50) NOT NULL,
  `guild` varchar(60) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `fb_id` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `enlinea`
--

INSERT INTO `enlinea` (`ip`, `usuario`, `fecha`, `token`, `lvl`, `guild`, `tipo`, `fb_id`) VALUES
('::1', 'Kemper Silva Chavez', '1527918301', 'Kemper Silva Chavez', '24', 'GM', 'usuario', '1616092268456567');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensagens`
--

CREATE TABLE `mensagens` (
  `id` int(11) NOT NULL,
  `id_de` int(11) NOT NULL,
  `id_para` int(11) NOT NULL,
  `mensagem` varchar(255) NOT NULL,
  `data` datetime NOT NULL,
  `lido` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mensagens`
--

INSERT INTO `mensagens` (`id`, `id_de`, `id_para`, `mensagem`, `data`, `lido`) VALUES
(711, 118, 119, 'dexdexedx', '2018-06-02 07:35:41', 0),
(710, 118, 118, 'dxdxdx', '2018-06-02 07:35:38', 1),
(709, 118, 118, 'dxdxdx', '2018-06-02 07:35:37', 1),
(708, 118, 118, 'xddd', '2018-06-02 07:01:41', 1),
(707, 119, 118, 'hola', '2018-06-01 08:58:00', 1),
(706, 118, 120, 'dsafasfasfsdf', '2018-06-01 06:45:46', 0),
(705, 118, 120, 'dasdÃ¡smdisanca sc aus c9uas cj9a s9a sc asc9 a9sc a9sc asc', '2018-06-01 06:45:36', 0),
(704, 118, 120, 'sa', '2018-06-01 06:45:32', 0),
(703, 118, 120, 'd', '2018-06-01 06:45:32', 0),
(702, 118, 120, 'as', '2018-06-01 06:45:32', 0),
(701, 118, 120, 'sd', '2018-06-01 06:45:32', 0),
(700, 118, 120, 'd', '2018-06-01 06:45:32', 0),
(699, 118, 120, 'as', '2018-06-01 06:45:32', 0),
(698, 118, 120, 'd', '2018-06-01 06:45:31', 0),
(697, 118, 120, 'da', '2018-06-01 06:45:31', 0),
(696, 118, 120, 'as', '2018-06-01 06:45:31', 0),
(695, 118, 120, 'd', '2018-06-01 06:45:31', 0),
(694, 118, 120, 'as', '2018-06-01 06:45:31', 0),
(693, 118, 120, 'asd', '2018-06-01 06:45:31', 0),
(692, 118, 120, 'd', '2018-06-01 06:45:31', 0),
(691, 118, 120, 'as', '2018-06-01 06:45:30', 0),
(690, 118, 120, 'd', '2018-06-01 06:45:30', 0),
(689, 118, 120, 'as', '2018-06-01 06:45:30', 0),
(688, 118, 120, 'sa', '2018-06-01 06:45:30', 0),
(687, 118, 120, 'a', '2018-06-01 06:45:30', 0),
(686, 118, 120, 'asd', '2018-06-01 06:45:29', 0),
(685, 118, 120, 'jsndijswndijnswidnasijdnaisjndijasndiasndijnasijdnasijdnasindisandijasndijasndijnasidnasindiasj', '2018-06-01 06:45:27', 0),
(684, 118, 119, 'edxexexd', '2018-06-01 02:14:45', 1),
(683, 118, 3, 'dx', '2018-06-01 02:14:38', 0),
(680, 118, 118, 'edx', '2018-06-01 01:11:44', 1),
(682, 118, 125, ':p', '2018-06-01 02:13:36', 0),
(681, 118, 123, 'x', '2018-06-01 01:26:00', 0),
(679, 118, 118, 'edx', '2018-06-01 01:11:44', 1),
(678, 118, 118, 'xdex', '2018-06-01 01:11:44', 1),
(677, 118, 118, 'xdxd', '2018-06-01 01:11:43', 1),
(676, 118, 118, 'xd', '2018-06-01 01:11:42', 1),
(675, 118, 118, 'hola', '2018-06-01 01:11:37', 1),
(674, 118, 118, 'xdxdx', '2018-06-01 00:41:42', 1),
(673, 118, 118, 'xd', '2018-06-01 00:41:41', 1),
(672, 118, 120, 'ok', '2018-05-31 03:17:04', 0),
(671, 118, 119, '******', '2018-05-31 02:24:02', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `facebook_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `rank` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `guild` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `vol` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '100'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `facebook_id`, `name`, `username`, `email`, `gender`, `rank`, `guild`, `vol`) VALUES
(3, '34343434', 'd', 'dd', '', '', '4', '55', ''),
(118, '1616092268456567', 'Kemper Silva Chavez', 'Kemper Silva Chavez', 'kempeerscha96@gmail.com', 'male', '24', 'GM', ''),
(119, '2095103100518781', 'Mishell Sch', 'Mishell Sch', 'tuangel_mishell@hotmail.com', 'male', '0', '', '0'),
(120, '', '1', '1', '', '', '4', '44', ''),
(121, '', '2', '2', '', '', '2', '33', ''),
(122, '', '4', '4', '', '', '12', '11', ''),
(123, '', '', '13', '', '', '13', '12', ''),
(124, '', '', '14', '', '24', '24', '24', ''),
(125, '', '', '25dxdxdxdxdxd', '', '', '25', '25', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ban`
--
ALTER TABLE `ban`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensagens`
--
ALTER TABLE `mensagens`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ban`
--
ALTER TABLE `ban`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `mensagens`
--
ALTER TABLE `mensagens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=712;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
