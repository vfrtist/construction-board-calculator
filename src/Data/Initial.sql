CREATE TABLE
    Users (
        id CHAR(36) PRIMARY KEY,
        --
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    Projects (
        id CHAR(36) PRIMARY KEY,
        -- 
        name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        is_public BOOLEAN DEFAULT TRUE,
        data JSON NOT NULL
    );

CREATE TABLE
    Templates (
        id CHAR(36) PRIMARY KEY,
        -- 
        name VARCHAR(100) NOT NULL,
        description VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        data JSON NOT NULL
    );

CREATE TABLE
    ProjectUsers (
        PRIMARY KEY (userID, projectID),
        -- 
        role enum ('owner', 'editor', 'viewer') NOT NULL,
        --
        userID INT NOT NULL,
        projectID INT NOT NULL,
        --
        FOREIGN KEY (userID) references Users (id),
        FOREIGN KEY (projectID) references Projects (id)
    )