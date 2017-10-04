drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers (
	id int(10) auto_increment primary key not null,
	burger_name varchar(100) not null,
	devoured boolean default false,
	orderDate DATETIME default NOW()
);
