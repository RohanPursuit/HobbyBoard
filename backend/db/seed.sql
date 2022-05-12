\c hobbyboard_dev;

INSERT INTO testTable(content) VALUES
('This is our database''s test data');

INSERT INTO projects(name, details, project_image, archived) VALUES
('T -1Hour','This is an idea for a video game that begins about an hour before the downfall of society..', null, false),
('Rohan''s Gamer Dating App', 'something something games', null, false),
('Noob game devs', 'Help me make a game.', null, false),
('Backflippers', 'and we do be hittin backflips 4real', null, false),
('Legal Drive', 'An illegal racing game that takes place in New York city, where racers can coordinate street racing events using an underground App. This App will track winners and transfer money to participants.', null, false);



INSERT INTO users(username, first_name, last_name, password, email) VALUES 
('Tester', 'B', 'Z', 'password', 'email@email.com')