-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2020 at 05:04 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gmar`
--

-- --------------------------------------------------------

--
-- Table structure for table `carnet`
--

CREATE TABLE `carnet` (
  `datum` varchar(50) NOT NULL,
  `urlcar` varchar(300) NOT NULL,
  `naslov` varchar(150) NOT NULL,
  `sadrzaj` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `carnet`
--

INSERT INTO `carnet` (`datum`, `urlcar`, `naslov`, `sadrzaj`) VALUES
('16.12.2020. 07:15', 'https://www.carnet.hr/javni-poziv-nastavnicima-opceobrazovnih-predmeta-srednjih-skola/', 'Javni poziv nastavnicima općeobrazovnih predmeta srednjih škola za sudjelovanje u istraživanju zadovoljstva korisnika primjenom e-Škole scenarija pouč', 'CARNET poziva nastavnike općeobrazovnih predmeta u srednjim školama da se prijave za sudjelovanje u istraživanju zadovoljstva korisnika primjenom e-Škole scenarija poučavanja i povezanih interaktivnih sadržaja za međupredmetne teme u nastavi. ... The post Javni poziv nastavnicima općeobrazovnih predmeta srednjih škola za sudjelovanje u istraživanju zadovoljstva korisnika primjenom e-Škole scenarija poučavanja appeared first on CARNET .'),
('13.12.2020. 14:01', 'https://www.carnet.hr/hitno-prekid-mrezne-povezanosti-medjimurska-zupanija/', 'HITNO Prekid mrezne povezanosti – Medjimurska zupanija', 'Postovani, Uslijed odrzavanja strujnih postrojenja i elektricne mreze od strane HEP-a, danas do 13h ce biti u prekidu opskrba elektricnom energijom na CARNET cvoristu Cakovec. Uslijed navedenih radova u prekida ... The post HITNO Prekid mrezne povezanosti – Medjimurska zupanija appeared first on CARNET .');

-- --------------------------------------------------------

--
-- Table structure for table `godina`
--

CREATE TABLE `godina` (
  `godina_id` int(11) NOT NULL,
  `naziv` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `godina`
--

INSERT INTO `godina` (`godina_id`, `naziv`) VALUES
(1, 'Prvi'),
(2, 'Drugi'),
(3, 'Treći'),
(4, 'Četvrti');

-- --------------------------------------------------------

--
-- Table structure for table `nastavnik`
--

CREATE TABLE `nastavnik` (
  `mat_br` int(11) NOT NULL,
  `ime` varchar(20) NOT NULL,
  `prezime` varchar(30) NOT NULL,
  `dob` date NOT NULL,
  `titula` varchar(15) NOT NULL,
  `tel` int(11) NOT NULL,
  `kabinet_broj` int(11) NOT NULL,
  `kabinet_kat` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) DEFAULT NULL,
  `panelrole` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nastavnik`
--

INSERT INTO `nastavnik` (`mat_br`, `ime`, `prezime`, `dob`, `titula`, `tel`, `kabinet_broj`, `kabinet_kat`, `email`, `password`, `panelrole`) VALUES
(1, 'Blaženka', 'Markota', '1970-12-12', 'mag. edu.', 99000000, 1, 3, 'b.markota@gmar.hr', '12345678', 'user'),
(2, 'Maja', 'Hasandić', '1970-12-12', 'mag. edu.', 99000000, 2, 1, 'm.hasandic@gmar.hr', '12345678', 'user'),
(3, 'Marija', 'Cvitković', '1970-12-12', 'mag. edu.', 99000000, 3, 1, 'm.cvitkovic@gmar.hr', '12345678', 'user'),
(4, 'Pavao', 'Grgljanić', '1970-12-12', 'mag. edu.', 99000000, 4, 1, 'p.grgljanic@gmar.hr', '12345678', 'user'),
(5, 'Jela', 'Knezović', '1970-12-12', 'mag. edu.', 99000000, 5, 3, 'j.knezovic@gmar.hr', '12345678', 'user'),
(6, 'Anđelka', 'Matošević', '1970-12-12', 'mag. edu.', 99000000, 6, 2, 'a.matosevic@gmar.hr', '12345678', 'user'),
(7, 'Drago', 'Pavlović', '1970-12-12', 'mag. edu.', 99000000, 7, 1, 'd.pavlovic@gmar.hr', '12345678', 'user'),
(8, 'Katarina', 'Petrović', '1970-12-12', 'mag. edu.', 99000000, 8, 2, 'k.petrovic@gmar.hr', '12345678', 'user'),
(9, 'Marko', 'Škarica', '1970-12-12', 'mag. edu.', 99000000, 9, 1, 'm.skarica@gmar.hr', '12345678', 'user'),
(10, 'Jozo', 'Škegro', '1970-12-12', 'mag. edu.', 99000000, 10, 2, 'j.skegro@gmar.hr', '12345678', 'user'),
(11, 'Anka', 'Tomić', '1970-12-12', 'mag. edu.', 99000000, 11, 2, 'a.tomic@gmar.hr', '12345678', 'user'),
(12, 'Ivana', 'Jerković', '1970-12-12', 'mag. edu.', 99000000, 12, 3, 'i.jerkovic@gmar.hr', '12345678', 'user'),
(13, 'Nedeljko', 'Begović', '1970-12-12', 'mag. edu.', 99000000, 13, 1, 'n.begovic@gmar.hr', '12345678', 'user'),
(14, 'Ines', 'Jurković', '1970-12-12', 'mag. edu.', 99000000, 14, 3, 'i.jurkovic@gmar.hr', '12345678', 'user'),
(15, 'Juraj', 'Zagorc', '1970-12-12', 'mag. edu.', 99000000, 15, 3, 'j.zagorc@gmar.hr', '12345678', 'user'),
(16, 'Irena', 'Kovač', '1970-12-12', 'mag. edu.', 99000000, 16, 1, 'i.kovac@gmar.hr', '12345678', 'user'),
(17, 'Marija', 'Miklošević', '1970-12-12', 'mag. edu.', 99000000, 17, 1, 'm.miklosevic@gmar.hr', '12345678', 'user'),
(18, 'Pavao', 'Petričević', '1970-12-12', 'mag. edu.', 99000000, 18, 3, 'p.petricevic@gmar.hr', '12345678', 'user'),
(19, 'Stjepan', 'Rupčić', '1970-12-12', 'mag. edu.', 99000000, 19, 2, 's.rupcic@gmar.hr', '12345678', 'user'),
(20, 'Valentina', 'Ruščić', '1970-12-12', 'mag. edu.', 99000000, 20, 1, 'v.ruscic@gmar.hr', '12345678', 'user'),
(21, 'Marija', 'Stuburić', '1970-12-12', 'mag. edu.', 99000000, 21, 2, 'm.stuburic@gmar.hr', '12345678', 'user'),
(22, 'Jelena', 'Špoljarić', '1970-12-12', 'mag. edu.', 99000000, 22, 1, 'j.spoljaric@gmar.hr', '12345678', 'user'),
(23, 'Vjekoslav', 'Vulić', '1970-12-12', 'mag. edu.', 99000000, 23, 2, 'v.vulic@gmar.hr', '12345678', 'user'),
(24, 'Zvonko', 'Korpar', '1970-12-12', 'mag. edu.', 99000000, 24, 3, 'z.korpar@gmar.hr', '12345678', 'user'),
(25, 'Branka', 'Lovrić', '1970-12-12', 'mag. edu.', 99000000, 25, 2, 'b.lovric@gmar.hr', '12345678', 'user'),
(26, 'Mirela', 'Blažević', '1970-12-12', 'mag. edu.', 99000000, 26, 2, 'm.blazevic@gmar.hr', '12345678', 'user'),
(27, 'Mihael', 'Boričić', '1970-12-12', 'mag. edu.', 99000000, 27, 2, 'm.boricic@gmar.hr', '12345678', 'user'),
(28, 'Anja', 'Čović-Bilbija', '1970-12-12', 'mag. edu.', 99000000, 28, 3, 'a.covicbilbija@gmar.hr', '12345678', 'user'),
(29, 'Mihaela', 'Gjokaj', '1970-12-12', 'mag. edu.', 99000000, 29, 2, 'm.gjokaj@gmar.hr', '12345678', 'user'),
(30, 'Sanja', 'Ižaković', '1970-12-12', 'mag. edu.', 99000000, 30, 1, 's.izakovic@gmar.hr', '12345678', 'user'),
(31, 'Stipe', 'Tomić', '1970-12-12', 'mag. edu.', 99000000, 31, 1, 's.tomic@gmar.hr', '12345678', 'user'),
(32, 'Barbara', 'Vuković', '1970-12-12', 'mag. edu.', 99000000, 32, 1, 'b.vukovic@gmar.hr', '12345678', 'user'),
(33, 'Marijana', 'Grbavac', '1970-12-12', 'mag. edu.', 99000000, 33, 3, 'm.grbavac@gmar.hr', '12345678', 'user'),
(34, 'Valentina', 'Iveljić', '1970-12-12', 'mag. edu.', 99000000, 34, 1, 'v.iveljic@gmar.hr', '12345678', 'user'),
(35, 'Danijela', 'Merli', '1970-12-12', 'mag. edu.', 99000000, 35, 3, 'd.merli@gmar.hr', '12345678', 'user'),
(36, 'Tea', 'Tunuković', '1970-12-12', 'mag. edu.', 99000000, 36, 2, 't.tunukovic@gmar.hr', '12345678', 'user'),
(37, 'Katica', 'Vidović', '1970-12-12', 'mag. edu.', 99000000, 37, 3, 'k.vidovic@gmar.hr', '12345678', 'user'),
(38, 'Ivanka', 'Babić', '1970-12-12', 'mag. edu.', 99000000, 38, 2, 'i.babic@gmar.hr', '12345678', 'user'),
(39, 'Danijela', 'Bajić', '1970-12-12', 'mag. edu.', 99000000, 39, 2, 'd.bajic@gmar.hr', '12345678', 'user'),
(40, 'Melita', 'Barić-Tominac', '1970-12-12', 'mag. edu.', 99000000, 40, 3, 'm.barictominac@gmar.hr', '12345678', 'user'),
(41, 'Ivan', 'Bassi', '1970-12-12', 'mag. edu.', 99000000, 41, 3, 'i.bassi@gmar.hr', '12345678', 'user'),
(42, 'Tatjana', 'Begonja-Hladik', '1970-12-12', 'mag. edu.', 99000000, 42, 3, 't.begonjahladik@gmar.hr', '12345678', 'user'),
(43, 'Ivana', 'Biljan', '1970-12-12', 'mag. edu.', 99000000, 43, 3, 'i.biljan@gmar.hr', '12345678', 'user'),
(44, 'Marica', 'Bubanjac', '1970-12-12', 'mag. edu.', 99000000, 44, 2, 'm.bubanjac@gmar.hr', '12345678', 'user'),
(45, 'Matej', 'Buhač', '1970-12-12', 'mag. edu.', 99000000, 45, 2, 'm.buhac@gmar.hr', '12345678', 'user'),
(46, 'Jasenka', 'Celić', '1970-12-12', 'mag. edu.', 99000000, 46, 2, 'j.celic@gmar.hr', '12345678', 'user'),
(47, 'Dinka', 'Čačić', '1970-12-12', 'mag. edu.', 99000000, 47, 2, 'd.cacic@gmar.hr', '12345678', 'user'),
(48, 'Anita', 'Jukić-Lokner', '1970-12-12', 'mag. edu.', 99000000, 48, 1, 'a.jukiclokner@gmar.hr', '12345678', 'user'),
(49, 'Mateja', 'Damjanović', '1970-12-12', 'mag. edu.', 99000000, 49, 1, 'm.damjanovic@gmar.hr', '12345678', 'user'),
(50, 'Barica', 'Dautović', '1970-12-12', 'mag. edu.', 99000000, 50, 3, 'b.dautovic@gmar.hr', '12345678', 'user'),
(51, 'Adam', 'Debelić', '1970-12-12', 'mag. edu.', 99000000, 51, 2, 'a.debelic@gmar.hr', '12345678', 'user'),
(52, 'Maja', 'Došen', '1970-12-12', 'mag. edu.', 99000000, 52, 2, 'm.dosen@gmar.hr', '12345678', 'user'),
(53, 'Marina', 'Suton', '1970-12-12', 'mag. edu.', 99000000, 53, 2, 'm.suton@gmar.hr', '12345678', 'user'),
(54, 'Zdravko', 'Galunić', '1970-12-12', 'mag. edu.', 99000000, 54, 3, 'z.galunic@gmar.hr', '12345678', 'user'),
(55, 'Mihaela', 'Gelemanović-Pracaić', '1970-12-12', 'mag. edu.', 99000000, 55, 2, 'm.gelemanovicpracaic@gmar.hr', '12345678', 'user'),
(56, 'Ines', 'Glavaš', '1970-12-12', 'mag. edu.', 99000000, 56, 2, 'i.glavas@gmar.hr', '12345678', 'user'),
(57, 'Slavko', 'Glibušić', '1970-12-12', 'mag. edu.', 99000000, 57, 2, 's.glibusic@gmar.hr', '12345678', 'user'),
(58, 'Goran', 'Grbeša', '1970-12-12', 'mag. edu.', 99000000, 58, 2, 'g.grbesa@gmar.hr', '12345678', 'user'),
(59, 'Slavko', 'Ivaniš', '1970-12-12', 'mag. edu.', 99000000, 59, 3, 's.ivanis@gmar.hr', '12345678', 'user'),
(60, 'Jasna', 'Jurić', '1970-12-12', 'mag. edu.', 99000000, 60, 3, 'j.juric@gmar.hr', '12345678', 'user'),
(61, 'Brigita', 'Jurić-Katunić', '1970-12-12', 'mag. edu.', 99000000, 61, 1, 'b.jurickatunic@gmar.hr', '12345678', 'user'),
(62, 'Dominik', 'Kalajdžić', '1970-12-12', 'mag. edu.', 99000000, 62, 2, 'd.kalajdzic@gmar.hr', '12345678', 'user'),
(63, 'Vedrana', 'Karakašić', '1970-12-12', 'mag. edu.', 99000000, 63, 2, 'v.karakasic@gmar.hr', '12345678', 'user'),
(64, 'Josip', 'Krpan', '1970-12-12', 'mag. edu.', 99000000, 64, 2, 'j.krpan@gmar.hr', '12345678', 'user'),
(65, 'Jasenka', 'Krznarić-Barić', '1970-12-12', 'mag. edu.', 99000000, 65, 1, 'j.krznaricbaric@gmar.hr', '12345678', 'user'),
(66, 'Đurđica', 'Krznarić', '1970-12-12', 'mag. edu.', 99000000, 66, 3, 'đ.krznaric@gmar.hr', '12345678', 'user'),
(67, 'Nevenka', 'Krznarić-Rupčić', '1970-12-12', 'mag. edu.', 99000000, 67, 2, 'n.krznaricrupcic@gmar.hr', '12345678', 'user'),
(68, 'Krunoslava', 'Kuna', '1970-12-12', 'mag. edu.', 99000000, 68, 3, 'k.kuna@gmar.hr', '12345678', 'user'),
(69, 'Branka', 'Lončar', '1970-12-12', 'mag. edu.', 99000000, 69, 1, 'b.loncar@gmar.hr', '12345678', 'user'),
(70, 'Mirela', 'Lončar', '1970-12-12', 'mag. edu.', 99000000, 70, 1, 'm.loncar@gmar.hr', '12345678', 'user'),
(71, 'Jasna', 'Lovrić', '1970-12-12', 'mag. edu.', 99000000, 71, 1, 'j.lovric@gmar.hr', '12345678', 'user'),
(72, 'Maja', 'Lovrić', '1970-12-12', 'mag. edu.', 99000000, 72, 3, 'm.lovric@gmar.hr', '12345678', 'user'),
(73, 'Snježana', 'Lukač', '1970-12-12', 'mag. edu.', 99000000, 73, 2, 's.lukac@gmar.hr', '12345678', 'user'),
(74, 'Ivana', 'lukanović', '1970-12-12', 'mag. edu.', 99000000, 74, 3, 'i.lukanovic@gmar.hr', '12345678', 'user'),
(75, 'Nikolina', 'Maletić', '1970-12-12', 'mag. edu.', 99000000, 75, 2, 'n.maletic@gmar.hr', '12345678', 'user'),
(76, 'Krunoslav', 'Marijanović', '1970-12-12', 'mag. edu.', 99000000, 76, 2, 'k.marijanovic@gmar.hr', '12345678', 'user'),
(77, 'Mara', 'Marjanović', '1970-12-12', 'mag. edu.', 99000000, 77, 3, 'm.marjanovic@gmar.hr', '12345678', 'user'),
(78, 'Blaženka', 'Markota', '1970-12-12', 'mag. edu.', 99000000, 78, 2, 'b.markota@gmar.hr', '12345678', 'user'),
(79, 'Domagoj', 'Matanović', '1970-12-12', 'mag. edu.', 99000000, 79, 2, 'd.matanovic@gmar.hr', '12345678', 'user'),
(80, 'Ljiljana', 'Matić', '1970-12-12', 'mag. edu.', 99000000, 80, 2, 'l.matic@gmar.hr', '12345678', 'user'),
(81, 'Lela', 'Matijević', '1970-12-12', 'mag. edu.', 99000000, 81, 2, 'l.matijevic@gmar.hr', '12345678', 'user'),
(82, 'Mihaela', 'Mežnarić', '1970-12-12', 'mag. edu.', 99000000, 82, 1, 'm.meznaric@gmar.hr', '12345678', 'user'),
(83, 'Sandra', 'Milovac', '1970-12-12', 'mag. edu.', 99000000, 83, 3, 's.milovac@gmar.hr', '12345678', 'user'),
(84, 'Ante', 'Miljanić', '1970-12-12', 'mag. edu.', 99000000, 84, 3, 'a.miljanic@gmar.hr', '12345678', 'user'),
(85, 'Ružica', 'Paulić', '1970-12-12', 'mag. edu.', 99000000, 85, 2, 'r.paulic@gmar.hr', '12345678', 'user'),
(86, 'Andreja', 'Pranjić', '1970-12-12', 'mag. edu.', 99000000, 86, 1, 'a.pranjic@gmar.hr', '12345678', 'user'),
(87, 'Martina', 'Pucelj', '1970-12-12', 'mag. edu.', 99000000, 87, 3, 'm.pucelj@gmar.hr', '12345678', 'user'),
(88, 'Mirna', 'Pucelj', '1970-12-12', 'mag. edu.', 99000000, 88, 3, 'm.pucelj@gmar.hr', '12345678', 'user'),
(89, 'Ana', 'Radilj', '1970-12-12', 'mag. edu.', 99000000, 89, 1, 'a.radilj@gmar.hr', '12345678', 'user'),
(90, 'Daniel', 'Rakijašić', '1970-12-12', 'mag. edu.', 99000000, 90, 2, 'd.rakijasic@gmar.hr', '12345678', 'admin'),
(91, 'Sanja', 'Tomičić', '1970-12-12', 'mag. edu.', 99000000, 91, 3, 's.tomicic@gmar.hr', '12345678', 'user'),
(92, 'Josipa', 'Schweizer-Matić', '1970-12-12', 'mag. edu.', 99000000, 92, 2, 'j.schweizermatic@gmar.hr', '12345678', 'user'),
(93, 'Višnja', 'Sorčik', '1970-12-12', 'mag. edu.', 99000000, 93, 1, 'v.sorcik@gmar.hr', '12345678', 'user'),
(94, 'Blaženka', 'Šimunović', '1970-12-12', 'mag. edu.', 99000000, 94, 2, 'b.simunovic@gmar.hr', '12345678', 'user'),
(95, 'Ivan', 'Švaganović', '1970-12-12', 'mag. edu.', 99000000, 95, 2, 'i.svaganovic@gmar.hr', '12345678', 'admin'),
(96, 'Katarina', 'Kiš', '1970-12-12', 'mag. edu.', 99000000, 96, 2, 'k.kis@gmar.hr', '12345678', 'user'),
(97, 'Marija', 'Tikvić', '1970-12-12', 'mag. edu.', 99000000, 97, 3, 'm.tikvic@gmar.hr', '12345678', 'user'),
(98, 'Dubravka', 'Toldi', '1970-12-12', 'mag. edu.', 99000000, 98, 2, 'd.toldi@gmar.hr', '12345678', 'user'),
(99, 'Irena', 'Tomić', '1970-12-12', 'mag. edu.', 99000000, 99, 2, 'i.tomic@gmar.hr', '12345678', 'user'),
(100, 'Josipa', 'Gorički', '1970-12-12', 'mag. edu.', 99000000, 100, 3, 'j.goricki@gmar.hr', '12345678', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `objave`
--

CREATE TABLE `objave` (
  `srcImg` varchar(400) NOT NULL,
  `naslov` varchar(100) NOT NULL,
  `sadrzaj` varchar(1000) NOT NULL,
  `datum` varchar(50) NOT NULL,
  `autor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `objave`
--

INSERT INTO `objave` (`srcImg`, `naslov`, `sadrzaj`, `datum`, `autor`) VALUES
('http://gimnazija-mareljkovica-vk.skole.hr/upload/gimnazija-mareljkovica-vk/images/newsimg/1433/Image/IMG_20191210_144418.jpg', 'Humanitarna radionica izrade sapuna u Gradskoj knjižnici i čitaonici Vinkovci', 'Škola je mjesto učenja i odgajanja, a odgajati mlade i usmjeravati ih da prihvaćaju različitosti, pruže podršku i pomoć potrebitima jest ulog u budućnost. Različitim aktivnostima u suradnji s različitim ustanovama obogaćuju se školski odgojni sadržaji te se na taj način ostvaruju za učenike bitne odgojne zadaće.\r\nUčenici izborne nastave kemije naše škole sudjelovali su 10. i 11. prosinca 2019. u provođenju humanitarne radionice izrade sapuna u Gradskoj knjižnici i čitaonici Vinkovci povodom obilježavanja Adventa.', '15.12.2020.', 'Danijel Rakijašić'),
('http://gimnazija-mareljkovica-vk.skole.hr/upload/gimnazija-mareljkovica-vk/images/newsimg/1434/Image/PLAKAT.jpeg', 'SVAKI RAZRED, JEDNO STABLO', 'Baviti se nečim što voliš pravi je užitak, no rijetko se to u pravom smislu može povezati sa\r\nškolom. Vinkovački gimnazijalci, učenici izborne nastave kemije to uspijevaju već dugi niz godina. Od ponuđenih predmeta za izbornu nastavu dio njih odabrao je kemiju, pri čemu su se mnogi usmjerili upravo na ekologiju. Na izbornoj nastavi kemije nastojimo iz svih nas\r\nizvući najbolje, sposobnost da učimo i upoznajemo svijet oko sebe, te tako dajemo svoj udio u mijenjanju svijeta, ali i nas samih. Spajamo ugodno s korisnim, dosadno sa zabavnim, teoriju s praksom.', '16.12.2020.', 'Ivan Švaganović'),
('http://gimnazija-mareljkovica-vk.skole.hr/upload/gimnazija-mareljkovica-vk/images/newsimg/1396/Image/received_140524600588011.jpeg', 'Košarkaši naše gimnazije srebrni na državnom natjecanju!', 'I ove godine naša muška košarkaška ekipa ostvarila je plasman na državno natjecanje koje je održano u Zadru od 8. do 10. ožujka. U grupnoj fazi dočekale su ih ekipe iz Križevaca i Čakovca s kojima dečki nisu imali neki većih problema te su time prošli u daljnju fazu natjecanja. U borbi za polufinale susreli su se s domaćinima samog natjecanja, ekipom iz Zadra. Iako su naši košarkaši od samog početka uvjerljivo vodili, utakmica je bila daleko od gotove. U napetoj završnici Vinkovčani su izvukli pobjedu nad domaćinima. U polufinalu ih je dočekala ekipa iz Krapine. Naši košarkaši su opet utakmicu otvorili popriličnim vodstvom koje je prevagnulo i u krajnjem rezultatu. U samom finalu, najboljoj i najnapetijoj utakmici naši gimnazijalci su opet sjajno otvorili utakmicu protiv dotadašnjih favorita, odnosno Športske gimnazije Zagreb i time zavrjedili naklonost mnogobrojnih miljenika košarke koji su prisustovali ovom susretu. No, s vremenom su se košarkaši iz Zagreba polako vraćali te čak i po', '10. 3. 2020.', 'Ivan Švaganović'),
('http://gimnazija-mareljkovica-vk.skole.hr/upload/gimnazija-mareljkovica-vk/images/newsimg/2004/Image/dani2.jpg', 'JUTRO POEZIJE SVEMU UNATOČ https://www.facebook.com/gimmarvk/', 'U okviru književne manifestacije Dani Josipa i Ivana Kozarca godinama se održava i Jutro poezije vinkovačkih srednjoškolaca. Kako situacija ove jeseni ne dopušta okupljanja, odlučili smo Jutro poezije u okviru 26. dana Josipa i Ivana Kozarca održati online. Naše učenice, članice literarne grupe Orion koju vodi prof. Nikolina Maletić, snimile su čitanje svojih tekstova. Svi su videoprilozi na našoj Facebook stranici kao i na stranici nakladničke kuće Privlačica pa vas pozivamo da poslušate, pročitate i date podršku našim autoricama. Sudjeluju:\r\n \r\nDora Huber, 1.g - lirska proza Grad\r\nAndrea Voloder, 4.d - lirska proza Pitanja\r\nLorena Mustapić-Jogun, 4.c proza Fjaba barba Duje\r\nNika Biljan, 1.b - pjesma Imam slobodu\r\nNina Grgetić, 4.a - pjesma Morski put\r\nTena Faletar, 1.f - pjesma Smisao\r\nKlara Šimić, 4.e - lirska proza Lotus\r\nTerezija Matković, 1.f - lirska proza Bezobzirno\r\nKali Živković, 4.b - pjesma Negdje daleko (koju je Kali uglazbila i izvodi na gitari)Dora Jelinić, 4.e - pjesma ', '5. 12. 2020', 'Nikolina Maletić'),
('http://gimnazija-mareljkovica-vk.skole.hr/upload/gimnazija-mareljkovica-vk/images/newsimg/2009/Image/plakat%20Ve%C4%8Der%20matematike%202020.png', 'Večer matematike', 'Dragi učenici, hvala vam na sudjelovanju u ovogodišnjoj Večeri matematike. Nadam se da ste se zabavili te da ste naučili nešto novo ili se barem podsjetili nečega. Posebno zahvaljujem učenicima koji su nam omogućili zabavu kroz raznorazne plakate i programe:\r\nE. Šandrk, L. Labazan, A. Panđa, D. Veselčić, L. Šimleša, B. Petričević i I. Lenđer, 3.c\r\nK. Groš, 2.e\r\nK. Šimić, A. Čović, I. Horvatić, I.N. Čačić, B. Tominac, 4.e\r\nK.Čačić, 1.e\r\nA. Ćićerić, 4.b\r\nV. Dragičević, D. Budim, P. Hodak, L. Čačija, L. Džinić, L. Kuveždić, 4.g\r\nI. Tadić, 1.d\r\nM. Širić, L. Lovrinović, 4.c\r\nTakođer, velika zahvala i profesorima S. Lukač i I. Lukanović koji su doprinijeli održavanju ovogodišnje Večeri matematike.\r\nMirela Lončar, prof.', '7. 12. 2020.', 'Ivan Švaganović');

-- --------------------------------------------------------

--
-- Table structure for table `predmet`
--

CREATE TABLE `predmet` (
  `predmet_id` int(11) NOT NULL,
  `naziv` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `predmet`
--

INSERT INTO `predmet` (`predmet_id`, `naziv`) VALUES
(1, 'Povijest'),
(2, 'Engleski jezik 1'),
(3, 'Engleski jezik 2'),
(4, 'Njemacki jezik 1'),
(5, 'Njemacki jezik 2'),
(6, 'Glazbena umjetnost'),
(7, 'Geografija'),
(8, 'Matematika'),
(9, 'Informatika'),
(10, 'Tjelesna i zdravstvena kultura'),
(11, 'Vjeronauk'),
(12, 'Likovna umjetnost'),
(13, 'Kemija'),
(14, 'Hrvatski jezik'),
(15, 'Biologija'),
(16, 'Fizika'),
(17, 'Sat razrednika'),
(18, 'Latinski jezik'),
(19, 'Politika i gospodarstvo'),
(20, 'Filozofija'),
(21, 'Logika'),
(22, 'Sociologija'),
(23, 'Psihologija'),
(24, 'Izborna nastava');

-- --------------------------------------------------------

--
-- Table structure for table `razred`
--

CREATE TABLE `razred` (
  `razred_id` int(11) NOT NULL,
  `naziv` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `razred`
--

INSERT INTO `razred` (`razred_id`, `naziv`) VALUES
(1, 'a'),
(2, 'b'),
(3, 'c'),
(4, 'd'),
(5, 'e'),
(6, 'f'),
(7, 'g');

-- --------------------------------------------------------

--
-- Table structure for table `smjer`
--

CREATE TABLE `smjer` (
  `smjer_id` int(11) NOT NULL,
  `naziv` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `smjer`
--

INSERT INTO `smjer` (`smjer_id`, `naziv`) VALUES
(1, 'Opći'),
(2, 'Matematički'),
(3, 'Jezični');

-- --------------------------------------------------------

--
-- Table structure for table `studijski_program`
--

CREATE TABLE `studijski_program` (
  `godina_godina_id` int(11) DEFAULT NULL,
  `razred_razred_id` int(11) DEFAULT NULL,
  `smjer_smjer_id` int(11) DEFAULT NULL,
  `predmet_predmet_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `studijski_program`
--

INSERT INTO `studijski_program` (`godina_godina_id`, `razred_razred_id`, `smjer_smjer_id`, `predmet_predmet_id`) VALUES
(1, 1, 1, 1),
(1, 1, 1, 2),
(1, 1, 1, 3),
(1, 1, 1, 4),
(1, 1, 1, 5),
(1, 1, 1, 6),
(1, 1, 1, 7),
(1, 1, 1, 8),
(1, 1, 1, 9),
(1, 1, 1, 10),
(1, 1, 1, 11),
(1, 1, 1, 12),
(1, 1, 1, 13),
(1, 1, 1, 14),
(1, 1, 1, 15),
(1, 1, 1, 16),
(1, 1, 1, 17),
(1, 1, 1, 18),
(1, 2, 1, 1),
(1, 2, 1, 2),
(1, 2, 1, 3),
(1, 2, 1, 4),
(1, 2, 1, 5),
(1, 2, 1, 6),
(1, 2, 1, 7),
(1, 2, 1, 8),
(1, 2, 1, 9),
(1, 2, 1, 10),
(1, 2, 1, 11),
(1, 2, 1, 12),
(1, 2, 1, 13),
(1, 2, 1, 14),
(1, 2, 1, 15),
(1, 2, 1, 16),
(1, 2, 1, 17),
(1, 2, 1, 18),
(1, 3, 1, 1),
(1, 3, 1, 2),
(1, 3, 1, 3),
(1, 3, 1, 4),
(1, 3, 1, 5),
(1, 3, 1, 6),
(1, 3, 1, 7),
(1, 3, 1, 8),
(1, 3, 1, 9),
(1, 3, 1, 10),
(1, 3, 1, 11),
(1, 3, 1, 12),
(1, 3, 1, 13),
(1, 3, 1, 14),
(1, 3, 1, 15),
(1, 3, 1, 16),
(1, 3, 1, 17),
(1, 3, 1, 18),
(1, 4, 1, 1),
(1, 4, 1, 2),
(1, 4, 1, 3),
(1, 4, 1, 4),
(1, 4, 1, 5),
(1, 4, 1, 6),
(1, 4, 1, 7),
(1, 4, 1, 8),
(1, 4, 1, 9),
(1, 4, 1, 10),
(1, 4, 1, 11),
(1, 4, 1, 12),
(1, 4, 1, 13),
(1, 4, 1, 14),
(1, 4, 1, 15),
(1, 4, 1, 16),
(1, 4, 1, 17),
(1, 4, 1, 18),
(1, 5, 2, 1),
(1, 5, 2, 2),
(1, 5, 2, 3),
(1, 5, 2, 4),
(1, 5, 2, 5),
(1, 5, 2, 6),
(1, 5, 2, 7),
(1, 5, 2, 8),
(1, 5, 2, 9),
(1, 5, 2, 10),
(1, 5, 2, 11),
(1, 5, 2, 12),
(1, 5, 2, 13),
(1, 5, 2, 14),
(1, 5, 2, 15),
(1, 5, 2, 16),
(1, 5, 2, 17),
(1, 5, 2, 18),
(1, 6, 2, 1),
(1, 6, 2, 2),
(1, 6, 2, 3),
(1, 6, 2, 4),
(1, 6, 2, 5),
(1, 6, 2, 6),
(1, 6, 2, 7),
(1, 6, 2, 8),
(1, 6, 2, 9),
(1, 6, 2, 10),
(1, 6, 2, 11),
(1, 6, 2, 12),
(1, 6, 2, 13),
(1, 6, 2, 14),
(1, 6, 2, 15),
(1, 6, 2, 16),
(1, 6, 2, 17),
(1, 6, 2, 18),
(1, 7, 3, 1),
(1, 7, 3, 2),
(1, 7, 3, 3),
(1, 7, 3, 4),
(1, 7, 3, 5),
(1, 7, 3, 6),
(1, 7, 3, 7),
(1, 7, 3, 8),
(1, 7, 3, 9),
(1, 7, 3, 10),
(1, 7, 3, 11),
(1, 7, 3, 12),
(1, 7, 3, 13),
(1, 7, 3, 14),
(1, 7, 3, 15),
(1, 7, 3, 16),
(1, 7, 3, 17),
(1, 7, 3, 18),
(2, 1, 1, 1),
(2, 1, 1, 2),
(2, 1, 1, 3),
(2, 1, 1, 4),
(2, 1, 1, 5),
(2, 1, 1, 6),
(2, 1, 1, 7),
(2, 1, 1, 8),
(2, 1, 1, 9),
(2, 1, 1, 10),
(2, 1, 1, 11),
(2, 1, 1, 12),
(2, 1, 1, 13),
(2, 1, 1, 14),
(2, 1, 1, 15),
(2, 1, 1, 16),
(2, 1, 1, 17),
(2, 1, 1, 18),
(2, 1, 1, 23),
(2, 1, 1, 24),
(2, 2, 1, 1),
(2, 2, 1, 2),
(2, 2, 1, 3),
(2, 2, 1, 4),
(2, 2, 1, 5),
(2, 2, 1, 6),
(2, 2, 1, 7),
(2, 2, 1, 8),
(2, 2, 1, 9),
(2, 2, 1, 10),
(2, 2, 1, 11),
(2, 2, 1, 12),
(2, 2, 1, 13),
(2, 2, 1, 14),
(2, 2, 1, 15),
(2, 2, 1, 16),
(2, 2, 1, 17),
(2, 2, 1, 18),
(2, 2, 1, 23),
(2, 2, 1, 24),
(2, 3, 1, 1),
(2, 3, 1, 2),
(2, 3, 1, 3),
(2, 3, 1, 4),
(2, 3, 1, 5),
(2, 3, 1, 6),
(2, 3, 1, 7),
(2, 3, 1, 8),
(2, 3, 1, 9),
(2, 3, 1, 10),
(2, 3, 1, 11),
(2, 3, 1, 12),
(2, 3, 1, 13),
(2, 3, 1, 14),
(2, 3, 1, 15),
(2, 3, 1, 16),
(2, 3, 1, 17),
(2, 3, 1, 18),
(2, 3, 1, 23),
(2, 32, 1, 24),
(2, 4, 1, 1),
(2, 4, 1, 2),
(2, 4, 1, 3),
(2, 4, 1, 4),
(2, 4, 1, 5),
(2, 4, 1, 6),
(2, 4, 1, 7),
(2, 4, 1, 8),
(2, 4, 1, 9),
(2, 4, 1, 10),
(2, 4, 1, 11),
(2, 4, 1, 12),
(2, 4, 1, 13),
(2, 4, 1, 14),
(2, 4, 1, 15),
(2, 4, 1, 16),
(2, 4, 1, 17),
(2, 4, 1, 18),
(2, 4, 1, 23),
(2, 4, 1, 24),
(2, 5, 2, 1),
(2, 5, 2, 2),
(2, 5, 2, 3),
(2, 5, 2, 4),
(2, 5, 2, 5),
(2, 5, 2, 6),
(2, 5, 2, 7),
(2, 5, 2, 8),
(2, 5, 2, 9),
(2, 5, 2, 10),
(2, 5, 2, 11),
(2, 5, 2, 12),
(2, 5, 2, 13),
(2, 5, 2, 14),
(2, 5, 2, 15),
(2, 5, 2, 16),
(2, 5, 2, 17),
(2, 5, 2, 18),
(2, 5, 2, 23),
(2, 5, 2, 24),
(2, 6, 2, 1),
(2, 6, 2, 2),
(2, 6, 2, 3),
(2, 6, 2, 4),
(2, 6, 2, 5),
(2, 6, 2, 6),
(2, 6, 2, 7),
(2, 6, 2, 8),
(2, 6, 2, 9),
(2, 6, 2, 10),
(2, 6, 2, 11),
(2, 6, 2, 12),
(2, 6, 2, 13),
(2, 6, 2, 14),
(2, 6, 2, 15),
(2, 6, 2, 16),
(2, 6, 2, 17),
(2, 6, 2, 18),
(2, 6, 2, 23),
(2, 6, 2, 24),
(2, 7, 3, 1),
(2, 7, 3, 2),
(2, 7, 3, 3),
(2, 7, 3, 4),
(2, 7, 3, 5),
(2, 7, 3, 6),
(2, 7, 3, 7),
(2, 7, 3, 8),
(2, 7, 3, 9),
(2, 7, 3, 10),
(2, 7, 3, 11),
(2, 7, 3, 12),
(2, 7, 3, 13),
(2, 7, 3, 14),
(2, 7, 3, 15),
(2, 7, 3, 16),
(2, 7, 3, 17),
(2, 7, 3, 18),
(2, 7, 3, 23),
(2, 7, 3, 24),
(3, 1, 1, 1),
(3, 1, 1, 2),
(3, 1, 1, 3),
(3, 1, 1, 4),
(3, 1, 1, 5),
(3, 1, 1, 6),
(3, 1, 1, 7),
(3, 1, 1, 8),
(3, 1, 1, 9),
(3, 1, 1, 10),
(3, 1, 1, 11),
(3, 1, 1, 12),
(3, 1, 1, 13),
(3, 1, 1, 14),
(3, 1, 1, 15),
(3, 1, 1, 16),
(3, 1, 1, 17),
(3, 1, 1, 18),
(3, 1, 1, 21),
(3, 1, 1, 22),
(3, 1, 1, 24),
(3, 1, 1, 1),
(3, 1, 1, 2),
(3, 1, 1, 3),
(3, 1, 1, 4),
(3, 1, 1, 5),
(3, 1, 1, 6),
(3, 1, 1, 7),
(3, 1, 1, 8),
(3, 1, 1, 9),
(3, 1, 1, 10),
(3, 1, 1, 11),
(3, 1, 1, 12),
(3, 1, 1, 13),
(3, 1, 1, 14),
(3, 1, 1, 15),
(3, 1, 1, 16),
(3, 1, 1, 17),
(3, 1, 1, 18),
(3, 1, 1, 24),
(3, 1, 1, 21),
(3, 1, 1, 22),
(3, 1, 1, 1),
(3, 1, 1, 2),
(3, 1, 1, 3),
(3, 1, 1, 4),
(3, 1, 1, 5),
(3, 1, 1, 6),
(3, 1, 1, 7),
(3, 1, 1, 8),
(3, 1, 1, 9),
(3, 1, 1, 10),
(3, 1, 1, 11),
(3, 1, 1, 12),
(3, 1, 1, 13),
(3, 1, 1, 14),
(3, 1, 1, 15),
(3, 1, 1, 16),
(3, 1, 1, 17),
(3, 1, 1, 18),
(3, 1, 1, 24),
(3, 1, 1, 21),
(3, 1, 1, 22),
(3, 1, 1, 1),
(3, 1, 1, 2),
(3, 1, 1, 3),
(3, 1, 1, 4),
(3, 1, 1, 5),
(3, 1, 1, 6),
(3, 1, 1, 7),
(3, 1, 1, 8),
(3, 1, 1, 9),
(3, 1, 1, 10),
(3, 1, 1, 11),
(3, 1, 1, 12),
(3, 1, 1, 13),
(3, 1, 1, 14),
(3, 1, 1, 15),
(3, 1, 1, 16),
(3, 1, 1, 17),
(3, 1, 1, 18),
(3, 1, 1, 24),
(3, 1, 1, 21),
(3, 1, 1, 22),
(3, 5, 2, 1),
(3, 5, 2, 2),
(3, 5, 2, 3),
(3, 5, 2, 4),
(3, 5, 2, 5),
(3, 5, 2, 6),
(3, 5, 2, 7),
(3, 5, 2, 8),
(3, 5, 2, 9),
(3, 5, 2, 10),
(3, 5, 2, 11),
(3, 5, 2, 12),
(3, 5, 2, 13),
(3, 5, 2, 14),
(3, 5, 2, 15),
(3, 5, 2, 16),
(3, 5, 2, 17),
(3, 5, 2, 18),
(3, 5, 2, 24),
(3, 5, 2, 21),
(3, 5, 2, 22),
(3, 6, 2, 1),
(3, 6, 2, 2),
(3, 6, 2, 3),
(3, 6, 2, 4),
(3, 6, 2, 5),
(3, 6, 2, 6),
(3, 6, 2, 7),
(3, 6, 2, 8),
(3, 6, 2, 9),
(3, 6, 2, 10),
(3, 6, 2, 11),
(3, 6, 2, 12),
(3, 6, 2, 13),
(3, 6, 2, 14),
(3, 6, 2, 15),
(3, 6, 2, 16),
(3, 6, 2, 17),
(3, 6, 2, 18),
(3, 6, 2, 24),
(3, 6, 2, 22),
(3, 6, 2, 21),
(3, 7, 3, 1),
(3, 7, 3, 2),
(3, 7, 3, 3),
(3, 7, 3, 4),
(3, 7, 3, 5),
(3, 7, 3, 6),
(3, 7, 3, 7),
(3, 7, 3, 8),
(3, 7, 3, 9),
(3, 7, 3, 10),
(3, 7, 3, 11),
(3, 7, 3, 12),
(3, 7, 3, 13),
(3, 7, 3, 14),
(3, 7, 3, 15),
(3, 7, 3, 16),
(3, 7, 3, 17),
(3, 7, 3, 18),
(3, 7, 3, 24),
(3, 7, 3, 22),
(3, 7, 3, 21),
(4, 1, 1, 1),
(4, 1, 1, 2),
(4, 1, 1, 3),
(4, 1, 1, 4),
(4, 1, 1, 5),
(4, 1, 1, 6),
(4, 1, 1, 7),
(4, 1, 1, 8),
(4, 1, 1, 9),
(4, 1, 1, 10),
(4, 1, 1, 11),
(4, 1, 1, 12),
(4, 1, 1, 13),
(4, 1, 1, 14),
(4, 1, 1, 15),
(4, 1, 1, 16),
(4, 1, 1, 17),
(4, 1, 1, 18),
(4, 1, 1, 24),
(4, 1, 1, 19),
(4, 1, 1, 20),
(4, 2, 1, 1),
(4, 2, 1, 2),
(4, 2, 1, 3),
(4, 2, 1, 4),
(4, 2, 1, 5),
(4, 2, 1, 6),
(4, 2, 1, 7),
(4, 2, 1, 8),
(4, 2, 1, 9),
(4, 2, 1, 10),
(4, 2, 1, 11),
(4, 2, 1, 12),
(4, 2, 1, 13),
(4, 2, 1, 14),
(4, 2, 1, 15),
(4, 2, 1, 16),
(4, 2, 1, 17),
(4, 2, 1, 18),
(4, 2, 1, 24),
(4, 2, 1, 19),
(4, 2, 1, 20),
(4, 3, 1, 1),
(4, 3, 1, 2),
(4, 3, 1, 3),
(4, 3, 1, 4),
(4, 3, 1, 5),
(4, 3, 1, 6),
(4, 3, 1, 7),
(4, 3, 1, 8),
(4, 3, 1, 9),
(4, 3, 1, 10),
(4, 3, 1, 11),
(4, 3, 1, 12),
(4, 3, 1, 13),
(4, 3, 1, 14),
(4, 3, 1, 15),
(4, 3, 1, 16),
(4, 3, 1, 17),
(4, 3, 1, 18),
(4, 3, 1, 24),
(4, 3, 1, 19),
(4, 3, 1, 20),
(4, 4, 1, 1),
(4, 4, 1, 2),
(4, 4, 1, 3),
(4, 4, 1, 4),
(4, 4, 1, 5),
(4, 4, 1, 6),
(4, 4, 1, 7),
(4, 4, 1, 8),
(4, 4, 1, 9),
(4, 4, 1, 10),
(4, 4, 1, 11),
(4, 4, 1, 12),
(4, 4, 1, 13),
(4, 4, 1, 14),
(4, 4, 1, 15),
(4, 4, 1, 16),
(4, 4, 1, 17),
(4, 4, 1, 18),
(4, 4, 1, 24),
(4, 4, 1, 19),
(4, 4, 1, 20),
(4, 5, 2, 1),
(4, 5, 2, 2),
(4, 5, 2, 3),
(4, 5, 2, 4),
(4, 5, 2, 5),
(4, 5, 2, 6),
(4, 5, 2, 7),
(4, 5, 2, 8),
(4, 5, 2, 9),
(4, 5, 2, 10),
(4, 5, 2, 11),
(4, 5, 2, 12),
(4, 5, 2, 13),
(4, 5, 2, 14),
(4, 5, 2, 15),
(4, 5, 2, 16),
(4, 5, 2, 17),
(4, 5, 2, 18),
(4, 5, 2, 24),
(4, 5, 2, 19),
(4, 5, 2, 20),
(4, 6, 2, 1),
(4, 6, 2, 2),
(4, 6, 2, 3),
(4, 6, 2, 4),
(4, 6, 2, 5),
(4, 6, 2, 6),
(4, 6, 2, 7),
(4, 6, 2, 8),
(4, 6, 2, 9),
(4, 6, 2, 10),
(4, 6, 2, 11),
(4, 6, 2, 12),
(4, 6, 2, 13),
(4, 6, 2, 14),
(4, 6, 2, 15),
(4, 6, 2, 16),
(4, 6, 2, 17),
(4, 6, 2, 18),
(4, 6, 2, 24),
(4, 6, 2, 19),
(4, 6, 2, 20),
(4, 7, 3, 1),
(4, 7, 3, 2),
(4, 7, 3, 3),
(4, 7, 3, 4),
(4, 7, 3, 5),
(4, 7, 3, 6),
(4, 7, 3, 7),
(4, 7, 3, 8),
(4, 7, 3, 9),
(4, 7, 3, 10),
(4, 7, 3, 11),
(4, 7, 3, 12),
(4, 7, 3, 13),
(4, 7, 3, 14),
(4, 7, 3, 15),
(4, 7, 3, 16),
(4, 7, 3, 17),
(4, 7, 3, 18),
(4, 7, 3, 24),
(4, 7, 3, 19),
(4, 7, 3, 20);

-- --------------------------------------------------------

--
-- Table structure for table `ucenik`
--

CREATE TABLE `ucenik` (
  `mat_br_uck` int(11) NOT NULL,
  `ime` varchar(20) NOT NULL,
  `prezime` varchar(30) NOT NULL,
  `dob` date NOT NULL,
  `tel` int(11) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ucenik`
--

INSERT INTO `ucenik` (`mat_br_uck`, `ime`, `prezime`, `dob`, `tel`, `email`) VALUES
(1, 'Luka', 'Horvat', '1978-10-26', 99000000, 'l.horvat@gmar.hr'),
(2, 'David', 'Kovačević', '1980-12-01', 99000000, 'd.kovacevic@gmar.hr'),
(3, 'Jakov', 'Babić', '1982-10-21', 99000000, 'j.babic@gmar.hr'),
(4, 'Ivan', 'Marić', '1983-10-10', 99000000, 'i.maric@gmar.hr'),
(5, 'Petar', 'Jurić', '1984-12-06', 99000000, 'p.juric@gmar.hr'),
(6, 'Matej', 'Novak', '1985-06-02', 99000000, 'm.novak@gmar.hr'),
(7, 'Karlo', 'Kovačić', '1986-06-04', 99000000, 'k.kovacic@gmar.hr'),
(8, 'Mateo', 'Vuković', '1986-07-09', 99000000, 'm.vukovic@gmar.hr'),
(9, 'Roko', 'Knežević', '1987-07-24', 99000000, 'r.knezevic@gmar.hr'),
(10, 'Noel', 'Marković', '1990-08-24', 99000000, 'n.markovic@gmar.hr'),
(11, 'Ramon', 'Petrović', '1990-11-22', 99000000, 'r.petrovic@gmar.hr'),
(12, 'Kirill', 'Matić', '1991-12-19', 99000000, 'k.matic@gmar.hr'),
(13, 'Noemi', 'Tomić', '1992-10-18', 99000000, 'n.tomic@gmar.hr'),
(14, 'Lara', 'Kovač', '1992-09-17', 99000000, 'l.kovac@gmar.hr'),
(15, 'Tena', 'Pavlović', '1993-10-16', 99000000, 't.pavlovic@gmar.hr'),
(16, 'Petra', 'Božić', '1993-01-15', 99000000, 'p.bozic@gmar.hr'),
(17, 'Sofia', 'Blažević', '1993-02-14', 99000000, 's.blazevic@gmar.hr'),
(18, 'Natasja', 'Grgić', '1994-03-13', 99000000, 'n.grgic@gmar.hr'),
(19, 'Alina', 'Pavić', '1994-04-13', 99000000, 'a.pavic@gmar.hr'),
(20, 'Daria', 'Radić', '1994-05-12', 99000000, 'd.radic@gmar.hr'),
(21, 'Dario', 'Zavišić', '2000-06-24', 5824892, 'd.zavisic@gmar.hr');

-- --------------------------------------------------------

--
-- Table structure for table `ucenik_razred`
--

CREATE TABLE `ucenik_razred` (
  `godina_godina_id` int(11) DEFAULT NULL,
  `razred_razred_id` int(11) DEFAULT NULL,
  `ucenik_mat_br_uck` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ucenik_razred`
--

INSERT INTO `ucenik_razred` (`godina_godina_id`, `razred_razred_id`, `ucenik_mat_br_uck`) VALUES
(1, 1, 1),
(1, 2, 2),
(1, 3, 3),
(1, 5, 4),
(1, 7, 5),
(2, 1, 6),
(2, 2, 7),
(2, 3, 8),
(2, 5, 9),
(2, 7, 10),
(3, 1, 11),
(3, 2, 12),
(3, 3, 13),
(3, 5, 14),
(3, 7, 15),
(4, 1, 16),
(4, 2, 17),
(4, 3, 18),
(4, 5, 19),
(4, 7, 20);

-- --------------------------------------------------------

--
-- Table structure for table `uloga`
--

CREATE TABLE `uloga` (
  `naziv` varchar(20) DEFAULT NULL,
  `predmet_predmet_id` int(11) DEFAULT NULL,
  `nastavnik_mat_br` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `uloga`
--

INSERT INTO `uloga` (`naziv`, `predmet_predmet_id`, `nastavnik_mat_br`) VALUES
('nastavnik', 1, 16),
('nastavnik', 2, 16),
('nastavnik', 3, 8),
('nastavnik', 4, 41),
('nastavnik', 5, 11),
('nastavnik', 6, 96),
('nastavnik', 7, 34),
('nastavnik', 8, 6),
('nastavnik', 9, 26),
('nastavnik', 10, 79),
('nastavnik', 11, 94),
('nastavnik', 12, 22),
('nastavnik', 13, 85),
('nastavnik', 14, 38),
('nastavnik', 15, 72),
('nastavnik', 16, 9),
('nastavnik', 17, 5),
('nastavnik', 18, 77),
('nastavnik', 19, 36),
('nastavnik', 20, 79),
('nastavnik', 21, 75),
('nastavnik', 22, 48),
('nastavnik', 23, 36),
('nastavnik', 24, 35);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `godina`
--
ALTER TABLE `godina`
  ADD PRIMARY KEY (`godina_id`);

--
-- Indexes for table `nastavnik`
--
ALTER TABLE `nastavnik`
  ADD PRIMARY KEY (`mat_br`);

--
-- Indexes for table `predmet`
--
ALTER TABLE `predmet`
  ADD PRIMARY KEY (`predmet_id`);

--
-- Indexes for table `razred`
--
ALTER TABLE `razred`
  ADD PRIMARY KEY (`razred_id`);

--
-- Indexes for table `smjer`
--
ALTER TABLE `smjer`
  ADD PRIMARY KEY (`smjer_id`);

--
-- Indexes for table `studijski_program`
--
ALTER TABLE `studijski_program`
  ADD KEY `studijski_program_godina_fk` (`godina_godina_id`),
  ADD KEY `studijski_program_predmet_fk` (`predmet_predmet_id`),
  ADD KEY `studijski_program_razred_fk` (`razred_razred_id`),
  ADD KEY `studijski_program_smjer_fk` (`smjer_smjer_id`);

--
-- Indexes for table `ucenik`
--
ALTER TABLE `ucenik`
  ADD PRIMARY KEY (`mat_br_uck`);

--
-- Indexes for table `ucenik_razred`
--
ALTER TABLE `ucenik_razred`
  ADD KEY `ucenik_razred_ucenik_fk` (`ucenik_mat_br_uck`),
  ADD KEY `ucenik_razred_razred_fk` (`razred_razred_id`),
  ADD KEY `ucenik_razred_godina_fk` (`godina_godina_id`);

--
-- Indexes for table `uloga`
--
ALTER TABLE `uloga`
  ADD KEY `uloga_nastavnik_fk` (`nastavnik_mat_br`),
  ADD KEY `uloga_predmet_fk` (`predmet_predmet_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `studijski_program`
--
ALTER TABLE `studijski_program`
  ADD CONSTRAINT `studijski_program_godina_fk` FOREIGN KEY (`godina_godina_id`) REFERENCES `godina` (`godina_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studijski_program_predmet_fk` FOREIGN KEY (`predmet_predmet_id`) REFERENCES `predmet` (`predmet_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studijski_program_razred_fk` FOREIGN KEY (`razred_razred_id`) REFERENCES `razred` (`razred_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studijski_program_smjer_fk` FOREIGN KEY (`smjer_smjer_id`) REFERENCES `smjer` (`smjer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ucenik_razred`
--
ALTER TABLE `ucenik_razred`
  ADD CONSTRAINT `ucenik_razred_godina_fk` FOREIGN KEY (`godina_godina_id`) REFERENCES `godina` (`godina_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ucenik_razred_razred_fk` FOREIGN KEY (`razred_razred_id`) REFERENCES `razred` (`razred_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ucenik_razred_ucenik_fk` FOREIGN KEY (`ucenik_mat_br_uck`) REFERENCES `ucenik` (`mat_br_uck`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `uloga`
--
ALTER TABLE `uloga`
  ADD CONSTRAINT `uloga_nastavnik_fk` FOREIGN KEY (`nastavnik_mat_br`) REFERENCES `nastavnik` (`mat_br`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `uloga_predmet_fk` FOREIGN KEY (`predmet_predmet_id`) REFERENCES `predmet` (`predmet_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
