create database if not EXISTS `inventarioj`;
use `inventarioj`;

-- Dumping structure for table inventario.articulos
CREATE TABLE IF NOT EXISTS `articulos` (
  `id_articulo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_articulo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table inventario.articulos: ~2 rows (approximately)
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` (`id_articulo`, `nombre`, `descripcion`) VALUES
	(1, 'Pantalla 48"', 'Pantalla LG 48" con entradas USB'),
	(2, 'Monitores Dell', 'Monitores DELL de 18"');
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;

-- Dumping structure for table inventario.edificios
CREATE TABLE IF NOT EXISTS `edificios` (
  `id_edificio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_edificio`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table inventario.edificios: ~0 rows (approximately)
/*!40000 ALTER TABLE `edificios` DISABLE KEYS */;
INSERT INTO `edificios` (`id_edificio`, `nombre`, `descripcion`) VALUES
	(1, 'Salvador Allende', 'Carreras: mecánica automotriz');
/*!40000 ALTER TABLE `edificios` ENABLE KEYS */;

-- Dumping structure for table inventario.salones
CREATE TABLE IF NOT EXISTS `salones` (
  `id_salon` int(11) NOT NULL AUTO_INCREMENT,
  `id_edificio` int(11) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `codigo` varchar(15) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_salon`),
  KEY `fk_reference_2` (`id_edificio`),
  CONSTRAINT `fk_reference_2` FOREIGN KEY (`id_edificio`) REFERENCES `edificios` (`id_edificio`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table inventario.salones: ~0 rows (approximately)
/*!40000 ALTER TABLE `salones` DISABLE KEYS */;
INSERT INTO `salones` (`id_salon`, `id_edificio`, `nombre`, `codigo`, `descripcion`) VALUES
	(1, 1, 'Salon 5', 'S5-E2', '');
/*!40000 ALTER TABLE `salones` ENABLE KEYS */;


-- Dumping structure for table inventario.inventarios
CREATE TABLE IF NOT EXISTS `inventarios` (
  `id_inventario` int(11) NOT NULL AUTO_INCREMENT,
  `id_salon` int(11) DEFAULT NULL,
  `encargado` varchar(50) NOT NULL,
  `observaciones` varchar(400) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizado` datetime,
  PRIMARY KEY (`id_inventario`),
  KEY `fk_reference_1` (`id_salon`),
  CONSTRAINT `fk_reference_1` FOREIGN KEY (`id_salon`) REFERENCES `salones` (`id_salon`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table inventario.inventarios: ~2 rows (approximately)
/*!40000 ALTER TABLE `inventarios` DISABLE KEYS */;
INSERT INTO `inventarios` (`id_inventario`, `id_salon`, `encargado`, `observaciones`, `fecha_creacion`) VALUES
	(1, 1, 'Abraham', 'ninguna', '2018-03-03 13:34:11'),
	(2, 1, 'Yo we', 'rdftgbhY', '2018-03-03 14:07:17'),
	(3, 1, 'dfghj', 'drcfyhn', '2018-03-03 14:12:20');
/*!40000 ALTER TABLE `inventarios` ENABLE KEYS */;

-- Dumping structure for table inventario.detalle_inventario
CREATE TABLE IF NOT EXISTS `detalle_inventario` (
  `id_inventario` int(11) NOT NULL,
  `id_articulo` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id_inventario`,`id_articulo`),
  KEY `fk_reference_4` (`id_articulo`),
  CONSTRAINT `fk_reference_3` FOREIGN KEY (`id_inventario`) REFERENCES `inventarios` (`id_inventario`) ON DELETE CASCADE,
  CONSTRAINT `fk_reference_4` FOREIGN KEY (`id_articulo`) REFERENCES `articulos` (`id_articulo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table inventario.detalle_inventario: ~2 rows (approximately)
/*!40000 ALTER TABLE `detalle_inventario` DISABLE KEYS */;
INSERT INTO `detalle_inventario` (`id_inventario`, `id_articulo`, `cantidad`) VALUES
	(1, 1, 1),
	(1, 2, 10),
	(3, 1, 1);
/*!40000 ALTER TABLE `detalle_inventario` ENABLE KEYS */;
