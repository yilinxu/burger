create database burgers_db;
use burgers_db;
create table burgers(
id int auto_increment not null,
burger_name varchar(30) not null,
devoured boolean default false,
date timestamp default current_timestamp
);
