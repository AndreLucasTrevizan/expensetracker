-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: expensetracker
-- ------------------------------------------------------
-- Server version	9.0.1

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
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('6f14ebd4-75cc-4cf3-84bb-02c38a57576d','7a871ecb014d7cfb61ea929bdc4246cf6900e0e28b10771c039d532242d94b0a','2025-02-13 12:02:29.326','20250213111051_init',NULL,NULL,'2025-02-13 12:02:28.832',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `installment_purchases`
--

DROP TABLE IF EXISTS `installment_purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `installment_purchases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amountOfInstallment` int NOT NULL,
  `installmentValue` decimal(9,2) NOT NULL,
  `totalExpense` decimal(9,2) NOT NULL,
  `isPayed` tinyint(1) NOT NULL DEFAULT '0',
  `partPayed` tinyint(1) NOT NULL DEFAULT '0',
  `installmentsPayed` int DEFAULT NULL,
  `onCard` tinyint(1) NOT NULL DEFAULT '1',
  `dueDay` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `installment_purchases_userId_fkey` (`userId`),
  CONSTRAINT `installment_purchases_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `installment_purchases`
--

LOCK TABLES `installment_purchases` WRITE;
/*!40000 ALTER TABLE `installment_purchases` DISABLE KEYS */;
INSERT INTO `installment_purchases` VALUES (1,'Monitor',12,89.31,1071.72,0,1,9,1,6,'2025-02-13 12:06:42.986','2025-02-13 12:06:42.986',1),(2,'Coolers',4,122.79,491.16,0,1,3,1,6,'2025-02-13 12:10:25.422','2025-02-13 12:10:25.422',1),(3,'Tatuagem',3,156.00,468.00,0,1,2,1,9,'2025-02-13 12:11:10.971','2025-02-13 12:11:10.971',1),(4,'Farming Simulator',6,34.79,208.74,0,1,4,1,6,'2025-02-13 12:12:09.920','2025-02-13 12:12:09.920',1),(5,'Au Q Mia',2,187.00,374.00,0,1,1,1,9,'2025-02-13 12:13:28.469','2025-02-13 12:13:28.469',1),(6,'Parcela Fatura de Fev. Nubank',3,765.22,2295.66,0,1,1,1,13,'2025-02-13 12:14:20.115','2025-02-13 12:14:20.115',1),(7,'Cama',10,351.23,3512.30,0,1,1,0,27,'2025-02-13 16:29:04.318','2025-02-13 16:29:04.318',1),(8,'Mecanica Comunello',6,185.01,1110.06,0,1,3,0,28,'2025-02-13 16:33:47.200','2025-02-13 16:33:47.200',1),(9,'Banco do Brasil',16,305.51,4888.16,0,1,12,0,18,'2025-02-13 16:40:06.699','2025-02-13 16:40:06.699',1);
/*!40000 ALTER TABLE `installment_purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operations`
--

DROP TABLE IF EXISTS `operations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `operations_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operations`
--

LOCK TABLES `operations` WRITE;
/*!40000 ALTER TABLE `operations` DISABLE KEYS */;
INSERT INTO `operations` VALUES (1,'Pix','2025-02-13 12:05:38.717','2025-02-13 12:05:38.717'),(2,'Débito','2025-02-13 12:05:44.822','2025-02-13 12:05:44.822'),(3,'Cartão','2025-02-13 12:05:49.453','2025-02-13 12:05:49.453');
/*!40000 ALTER TABLE `operations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(9,2) NOT NULL,
  `isIstallment` tinyint(1) NOT NULL DEFAULT '0',
  `userId` int NOT NULL,
  `operationId` int NOT NULL,
  `installmentPurchaseId` int DEFAULT NULL,
  `invoice` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `payments_userId_fkey` (`userId`),
  KEY `payments_operationId_fkey` (`operationId`),
  KEY `payments_installmentPurchaseId_fkey` (`installmentPurchaseId`),
  CONSTRAINT `payments_installmentPurchaseId_fkey` FOREIGN KEY (`installmentPurchaseId`) REFERENCES `installment_purchases` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `payments_operationId_fkey` FOREIGN KEY (`operationId`) REFERENCES `operations` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `payments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,'Monitor',89.31,1,1,3,1,1,'2025-03-13 12:06:42.996','2025-02-13 12:06:42.998'),(2,'Monitor',89.31,1,1,3,1,1,'2025-04-13 12:06:43.005','2025-02-13 12:06:43.006'),(3,'Monitor',89.31,1,1,3,1,1,'2025-05-13 12:06:43.010','2025-02-13 12:06:43.012'),(4,'Coolers',122.79,1,1,3,2,1,'2025-03-13 12:10:25.427','2025-02-13 12:10:25.428'),(5,'Tatuagem',156.00,1,1,3,3,1,'2025-03-13 12:11:10.976','2025-02-13 12:11:10.978'),(6,'Farming Simulator',34.79,1,1,3,4,1,'2025-03-13 12:12:09.929','2025-02-13 12:12:09.930'),(7,'Farming Simulator',34.79,1,1,3,4,1,'2025-04-13 12:12:09.935','2025-02-13 12:12:09.936'),(8,'Au Q Mia',187.00,1,1,3,5,1,'2025-03-13 12:13:28.475','2025-02-13 12:13:28.476'),(9,'Parcela Fatura de Fev. Nubank',765.22,1,1,3,6,1,'2025-03-13 12:14:20.120','2025-02-13 12:14:20.122'),(10,'Parcela Fatura de Fev. Nubank',765.22,1,1,3,6,1,'2025-04-13 12:14:20.126','2025-02-13 12:14:20.127'),(11,'Parcela da Cama',351.23,1,1,1,1,0,'2025-02-13 16:30:41.311','2025-02-13 16:30:41.311'),(12,'Parcela da Mecanica',185.01,1,1,1,8,0,'2025-02-13 16:43:22.183','2025-02-13 16:43:22.183'),(13,'Parcela do Banco do Brasil',305.51,1,1,1,9,0,'2025-02-13 16:44:20.276','2025-02-13 16:44:20.276'),(14,'Jiu-jitsu',150.00,0,1,1,NULL,0,'2025-02-13 16:44:46.922','2025-02-13 16:44:46.922'),(15,'Internet',149.90,0,1,1,NULL,0,'2025-02-13 16:45:02.790','2025-02-13 16:45:02.790'),(16,'Contabilidade',67.79,0,1,1,NULL,0,'2025-02-13 16:45:52.905','2025-02-13 16:45:52.905'),(17,'Tim',89.99,0,1,1,NULL,0,'2025-02-13 16:46:03.474','2025-02-13 16:46:03.474'),(18,'Faculdade',250.93,0,1,1,NULL,0,'2025-02-13 16:46:15.658','2025-02-13 16:46:15.658'),(19,'Lanche Bier',78.00,0,1,1,NULL,0,'2025-02-13 16:46:44.978','2025-02-13 16:46:44.978'),(20,'Lanche Bier',55.00,0,1,1,NULL,0,'2025-02-13 16:47:59.670','2025-02-13 16:47:59.670'),(21,'Mercadinho',17.88,0,1,1,NULL,0,'2025-02-13 16:48:50.203','2025-02-13 16:48:50.203'),(22,'Mercadinho',13.99,0,1,1,NULL,0,'2025-02-13 16:48:58.091','2025-02-13 16:48:58.091'),(23,'Entrada Fatura Nubank',310.80,0,1,1,NULL,0,'2025-02-13 16:51:32.206','2025-02-13 16:51:32.206');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `revenue`
--

DROP TABLE IF EXISTS `revenue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `revenue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` decimal(9,2) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `revenue_userId_fkey` (`userId`),
  CONSTRAINT `revenue_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revenue`
--

LOCK TABLES `revenue` WRITE;
/*!40000 ALTER TABLE `revenue` DISABLE KEYS */;
INSERT INTO `revenue` VALUES (1,'Salário',2311.88,1,'2025-02-13 16:30:34.734','2025-02-13 16:30:34.734'),(2,'Saldo do Mês Anterior - Janeiro',12.74,1,'2025-02-13 17:05:45.398','2025-02-13 17:05:45.398');
/*!40000 ALTER TABLE `revenue` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `Tgr_Update_User_Totals_Increase` AFTER INSERT ON `revenue` FOR EACH ROW BEGIN
UPDATE total SET valueWallet = valueWallet + NEW.value WHERE userId = NEW.userId;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `total`
--

DROP TABLE IF EXISTS `total`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `total` (
  `id` int NOT NULL AUTO_INCREMENT,
  `valueCard` decimal(9,2) NOT NULL,
  `valueWallet` decimal(9,2) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `total_userId_fkey` (`userId`),
  CONSTRAINT `total_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `total`
--

LOCK TABLES `total` WRITE;
/*!40000 ALTER TABLE `total` DISABLE KEYS */;
INSERT INTO `total` VALUES (1,0.00,298.59,1,'2025-02-13 09:03:05.000','2025-02-13 16:51:32.217');
/*!40000 ALTER TABLE `total` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Andre Lucas','andre@gmail.com','$2a$08$W2lctGJ2MQINcoX41WyaUeByrREbTuulcw85Mz0qnBbfceczJMnTm','2025-02-13 12:03:05.751','2025-02-13 12:03:05.751');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `Tgr_Create_User_Totals` AFTER INSERT ON `users` FOR EACH ROW BEGIN
INSERT INTO total (`valueCard`, `valueWallet`, `userId`, `createdAt`, `updatedAt`)
VALUES (0, 0, NEW.id, current_timestamp(), current_timestamp());
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `Tgr_Remove_User_Totals` AFTER DELETE ON `users` FOR EACH ROW BEGIN
DELETE FROM total WHERE userId = OLD.id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping events for database 'expensetracker'
--

--
-- Dumping routines for database 'expensetracker'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-13 17:10:23
