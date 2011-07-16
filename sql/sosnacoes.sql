-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: Jul 15, 2011 as 12:47 
-- Versão do Servidor: 5.5.8
-- Versão do PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `sosnacoes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `assistencia`
--

DROP TABLE IF EXISTS `assistencia`;
CREATE TABLE IF NOT EXISTS `assistencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=5 ;

--
-- Extraindo dados da tabela `assistencia`
--

INSERT INTO `assistencia` (`id`, `nome`) VALUES
(1, 'Liberty'),
(2, 'Mondial'),
(3, 'Sulamerica Seguros'),
(4, 'Mapfre');

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(20) COLLATE utf8_bin NOT NULL,
  `senha` varchar(80) COLLATE utf8_bin NOT NULL,
  `ativo` char(1) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=5 ;

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `login` (`id`, `usuario`, `senha`, `ativo`) VALUES
(1, 'admin', 'admin', '1'),
(2, 'daiana', 'daiana', '1'),
(3, 'marco', 'marco', '1'),
(4, 'junior', 'junior', '1');

-- --------------------------------------------------------

--
-- Estrutura da tabela `motorista`
--

DROP TABLE IF EXISTS `motorista`;
CREATE TABLE IF NOT EXISTS `motorista` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) COLLATE utf8_bin NOT NULL,
  `cpf` varchar(11) COLLATE utf8_bin NOT NULL,
  `cnh` varchar(20) COLLATE utf8_bin NOT NULL,
  `categoria` varchar(5) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `motorista`
--

INSERT INTO `motorista` (`id`, `nome`, `cpf`, `cnh`, `categoria`) VALUES
(1, 'Marco', '', '', ''),
(2, 'Daiana', '', '', ''),
(3, 'Beto', '', '', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `serviceorder`
--

DROP TABLE IF EXISTS `serviceorder`;
CREATE TABLE IF NOT EXISTS `serviceorder` (
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
  `aceito` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=9 ;

--
-- Extraindo dados da tabela `serviceorder`
--

