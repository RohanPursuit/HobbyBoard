DROP DATABASE IF EXISTS study_dev;
CREATE DATABASE study_dev;

\c study_dev;

DROP TABLE IF EXISTS groups, events, users;

CREATE TABLE groups (
    name TEXT PRIMARY KEY,
    main_focus TEXT,
    formed DATE,
    contact TEXT
);

CREATE TABLE events (
    name TEXT NOT NULL,
    virtual_meeting_link TEXT,
    study_group TEXT,
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    number_of_attendees INT,
    cancelled BOOLEAN,
    FOREIGN KEY (study_group) REFERENCES groups(name)
);

CREATE TABLE users (
    username TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    password TEXT,
    email TEXT NOT NULL PRIMARY KEY
)