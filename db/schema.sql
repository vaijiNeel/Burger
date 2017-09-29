create database burgers_db;

use burgers_db;

create table burgers (
	id int(10) auto_increment primary key not null,
	burger_name varchar(100),
	devoured boolean default=false,
	orderDate DATETIME
);

select * from burgers;