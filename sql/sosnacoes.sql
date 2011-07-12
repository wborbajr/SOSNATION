-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 10, 2011 at 07:23 PM
-- Server version: 5.5.9
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sosnacoes`
--

-- --------------------------------------------------------

--
-- Table structure for table `assistencia`
--

DROP TABLE IF EXISTS `assistencia`;
CREATE TABLE `assistencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=9 ;

--
-- Dumping data for table `assistencia`
--

INSERT INTO `assistencia` VALUES(1, 'Liberty');
INSERT INTO `assistencia` VALUES(2, 'Mondial');
INSERT INTO `assistencia` VALUES(3, 'Sulamerica Seguros');
INSERT INTO `assistencia` VALUES(4, 'Mapfre');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(20) COLLATE utf8_bin NOT NULL,
  `senha` varchar(80) COLLATE utf8_bin NOT NULL,
  `ativo` char(1) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=5 ;

--
-- Dumping data for table `login`
--

INSERT INTO `login` VALUES(1, 'admin', 'admin', '1');
INSERT INTO `login` VALUES(2, 'daiana', 'daiana', '1');
INSERT INTO `login` VALUES(3, 'marco', 'marco', '1');
INSERT INTO `login` VALUES(4, 'junior', 'junior', '1');

-- --------------------------------------------------------

--
-- Table structure for table `motorista`
--

DROP TABLE IF EXISTS `motorista`;
CREATE TABLE `motorista` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) COLLATE utf8_bin NOT NULL,
  `cpf` varchar(11) COLLATE utf8_bin NOT NULL,
  `cnh` varchar(20) COLLATE utf8_bin NOT NULL,
  `categoria` varchar(5) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=4 ;

--
-- Dumping data for table `motorista`
--

INSERT INTO `motorista` VALUES(1, 'Marco', '', '', '');
INSERT INTO `motorista` VALUES(2, 'Daiana', '', '', '');
INSERT INTO `motorista` VALUES(3, 'Beto', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `serviceorder`
--

DROP TABLE IF EXISTS `serviceorder`;
CREATE TABLE `serviceorder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(40) COLLATE utf8_bin NOT NULL,
  `fone` varchar(20) COLLATE utf8_bin NOT NULL,
  `veiculo` varchar(20) COLLATE utf8_bin NOT NULL,
  `cor` varchar(20) COLLATE utf8_bin NOT NULL,
  `placa` varchar(8) COLLATE utf8_bin NOT NULL,
  `local` varchar(100) COLLATE utf8_bin NOT NULL,
  `destino` varchar(100) COLLATE utf8_bin NOT NULL,
  `valor` decimal(13,2) NOT NULL,
  `kminicial` int(11) NOT NULL,
  `kmfinal` int(11) NOT NULL,
  `kmtotal` int(11) NOT NULL,
  `pedagio` decimal(13,2) NOT NULL,
  `chklist` varchar(100) COLLATE utf8_bin NOT NULL,
  `nrpedido` varchar(20) COLLATE utf8_bin NOT NULL,
  `hacionamento` varchar(5) COLLATE utf8_bin NOT NULL,
  `hconclusao` varchar(5) COLLATE utf8_bin NOT NULL,
  `hpassado` varchar(5) COLLATE utf8_bin NOT NULL,
  `folha` int(11) NOT NULL,
  `atendente` int(11) NOT NULL,
  `motorista` int(11) NOT NULL,
  `frota` int(11) NOT NULL,
  `observacao` text COLLATE utf8_bin NOT NULL,
  `ip` varchar(100) COLLATE utf8_bin NOT NULL,
  `data` date NOT NULL,
  `hora` time NOT NULL,
  `assistencia` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=16 ;

--
-- Dumping data for table `serviceorder`
--

