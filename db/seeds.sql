-- Seed data to populate the database with initial values --
INSERT INTO departments (id, name)
VALUES
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal');

INSERT INTO roles (id, title, salary, department_id)
VALUES
    (1, 'Sales Lead', 100000, 1),
    (2, 'Salesperson', 80000, 1),
    (3, 'Lead Engineer', 150000, 2),
    (4, 'Software Engineer', 120000, 2),
    (5, 'Accountant', 125000, 3),
    (6, 'Legal Team Lead', 250000, 4),
    (7, 'Lawyer', 190000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'John', 'Doe', 1, NULL),
    (2, 'Mike', 'Chan', 2, 1),
    (3, 'Ashley', 'Rodriguez', 3, NULL),
    (4, 'Kevin', 'Tupik', 4, 3),
    (5, 'Malia', 'Brown', 5, NULL),
    (6, 'Sarah', 'Lourd', 6, NULL),
    (7, 'Tom', 'Allen', 7, 6),
    (8, 'Sally', 'Wong', 5, NULL),
    (9, 'Sam', 'Doe', 4, 1),
    (10, 'Samantha', 'Chan', 2, 1),
    (11, 'John', 'Doe', 3, NULL),
    (12, 'Mike', 'Chan', 4, 4),
    (13, 'Ashley', 'Rodriguez', 5, NULL),
    (14, 'Kevin', 'Tupik', 6, 3),
    (15, 'Malia', 'Brown', 7, NULL),
    (16, 'Sarah', 'Lourd', 1, NULL),
    (17, 'Tom', 'Allen', 2, 7),
    (18, 'Sally', 'Wong', 3, NULL),
    (19, 'Sam', 'Doe', 4, 6),
    (20, 'Samantha', 'Chan', 5, 5);

INSERT INTO managers (id, first_name, last_name, department_id)
VALUES
    (1, 'John', 'Doe', 1),
    (2, 'Ashley', 'Rodriguez', 2),
    (3, 'Sarah', 'Lourd', 3),
    (4, 'Sally', 'Wong', 4),
    (5, 'Sam', 'Doe', 1),
    (6, 'Samantha', 'Chan', 2),
    (7, 'Mike', 'Chan', 3);