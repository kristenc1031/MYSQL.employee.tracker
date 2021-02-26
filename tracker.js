var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

const PORT = process.env.PORT || 8888

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Butterfly",
  database: "empTracker_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    inquirer
      .prompt({
        name: "employee",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all employees", "View all employees by department", "View all employees by role", "EXIT"]
      })
      .then(function(answer) {
        switch (answer.employee) {
          case "View all employees":
            viewEmployee();
            break;
          
          case "View all employees by department":
            viewDepartment();
            break;
          
          case "View all employees by role":
            viewRole();
            break;
        }
      });
}

const viewEmployee = () => {
  console.log('Selecting all employee...\n');
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      console.log(res);
      connection.end();
    })
}

const viewDepartment = () => {
  console.log('Selecting all department...\n');
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
};

const viewRole = () => {
  console.log('Selecting all _role...\n');
    connection.query("SELECT * FROM _role", (err, res) => {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
};








// app.listen(PORT, () => {
//     console.log('App listening on PORT: ${PORT}');
// });