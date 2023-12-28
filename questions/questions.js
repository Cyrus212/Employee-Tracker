// Contains all questions for inquirer prompts
export const departmentQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the department?',
  },
];

export const roleQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the role?',
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the role?',
  },
  {
    type: 'input',
    name: 'department_id',
    message: 'What department does the role belong to? (Enter department id)',
  },
];

export const employeeQuestions = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What is the first name of the employee?',
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What is the last name of the employee?',
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'What is the role id of the employee?',
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'What is the manager id of the employee? (Managers are employees with "null" manager ids)',
  },
];