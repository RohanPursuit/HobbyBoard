\c study_dev;

INSERT INTO groups(name, main_focus, formed, contact) VALUES
('Test Group','Testing', '2022-04-28','Benny');

INSERT INTO events(name, virtual_meeting_link, study_group,start_time,end_time,number_of_attendees,cancelled) VALUES
('Test Event','link', 'Test Group', '2022-04-28 11:00', '2022-04-28 13:00', 15, false);

INSERT INTO users(username, first_name, last_name, password, email) VALUES 
('Tester', 'B', 'Z', 'password', 'email@email.com')