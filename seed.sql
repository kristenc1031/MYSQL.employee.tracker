DROP DATABASE IF EXISTS empTracker_db;
CREATE DATABASE empTracker_db;

USE empTracker_db;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(30) NULL,
  lastName VARCHAR(30) NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary VARCHAR(30) NOT NULL,
  department_id INT default 0,
  PRIMARY KEY (id)
);
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO employee (firstName, lastName, role_id, manager_id)
VALUES ("Kristen", "Campbell", 1, 777),("John","Doe", 2, 778),("Mike","Chan", 3, 779);

INSERT INTO role (title, salary, department_id)
VALUES ("HR", 10.00, 123);

INSERT INTO department (id, name)
VALUES (123, "Kristen Campbell");