DROP DATABASE IF EXISTS hobbyboard_dev;
CREATE DATABASE hobbyboard_dev;

\c hobbyboard_dev;

DROP TABLE IF EXISTS projects, users;

CREATE TABLE testTable (
    test_id SERIAL PRIMARY KEY,
    content TEXT NOT NULL
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    details TEXT,
    project_image TEXT,
    archived BOOLEAN DEFAULT false
);


CREATE TABLE users (
    username TEXT NOT NULL PRIMARY KEY,
    password TEXT,
    email TEXT NOT NULL,
    date DATE,
    details TEXT
)

CREATE TABLE connections (
    username TEXT,
    project_id INTEGER,
    permissions TEXT,
    FOREIGN KEY(username) REFERENCES users(username),
    FOREIGN KEY(project_id) REFERENCES projects(project_id)
)