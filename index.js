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

});
firstPrompt();
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
          viewDepartment();
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

// View Employee()
function viewEmployee() {
  // console.log("Viewing employees\n");
  connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id  LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
  )
    .then(([data]) => {
      console.table(data);
    })
    .then(() => {
      firstPrompt();
    });

}
// Add Department
function addDepartment() {
  inquirer.prompt({
    type: "input",
    name: "department",
    message: "What is the department name?"
  })
    .then((answer) => {
      connection.promise().query("INSERT INTO department SET ?", answer)
      .then(() => {
        console.log(`new department was added.`)
        firstPrompt();
      });

    })
    

}


