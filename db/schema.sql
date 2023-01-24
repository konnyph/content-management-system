DROP DATABASE IF EXISTS management_system_db;
CREATE DATABASE management_system_db;

USE management_system_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE role (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(50) NOT NULL,
   salary DECIMAL,
   department_id INT,
   FOREIGN KEY (department_id)
   REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT, 
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);