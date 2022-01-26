CREATE DATABASE myfilms;
USE myfilms;


CREATE TABLE `myfilms`.`films` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` TEXT(255) NOT NULL,
`type` TEXT(255) NOT NULL,
`year` INT NOT NULL,
`country` TEXT(255) NOT NULL,
PRIMARY KEY (`id`)
);