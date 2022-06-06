\c hobbyboard_dev;

INSERT INTO testTable(content) VALUES
('This is our database''s test data');

INSERT INTO users(username, password, email, date, details, created_projects, collaborated_projects, profile_image) VALUES 
('BZ', 'password', 'email@email.com', '05/13/2022', 'Can type gud.','{Legal Drive}','{Noob game devs}', null),
('JD', 'password', 'email@email.com', '05/14/2022', 'Can type gud.','{Noob game devs}', '{}', null),
('RS', 'password', 'email@email.com', '05/15/2022', 'Can type gudder.','{T -1Hour,Rohan''s Gamer Dating App}', '{}', 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Jamie_Foxx_Django_avp.jpg'),
('DL', 'password', 'email@email.com', '05/16/2022', 'Can type gud.','{Backflippers}', '{}', null);


INSERT INTO projects(name, details, project_image, archived, creator) VALUES
('Reset','With the project Reset I would like to explore the idea of an apocalyptic video game that begins about a day or two before the apocalypse. Reset is an open world game with a single player/co-op mode. However for this project I will be focusing on making a playable demo of the single player/co-op experience. My main motivation for creating a game like Reset is exploring player decision making during the initial events at the beginning of the apocalypse.', 'https://static.onecms.io/wp-content/uploads/sites/28/2021/02/19/new-york-city-evening-NYCTG0221.jpg', false, 'RS'),
('Rohan''s Gamer Dating App', 'something something games', null, false, 'RS'),
('Noob game devs', 'Help me make a game.', null, false, 'JD'),
('Backflippers', 'and we do be hittin backflips 4real', null, false, 'DL'),
('Legal Drive', 'An illegal racing game that takes place in New York city, where racers can coordinate street racing events using an underground App. This App will track winners and transfer money to participants.', null, false, 'BZ');

INSERT INTO connections (username, project_id, permissions) VALUES
('BZ', 5, 'owner'),
('JD', 3, 'owner'),
('RS', 1, 'owner'),
('DL', 4, 'owner'),
('RS', 2, 'owner'),
('BZ', 3, 'collaborator'),
('BZ', 4, 'request'),
('BZ', 3, 'follower');

INSERT INTO posts (project_id, members_only, date, title, contents, likes) VALUES 
(1, false, '2020-9-04 10:23:54', 'Post 1', 'This is our first test post', ARRAY ['RS', 'BZ','JD','DL']),
(2, true, '2020-9-05 10:23:54', 'Post 2', 'This is our second test post', ARRAY ['']),
(2, false, '2020-9-06 10:23:54', 'Post 3', 'This is our third test post', ARRAY ['']),
(3, false, '2020-9-07 10:23:54', 'Post 4', 'This is our fourth test post', ARRAY ['']),
(5, false, '2020-9-08 10:23:54', 'Post 5', 'This is our fifth test post', ARRAY ['']);

INSERT INTO comments (post_id, username, comment, date) VALUES 
(1, 'DL', 'Test comment 1', '2020-9-05 10:23:54'),
(1, 'BZ', 'Test comment 2', '2020-9-06 10:23:54'),
(1, 'RS', 'Test comment 3', '2020-9-05 10:23:54'),
(2, 'JD', 'Test comment 4', '2020-9-05 10:23:54'),
(2, 'DL', 'Test comment 5', '2020-9-05 10:23:54'),
(3, 'BZ', 'Test comment 6', '2020-9-05 10:23:54'),
(3, 'RS', 'Test comment 7', '2020-9-05 10:23:54'),
(4, 'JD', 'Test comment 8', '2020-9-05 10:23:54');
