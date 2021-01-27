-- 
-- Editor SQL for DB table users
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE IF NOT EXISTS `usuarios` (
	`id` int(10) NOT NULL auto_increment,
	`nombre` varchar(255),
	`correo` varchar(255),
	`telefono` numeric(9,2),
	`sexo` varchar(255),
	PRIMARY KEY( `id` )
);