-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: cheese
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CalciumPurchase`
--
DROP DATABASE IF EXISTS `cheese`;
CREATE DATABASE `cheese`;
USE cheese;

DROP TABLE IF EXISTS `CalciumPurchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CalciumPurchase` (
  `CalciumOrderID` char(9) NOT NULL,
  `SupplierName` varchar(30) NOT NULL,
  `CaClName` varchar(20) NOT NULL,
  `CaClBatchCode` char(9) NOT NULL,
  `CaClBestBefore` date DEFAULT NULL,
  `CaClOpenDate` date DEFAULT NULL,
  `Quantity` float NOT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint DEFAULT '0',
  `isUsed` tinyint DEFAULT '0',
  PRIMARY KEY (`CalciumOrderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CalciumPurchase`
--

LOCK TABLES `CalciumPurchase` WRITE;
/*!40000 ALTER TABLE `CalciumPurchase` DISABLE KEYS */;
INSERT INTO `CalciumPurchase` VALUES ('PO-173534','RoweChemicals','Cal-Sol','CaCL65413','2023-04-22','2021-01-14',15000,'2022-04-16 15:04:58','2022-04-16 15:04:59',0,0),('PO-173535','RoweChemicals','Cal-Sol','CaCL65414','2023-06-23','2021-11-01',7800,'2022-04-16 15:04:58','2022-04-16 15:04:59',0,0),('PO-173536','RoweChemicals','Cal-Sol','CaCL65415','2023-08-24','2021-11-16',12980,'2022-04-16 15:04:58','2022-04-16 15:04:59',0,0),('PO-173537','RoweChemicals','Cal-Sol','CaCL65416','2023-10-25','2021-12-01',15000,'2022-04-16 15:04:58','2022-04-16 15:04:59',0,0);
/*!40000 ALTER TABLE `CalciumPurchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CheeseInfo`
--

DROP TABLE IF EXISTS `CheeseInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CheeseInfo` (
  `CheeseID` varchar(20) NOT NULL,
  `CheeseName` varchar(20) NOT NULL,
  `CheeseDescription` varchar(80) DEFAULT NULL,
  `RennetBatchCode` char(8) NOT NULL,
  `RennetWeight` float NOT NULL,
  `CaClBatchCode` char(9) NOT NULL,
  `CaClWeight` float NOT NULL,
  `CultureInfo` json NOT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint DEFAULT '0',
  PRIMARY KEY (`CheeseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CheeseInfo`
--

LOCK TABLES `CheeseInfo` WRITE;
/*!40000 ALTER TABLE `CheeseInfo` DISABLE KEYS */;
INSERT INTO `CheeseInfo` VALUES ('IL-01','il Lupo','il Lupo Description','REN45784',10,'CaCL65414',10,'{\"LPRA82561\": 10, \"LH10022564\": 20}','2022-04-16 15:05:00','2022-04-16 15:05:01',0),('MF-01','Monforte','Monforte Description','REN45786',8,'CaCL65416',8,'{\"LPRA82561\": 5, \"BGP-162562\": 5, \"LH10022564\": 15, \"Y 084 B42563\": 5}','2022-04-16 15:05:00','2022-04-16 15:05:01',0),('ML-01','Mont Louis','Mont Louis Description','REN45786',12,'CaCL65413',12,'{\"BGP-162562\": 20, \"TA 6102565\": 10, \"Y 084 B42563\": 10}','2022-04-16 15:05:00','2022-04-16 15:05:01',0),('MP-01','Mont Priscilla','Mont Priscilla Description','REN45784',5,'CaCL65413',5,'{\"LPRA82561\": 5, \"BGP-162562\": 10, \"Y 084 B42563\": 5}','2022-04-16 15:05:00','2022-04-16 15:05:01',0),('MR-02','Monte Rosso','Monte Rosso Description','REN45786',4,'CaCL65413',4,'{\"TA 6102565\": 30}','2022-04-16 15:05:00','2022-04-16 15:05:01',0);
/*!40000 ALTER TABLE `CheeseInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CulturePurchase`
--

DROP TABLE IF EXISTS `CulturePurchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CulturePurchase` (
  `CultureOrderID` char(9) NOT NULL,
  `SupplierName` varchar(20) NOT NULL,
  `CultureName` varchar(20) NOT NULL,
  `CultureBatchCode` varchar(20) NOT NULL,
  `CultureBestBefore` date DEFAULT NULL,
  `CultureOpenDate` date DEFAULT NULL,
  `Quantity` float NOT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint DEFAULT '0',
  `isUsed` tinyint DEFAULT '0',
  PRIMARY KEY (`CultureOrderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CulturePurchase`
--

LOCK TABLES `CulturePurchase` WRITE;
/*!40000 ALTER TABLE `CulturePurchase` DISABLE KEYS */;
INSERT INTO `CulturePurchase` VALUES ('PO-974622','SACCO','LPRA','LPRA82561','2023-04-22','2021-01-14',150,'2022-04-16 15:05:02','2022-04-16 15:05:02',0,0),('PO-974623','DANISCO','BGP-1','BGP-162562','2023-06-23','2021-03-01',200,'2022-04-16 15:05:02','2022-04-16 15:05:02',0,0),('PO-974624','CR HANSEN','Y 084 B','Y 084 B42563','2023-08-24','2021-04-16',280,'2022-04-16 15:05:02','2022-04-16 15:05:02',0,0),('PO-974625','DANISCO','LH100','LH10022564','2023-10-25','2021-06-01',100,'2022-04-16 15:05:02','2022-04-16 15:05:02',0,0),('PO-974626','DANISCO','TA 61','TA 6102565','2023-12-26','2021-07-17',220,'2022-04-16 15:05:02','2022-04-16 15:05:02',0,0);
/*!40000 ALTER TABLE `CulturePurchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CutWheelInfo`
--

DROP TABLE IF EXISTS `CutWheelInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CutWheelInfo` (
  `CheeseWheelID` varchar(20) NOT NULL,
  `CheeseBatchCode` varchar(20) NOT NULL,
  `CheeseWheelWeight` float NOT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint DEFAULT '0',
  PRIMARY KEY (`CheeseWheelID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CutWheelInfo`
--

LOCK TABLES `CutWheelInfo` WRITE;
/*!40000 ALTER TABLE `CutWheelInfo` DISABLE KEYS */;
INSERT INTO `CutWheelInfo` VALUES ('IL178420001','IL17842',100,'2022-04-16 15:05:03','2022-04-16 15:05:03',0),('MF178530001','MF17853',150,'2022-04-16 15:05:03','2022-04-16 15:05:03',0),('MF178530002','MF17853',100,'2022-04-16 15:05:03','2022-04-16 15:05:03',0),('MP178310001','MP17831',100,'2022-04-16 15:05:03','2022-04-16 15:05:03',0),('MP178310002','MP17831',200,'2022-04-16 15:05:03','2022-04-16 15:05:03',0),('MP178640001','MP17864',120,'2022-04-16 15:05:03','2022-04-16 15:05:03',0);
/*!40000 ALTER TABLE `CutWheelInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DailyWeather`
--

DROP TABLE IF EXISTS `DailyWeather`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DailyWeather` (
  `DateTime` date NOT NULL,
  `Temperature` float NOT NULL,
  `WeatherType` varchar(20) DEFAULT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint DEFAULT '0',
  PRIMARY KEY (`DateTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DailyWeather`
--

LOCK TABLES `DailyWeather` WRITE;
/*!40000 ALTER TABLE `DailyWeather` DISABLE KEYS */;
INSERT INTO `DailyWeather` VALUES ('2022-02-01',15,'Sunny','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-02',19,'Windy','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-03',10,'Cloudy','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-04',4,'Rainy','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-05',12,'Cloudy','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-06',15,'Sunny','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-07',16,'Sunny','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-08',11,'Rainy','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-09',16,'Rainy','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-10',17,'Rainy','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-11',14,'Rainy','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-12',15,'Sunny','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-13',12,'Sunny','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-14',16,'Sunny','2022-04-16 15:05:04','2022-04-16 15:05:05',0),('2022-02-15',12,'Sunny','2022-04-16 15:05:04','2022-04-16 15:05:05',0);
/*!40000 ALTER TABLE `DailyWeather` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MilkPurchase`
--

DROP TABLE IF EXISTS `MilkPurchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MilkPurchase` (
  `MilkOrderID` char(9) NOT NULL,
  `MilkOrderDate` date NOT NULL,
  `SupplierName` varchar(15) NOT NULL,
  `MilkBatchCode` char(9) NOT NULL,
  `MilkDeliveryVolume` float NOT NULL,
  `MilkDelvoTestResult` char(1) NOT NULL,
  `MilkPH` float NOT NULL,
  `MilkTotalAcidity` int NOT NULL,
  `MilkTempAtCollection` float NOT NULL,
  `MilkTempAtDelivery` float NOT NULL,
  `MilkFat` float NOT NULL,
  `MilkSolidNonFat` float NOT NULL,
  `MilkProtein` float NOT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint DEFAULT '0',
  `isUsed` tinyint DEFAULT '0',
  PRIMARY KEY (`MilkOrderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MilkPurchase`
--

LOCK TABLES `MilkPurchase` WRITE;
/*!40000 ALTER TABLE `MilkPurchase` DISABLE KEYS */;
INSERT INTO `MilkPurchase` VALUES ('PO-873533','2022-02-01','GLENMAC','MILK15431',1000,'N',6.9,18,13,13,3.88,9.85,3.46,'2022-04-16 15:05:06','2022-04-16 15:05:06',0,0),('PO-873534','2022-02-01','JASMIN','MILK25431',500,'N',6.9,17,12.8,13.05,3.9,9.97,3.51,'2022-04-16 15:05:06','2022-04-16 15:05:06',0,0),('PO-873535','2022-02-01','GLENMAC','MILK35431',750,'C',6.88,19,10.8,13.1,3.92,10.09,3.56,'2022-04-16 15:05:06','2022-04-16 15:05:06',0,0),('PO-873536','2022-02-02','GLENMAC','MILK45431',1000,'N',6.92,18,9.5,13.15,3.94,10.21,3.61,'2022-04-16 15:05:06','2022-04-16 15:05:06',0,0),('PO-873537','2022-02-04','GLENMAC','MILK55431',750,'P',6.9,20,15.8,13.2,3.96,10.33,3.66,'2022-04-16 15:05:06','2022-04-16 15:05:06',0,0),('PO-873538','2022-02-04','JASMIN','MILK65431',1000,'C',6.9,18,13.2,13.25,3.98,10.45,3.71,'2022-04-16 15:05:06','2022-04-16 15:05:06',0,0);
/*!40000 ALTER TABLE `MilkPurchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProductionProcess`
--

DROP TABLE IF EXISTS `ProductionProcess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductionProcess` (
  `CheeseBatchCode` varchar(20) NOT NULL,
  `CheeseID` varchar(20) NOT NULL,
  `Step1StartTime` datetime DEFAULT NULL,
  `Step1StartTemp` float DEFAULT NULL,
  `Step1pH` float DEFAULT NULL,
  `Step1TA` float DEFAULT NULL,
  `Step2StartTime` datetime DEFAULT NULL,
  `Step2StartTemp` float DEFAULT NULL,
  `Step2pH` float DEFAULT NULL,
  `Step2TA` float DEFAULT NULL,
  `Step3StartTime` datetime DEFAULT NULL,
  `Step3StartTemp` float DEFAULT NULL,
  `Step3pH` float DEFAULT NULL,
  `Step3TA` float DEFAULT NULL,
  `Step4StartTime` datetime DEFAULT NULL,
  `Step4StartTemp` float DEFAULT NULL,
  `Step4pH` float DEFAULT NULL,
  `Step4TA` float DEFAULT NULL,
  `Step5StartTime` datetime DEFAULT NULL,
  `Step5StartTemp` float DEFAULT NULL,
  `Step5pH` float DEFAULT NULL,
  `Step5TA` float DEFAULT NULL,
  `Step6StartTime` datetime DEFAULT NULL,
  `Step6StartTemp` float DEFAULT NULL,
  `Step6pH` float DEFAULT NULL,
  `Step6TA` float DEFAULT NULL,
  `Step7StartTime` datetime DEFAULT NULL,
  `Step7StartTemp` float DEFAULT NULL,
  `Step7pH` float DEFAULT NULL,
  `Step7TA` float DEFAULT NULL,
  `Step8StartTime` datetime DEFAULT NULL,
  `Step8StartTemp` float DEFAULT NULL,
  `Step8pH` float DEFAULT NULL,
  `Step8TA` float DEFAULT NULL,
  `Step9StartTime` datetime DEFAULT NULL,
  `Step9StartTemp` float DEFAULT NULL,
  `Step9pH` float DEFAULT NULL,
  `Step9TA` float DEFAULT NULL,
  `Step10StartTime` datetime DEFAULT NULL,
  `Step10StartTemp` float DEFAULT NULL,
  `Step10pH` float DEFAULT NULL,
  `Step10TA` float DEFAULT NULL,
  `Step11StartTime` datetime DEFAULT NULL,
  `Step11StartTemp` float DEFAULT NULL,
  `Step11pH` float DEFAULT NULL,
  `Step11TA` float DEFAULT NULL,
  `Step12StartTime` datetime DEFAULT NULL,
  `Step12StartTemp` float DEFAULT NULL,
  `Step12pH` float DEFAULT NULL,
  `Step12TA` float DEFAULT NULL,
  `Step13StartTime` datetime DEFAULT NULL,
  `Step13StartTemp` float DEFAULT NULL,
  `Step13pH` float DEFAULT NULL,
  `Step13TA` float DEFAULT NULL,
  `Step14StartTime` datetime DEFAULT NULL,
  `Step14StartTemp` float DEFAULT NULL,
  `Step14pH` float DEFAULT NULL,
  `Step14TA` float DEFAULT NULL,
  `Step15StartTime` datetime DEFAULT NULL,
  `Step15StartTemp` float DEFAULT NULL,
  `Step15pH` float DEFAULT NULL,
  `Step15TA` float DEFAULT NULL,
  `Step16StartTime` datetime DEFAULT NULL,
  `Step16StartTemp` float DEFAULT NULL,
  `Step16pH` float DEFAULT NULL,
  `Step16TA` float DEFAULT NULL,
  `Step17StartTime` datetime DEFAULT NULL,
  `Step17StartTemp` float DEFAULT NULL,
  `Step17pH` float DEFAULT NULL,
  `Step17TA` float DEFAULT NULL,
  `Step18StartTime` datetime DEFAULT NULL,
  `Step18StartTemp` float DEFAULT NULL,
  `Step18pH` float DEFAULT NULL,
  `Step18TA` float DEFAULT NULL,
  `Step19StartTime` datetime DEFAULT NULL,
  `Step19StartTemp` float DEFAULT NULL,
  `Step19pH` float DEFAULT NULL,
  `Step19TA` float DEFAULT NULL,
  `Step20StartTime` datetime DEFAULT NULL,
  `Step20StartTemp` float DEFAULT NULL,
  `Step20pH` float DEFAULT NULL,
  `Step20TA` float DEFAULT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint DEFAULT '0',
  PRIMARY KEY (`CheeseBatchCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductionProcess`
--

LOCK TABLES `ProductionProcess` WRITE;
/*!40000 ALTER TABLE `ProductionProcess` DISABLE KEYS */;
INSERT INTO `ProductionProcess` VALUES ('IL17842','IL-01','2022-02-16 07:10:00',31,6.92,15,'2022-02-16 07:30:05',32,6.91,14.95,'2022-02-16 07:50:10',33,6.9,14.9,'2022-02-16 08:10:15',34,6.89,14.85,'2022-02-16 08:30:20',35,6.88,14.8,'2022-02-16 08:50:25',36,6.87,14.75,'2022-02-16 09:10:30',37,6.86,14.7,'2022-02-16 09:30:35',38,6.85,14.65,'2022-02-16 09:50:40',39,6.84,14.6,'2022-02-16 10:10:45',40,6.83,14.55,'2022-02-16 10:30:50',41,6.82,14.5,'2022-02-16 10:50:55',42,6.81,14.45,'2022-02-16 11:11:00',43,6.8,14.4,'2022-02-16 11:31:05',44,6.79,14.35,'2022-02-16 11:51:10',45,6.78,14.3,'2022-02-16 12:11:15',46,6.77,14.25,'2022-02-16 12:31:20',47,6.76,14.2,'2022-02-16 12:51:25',48,6.75,14.15,'2022-03-16 13:11:30',49,6.74,14.1,'2022-05-16 13:31:35',50,6.73,14.05,'2022-04-16 15:05:07','2022-04-16 15:05:08',0),('MF17853','MF-01','2022-02-16 07:50:05',34,6.86,15,'2022-02-16 08:10:10',35,6.85,14.95,'2022-02-16 08:30:15',36,6.84,14.9,'2022-02-16 08:50:20',37,6.83,14.85,'2022-02-16 09:10:25',38,6.82,14.8,'2022-02-16 09:30:30',39,6.81,14.75,'2022-02-16 09:50:35',40,6.8,14.7,'2022-02-16 10:10:40',41,6.79,14.65,'2022-02-16 10:30:45',42,6.78,14.6,'2022-02-16 10:50:50',43,6.77,14.55,'2022-02-16 11:10:55',44,6.76,14.5,'2022-02-16 11:31:00',45,6.75,14.45,'2022-02-16 11:51:05',46,6.74,14.4,'2022-02-16 12:11:10',47,6.73,14.35,'2022-02-16 12:31:15',48,6.72,14.3,'2022-02-16 12:51:20',49,6.71,14.25,'2022-02-16 13:11:25',50,6.7,14.2,'2022-02-16 13:31:30',51,6.69,14.15,'2022-03-16 13:51:35',52,6.68,14.1,'2022-05-16 14:11:40',53,6.67,14.05,'2022-04-16 15:05:07','2022-04-16 15:05:08',0),('MP17831','MP-01','2022-02-16 07:00:00',35,6.88,15,'2022-02-16 07:20:05',36,6.87,14.95,'2022-02-16 07:40:10',37,6.86,14.9,'2022-02-16 08:00:15',38,6.85,14.85,'2022-02-16 08:20:20',39,6.84,14.8,'2022-02-16 08:40:25',40,6.83,14.75,'2022-02-16 09:00:30',41,6.82,14.7,'2022-02-16 09:20:35',42,6.81,14.65,'2022-02-16 09:40:40',43,6.8,14.6,'2022-02-16 10:00:45',44,6.79,14.55,'2022-02-16 10:20:50',45,6.78,14.5,'2022-02-16 10:40:55',46,6.77,14.45,'2022-02-16 11:01:00',47,6.76,14.4,'2022-02-16 11:21:05',48,6.75,14.35,'2022-02-16 11:41:10',49,6.74,14.3,'2022-02-16 12:01:15',50,6.73,14.25,'2022-02-16 12:21:20',51,6.72,14.2,'2022-02-16 12:41:25',52,6.71,14.15,'2022-03-16 13:01:30',53,6.7,14.1,'2022-05-16 13:21:35',54,6.69,14.05,'2022-04-16 15:05:07','2022-04-16 15:05:08',0),('MP17864','MP-01','2022-02-16 07:20:00',32,6.9,15,'2022-02-16 07:40:05',33,6.89,14.95,'2022-02-16 08:00:10',34,6.88,14.9,'2022-02-16 08:20:15',35,6.87,14.85,'2022-02-16 08:40:20',36,6.86,14.8,'2022-02-16 09:00:25',37,6.85,14.75,'2022-02-16 09:20:30',38,6.84,14.7,'2022-02-16 09:40:35',39,6.83,14.65,'2022-02-16 10:00:40',40,6.82,14.6,'2022-02-16 10:20:45',41,6.81,14.55,'2022-02-16 10:40:50',42,6.8,14.5,'2022-02-16 11:00:55',43,6.79,14.45,'2022-02-16 11:21:00',44,6.78,14.4,'2022-02-16 11:41:05',45,6.77,14.35,'2022-02-16 12:01:10',46,6.76,14.3,'2022-02-16 12:21:15',47,6.75,14.25,'2022-02-16 12:41:20',48,6.74,14.2,'2022-02-16 13:01:25',49,6.73,14.15,'2022-03-16 13:21:30',50,6.72,14.1,'2022-05-16 13:41:35',51,6.71,14.05,'2022-04-16 15:05:07','2022-04-16 15:05:08',0);
/*!40000 ALTER TABLE `ProductionProcess` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RennetPurchase`
--

DROP TABLE IF EXISTS `RennetPurchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RennetPurchase` (
  `RennetOrderID` char(9) NOT NULL,
  `SupplierName` varchar(20) NOT NULL,
  `RennetName` varchar(30) NOT NULL,
  `RennetBatchCode` char(8) NOT NULL,
  `Rennet_Best_Before` date DEFAULT NULL,
  `Rennet_Open_Date` date DEFAULT NULL,
  `Quantity` float NOT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint DEFAULT '0',
  `isUsed` tinyint DEFAULT '0',
  PRIMARY KEY (`RennetOrderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RennetPurchase`
--

LOCK TABLES `RennetPurchase` WRITE;
/*!40000 ALTER TABLE `RennetPurchase` DISABLE KEYS */;
INSERT INTO `RennetPurchase` VALUES ('PO-238751','SACCO','ALBAMAX (180 IMCU)','REN45783','2023-04-22','2021-01-14',500,'2022-04-16 15:05:09','2022-04-16 15:05:09',0,0),('PO-238752','RENCO','RENCO (1120 IMCU)','REN45784','2023-06-23','2021-03-01',1000,'2022-04-16 15:05:09','2022-04-16 15:05:09',0,0),('PO-238753','SACCO','ALBAMAX (180 IMCU)','REN45785','2023-08-24','2021-04-16',200,'2022-04-16 15:05:09','2022-04-16 15:05:09',0,0),('PO-238754','RENCO','RENCO (1120 IMCU)','REN45786','2023-10-25','2021-06-01',300,'2022-04-16 15:05:09','2022-04-16 15:05:09',0,0);
/*!40000 ALTER TABLE `RennetPurchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SalesOrder`
--

DROP TABLE IF EXISTS `SalesOrder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SalesOrder` (
  `SalesOrderID` char(6) NOT NULL,
  `CheeseWheelID` varchar(20) NOT NULL,
  `BuyerName` varchar(20) NOT NULL,
  `Time` datetime NOT NULL,
  `Weight` float NOT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint DEFAULT '0',
  PRIMARY KEY (`SalesOrderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SalesOrder`
--

LOCK TABLES `SalesOrder` WRITE;
/*!40000 ALTER TABLE `SalesOrder` DISABLE KEYS */;
INSERT INTO `SalesOrder` VALUES ('123456','MP178310001','B-Coles','2022-03-31 13:25:00',100,'2022-04-16 15:05:11','2022-04-16 15:05:11',0),('123457','IL178420001','C-James','2022-04-01 13:25:00',20,'2022-04-16 15:05:11','2022-04-16 15:05:11',0),('123458','IL178420001','C-Kelly','2022-04-02 13:25:00',30,'2022-04-16 15:05:11','2022-04-16 15:05:11',0),('123459','IL178420001','C-John','2022-04-03 13:25:00',40,'2022-04-16 15:05:11','2022-04-16 15:05:11',0),('123460','IL178420001','C-Tom','2022-04-04 13:25:00',10,'2022-04-16 15:05:11','2022-04-16 15:05:11',0),('123461','MF178530001','B-Coles','2022-04-04 13:25:00',150,'2022-04-16 15:05:11','2022-04-16 15:05:11',0),('123462','MF178530002','C-James','2022-04-04 13:25:00',10,'2022-04-16 15:05:11','2022-04-16 15:05:11',0);
/*!40000 ALTER TABLE `SalesOrder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_state` int DEFAULT NULL,
  `_default` int DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=570728455 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','123',1,1,1,'2022-04-13 07:21:49','2022-04-13 07:21:49',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cheese'
--

--
-- Dumping routines for database 'cheese'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-18 16:38:48
