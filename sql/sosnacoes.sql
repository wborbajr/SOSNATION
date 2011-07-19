-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: Jul 17, 2011 as 12:14 
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

CREATE TABLE IF NOT EXISTS `assistencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=10 ;

--
-- Extraindo dados da tabela `assistencia`
--

INSERT INTO `assistencia` (`id`, `nome`) VALUES
(1, 'MARCOS ANTONIO SANTOS'),
(2, 'ITAU'),
(3, 'CESAR ALBERTO PINTO JUNIOR'),
(4, 'Mapfre'),
(5, 'VW'),
(6, 'MITSUI');

-- --------------------------------------------------------

--
-- Estrutura da tabela `atendente`
--

CREATE TABLE IF NOT EXISTS `atendente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) COLLATE utf8_bin NOT NULL,
  `cpf` char(14) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=3 ;

--
-- Extraindo dados da tabela `atendente`
--

INSERT INTO `atendente` (`id`, `nome`, `cpf`) VALUES
(1, 'Daiane de Freitas Borges', '087.452.049-50');

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

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

CREATE TABLE IF NOT EXISTS `motorista` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) COLLATE utf8_bin NOT NULL,
  `cpf` varchar(14) COLLATE utf8_bin NOT NULL,
  `cnh` varchar(20) COLLATE utf8_bin NOT NULL,
  `categoria` varchar(5) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=16 ;

--
-- Extraindo dados da tabela `motorista`
--

INSERT INTO `motorista` (`id`, `nome`, `cpf`, `cnh`, `categoria`) VALUES
(1, 'MARCOS ANTONIO SANTOS', '', '', ''),
(2, 'DAIANA ESTELLA R SANTOS', '', '', ''),
(3, 'CESAR ALBERTO PINTO JUNIOR', '', '', ''),
(4, 'MITSUI', '', '', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `serviceorder`
--

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
  `notafiscal` varchar(20) COLLATE utf8_bin NOT NULL,
  `servico` varchar(20) COLLATE utf8_bin NOT NULL,
  `previsao` varchar(5) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `serviceorder`
--

INSERT INTO `serviceorder` (`id`, `cliente`, `fone`, `veiculo`, `cor`, `placa`, `local`, `destino`, `valor`, `kminicial`, `kmfinal`, `kmtotal`, `pedagio`, `chklist`, `nrpedido`, `hacionamento`, `hconclusao`, `hpassado`, `folha`, `atendente`, `motorista`, `frota`, `observacao`, `ip`, `data`, `hora`, `assistencia`, `aceito`, `notafiscal`, `servico`, `previsao`) VALUES
(1, 'OTAVIO ERNESTO MARCHESINI', '3088-8140', 'UNO MILLE', 'VERDE', 'ALS-2386', 'RUA DEP. CARLS RENE EGG, 205 - SANTA FELICIDADE', '', 28.00, 0, 0, 0, 0.00, '3652', '23241791', '10:28', 'undef', '', 7, 0, 2, 1, 0x424154455249412046524143412c20464549544f2046554e43494f4e4152, '127.0.0.1', '2011-07-15', '14:15:48', 1, '2011-07-12', '', '', ''),
(2, 'OTAVIO ERNESTO MARCHESINI', '3088-8140', 'UNO MILLE', 'VERDE', 'ALS-2386', 'RUA DEP. CARLOS RENE EGG, 205 - SANTA FELICIDADE', '', 28.00, 123, 321, 9898, 2.98, '3652', '123456', '10:28', '11:23', '12:45', 7, 1, 2, 1, 0x424154455249412046524143412c20464549544f2046554e43494f4e4152, '192.168.0.101', '2011-07-15', '14:20:10', 2, '2011-07-12', '4568', '6969', '00:30'),
(3, 'OTAVIO ERNESTO MARCHESINI', '3088-8140', 'UNO MILLE', 'VERDE', 'ALS-2386', 'RUA DEP. CARLOS RENE EGG, 205 - SANTA FELICIDADE', '', 28.00, 0, 0, 0, 0.00, '3652', '', '10:28', 'undef', '', 7, 0, 2, 1, 0x424154455249412046524143412c20464549544f2046554e43494f4e4152, '192.168.0.101', '2011-07-15', '14:20:21', 3, '2011-07-12', '', '', '');
