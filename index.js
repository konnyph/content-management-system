const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "management_system_db"
  });

  connection.connect(function (err) {
    if (err) throw err;
    // console.log(`data connected`);
    firstPrompt();
  });

// Inquirer Prompt ///
function firstPrompt() {

  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "View All Departments",
        "Add Department",
        "View All Roles",
        "Add Role",
        "Update Employee Role",
        "End"]
    })
    .then(function ({ task }) {
      switch (task) {
        case "View All Employees":
          viewEmployee();
          break;
        case "View All Departments":
          viewEmployeeByDepartment();
          break;
        
        case "Add Employee":
          addEmployee();
          break;
        case "View All Roles":
          viewRole();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Department":
          addDepartment();
          break;

        
        case "End":
          connection.end();
          break;
      }
    });
}

// Add Employee()
function viewEmployee() {
  console.log("Viewing employees\n");
}