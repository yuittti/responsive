-- phpMyAdmin SQL Dump
-- version 4.0.10.6
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 09 2015 г., 13:42
-- Версия сервера: 5.5.41-log
-- Версия PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `site1`
--

-- --------------------------------------------------------

--
-- Структура таблицы `mod_feedback`
--

CREATE TABLE IF NOT EXISTS `mod_feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fio` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `descr` text,
  `dt` datetime DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `id_2` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Дамп данных таблицы `mod_feedback`
--

INSERT INTO `mod_feedback` (`id`, `fio`, `email`, `phone`, `descr`, `dt`, `ip`) VALUES
(1, 'Сергей Козаченко', 'kozachenkos@gmail.com', '+380(63)115-83-53', 'Hello test from IE8', '2015-10-09 10:29:43', '127.0.0.1'),
(2, 'Сергей Козаченко', 'kozachenkos@gmail.com', '+380(63)115-83-53', 'Hello test from Chrome', '2015-10-09 10:30:38', '127.0.0.1'),
(3, 'Козаченко Сергей Вячеславович', 'kozachenkos@gmail.com', '+380(63)115-83-53', 'Hello test from Opera', '2015-10-09 10:31:15', '127.0.0.1'),
(4, 'Козаченко Сергей Вячеславович', 'kozachenkos@gmail.com', '+380(63)115-83-53', 'Hello test from Mozilla', '2015-10-09 10:32:23', '127.0.0.1'),
(5, 'testing test', 'kozachenkos@gmail.com', '+380(11)111-11-11', 'test message', '2015-10-09 13:01:38', '127.0.0.1'),
(6, 'Test', 'test@test.tst', '+380(77)777-77-77', 'Testing test', '2015-10-09 13:17:49', '127.0.0.1'),
(7, 'Tst tst Tst', 'kozachenkos@gmail.com', '+380(44)444-44-44', 'Tst 123', '2015-10-09 13:19:19', '127.0.0.1'),
(8, 'TestIE', 'hello@hello.ua', '+380(99)999-99-99', '/слеш', '2015-10-09 13:24:15', '127.0.0.1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
