DROP DATABASE IF EXISTS hobbyboard_dev;
CREATE DATABASE hobbyboard_dev;

\c hobbyboard_dev;

DROP TABLE IF EXISTS groups, users;

CREATE TABLE groups (
    name TEXT PRIMARY KEY,
    main_focus TEXT,
    formed DATE,
    contact TEXT
);


CREATE TABLE users (
    username TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    password TEXT,
    email TEXT NOT NULL PRIMARY KEY
)