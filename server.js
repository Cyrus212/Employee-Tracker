// Import and require mysql2 using ES6 syntax
import { departmentQuestions, roleQuestions, employeeQuestions } from './questions/questions.js';
import mysql from 'mysql2/promise';
import inquirer from 'inquirer';

// Connect to database
const db = await mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '7#06Qq^FRwD^k@b=;JXk{M;Q?',
    database: 'employee_trackerDB'
  },
  console.log(`Connected to the employee_trackerDB database.`)
);

// Prompt user for what they would like to do
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit'],
    },
  ]);
};

// View all departments, roles, employees
const viewDepartments = async () => {
  const [rows, fields] = await db.query('SELECT * FROM departments');
  console.table(rows);
};

const viewRoles = async () => {
  const [rows, fields] = await db.query('SELECT * FROM roles');
  console.table(rows);
};

const viewEmployees = async () => {
  const [rows, fields] = await db.query('SELECT * FROM employees');
  console.table(rows);
};

// Add a department, role, employee
const addDepartment = async () => {
  const { id, name } = await inquirer.prompt(departmentQuestions);
  
  const query = 'INSERT INTO departments SET ?';
  const values = { id, name };

  await db.query(query, values);
};

const addRole = async () => {
  const { title, salary, department_id } = await inquirer.prompt(roleQuestions);
  
  const query = 'INSERT INTO roles SET ?';
  const values = { title, salary, department_id };

  await db.query(query, values);
};

const addEmployee = async () => {
  const { first_name, last_name, role_id, manager_id } = await inquirer.prompt(employeeQuestions);
  
  const query = 'INSERT INTO employees SET ?';
  const values = { first_name, last_name, role_id, manager_id };

  await db.query(query, values);
};

// Update an employee role
const updateEmployeeRole = async () => {
  const [rows, fields] = await db.query('SELECT * FROM employees');
  const employees = rows.map((employees) => {
    return {
      name: `${employees.first_name} ${employees.last_name}`,
      value: employees.id,
    };
  });
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'id',
      message: 'Which employee would you like to update?',
      choices: employees,
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'What is the new role id of the employee?',
    },
  ]);
  await db.query('UPDATE employees SET role_id = ? WHERE id = ?', [answers.role_id, answers.id]);
  console.log('Employee role updated.');
};

// Exit
const init = async () => {
  let exit = false;
  while (!exit) {
    const answers = await promptUser();
    switch (answers.action) {
      case 'View all departments':
        await viewDepartments();
        break;
      case 'View all roles':
        await viewRoles();
        break;
      case 'View all employees':
        await viewEmployees();
        break;
      case 'Add a department':
        await addDepartment();
        break;
      case 'Add a role':
        await addRole();
        break;
      case 'Add an employee':
        await addEmployee();
        break;
      case 'Update an employee role':
        await updateEmployeeRole();
        break;
      case 'Exit':
        exit = true;
        break;
    }
  }
  db.end();
};

// Call init function
init();