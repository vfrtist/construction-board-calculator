CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    owner_id INT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES Users(id)
);

CREATE TABLE ProjectBoards (
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_id INT NOT NULL,
    length DECIMAL(10, 2) NOT NULL,
    name VARCHAR(100) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES Projects(id)
);

CREATE TABLE BoardCuts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_board_id INT NOT NULL,
    length DECIMAL(10, 2) NOT NULL,
    qty INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    FOREIGN KEY (project_board_id) REFERENCES ProjectBoards(id)
);

-- Queries
-- Get user specific projects
CREATE view
    UserProjects AS
SELECT 
    u.id AS user_id,
    u.username, 
    p.id AS project_id,
    p.name AS project_name
FROM 
    Users u
    JOIN Projects p ON u.id = p.owner_id;

-- Get whole project details
CREATE view
    ProjectDetails AS
SELECT
    p.id AS project_id,
    p.name AS project_name,
    --
    b.id AS board_id,
    b.name AS board_name,
    --
    c.id AS cut_id,
    c.name AS cut_name,
    c.length AS cut_length,
    c.qty AS cut_qty
FROM
    Projects p
    JOIN ProjectBoards b ON p.id = b.project_id
    JOIN BoardCuts c ON b.id = c.project_board_id;