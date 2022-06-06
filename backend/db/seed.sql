\c hobbyboard_dev;

INSERT INTO testTable(content) VALUES
('This is our database''s test data');

INSERT INTO users(username, password, email, date, details, created_projects, collaborated_projects, profile_image) VALUES 
('BZ', 'password', 'email@email.com', '05/13/2022', 'Can type gud.','{Legal Drive}','{Noob game devs}', null),
('JD', 'password', 'email@email.com', '05/14/2022', 'Hey, i''m new to making games and looking for others to learn and collaborate with.','{Noob game devs}', '{}', 'https://i.imgur.com/bNmjbzk.png?1'),
('RS', 'password', 'email@email.com', '05/15/2022', 'Can type gudder.','{T -1Hour,Rohan''s Gamer Dating App}', '{}', null),
('DylanL', 'password', 'email@email.com', '05/16/2022', 'Full Stack Web Developer & Computer Technician','{Backflippers}', '{}', 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0NTEzNzgyNTMyNDE2OTk5/black-cat-gettyimages-901574784.jpg');


INSERT INTO projects(name, details, project_image, archived, creator) VALUES
('T -1Hour','This is an idea for a video game that begins about an hour before the downfall of society..', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aptera-0025-1-1607066100.png?crop=1.00xw:1.00xh;0,0&resize=980:*', false, 'RS'),
('Rohan''s Gamer Dating App', 'something something games', null, false, 'RS'),
('Noob game devs', 'Hello, I''m look for others who would like to learn about the process of developing games, to play and understand game design, and to collaborate with others in researching and creating our own games.', 'https://i.imgur.com/s5n9x1q.jpg', false, 'JD'),
('CompatABLE', 'An idea for creating a website that can be used to find compatability between two different pieces of technology, be it hardware or software', 'https://www.invensis.net/blog/wp-content/uploads/2015/06/Compatibility-Testing-Invensis.jpg', false, 'DylanL'),
('Legal Drive', 'An illegal racing game that takes place in New York city, where racers can coordinate street racing events using an underground App. This App will track winners and transfer money to participants.', null, false, 'BZ');

INSERT INTO connections (username, project_id, permissions) VALUES
('BZ', 5, 'owner'),
('JD', 3, 'owner'),
('RS', 1, 'owner'),
('DylanL', 4, 'owner'),
('RS', 2, 'owner'),
('BZ', 3, 'collaborator'),
('BZ', 4, 'request'),
('BZ', 4, 'follower'),
('JD', 4, 'collaborator'),
('RS', 4, 'collaborator');


INSERT INTO posts (project_id, members_only, date, title, contents, likes) VALUES 
(1, false, '2020-9-04 10:23:54', 'Post 1', 'This is our first test post', ARRAY ['RS', 'BZ','JD','DylanL']),
(2, true, '2020-9-05 10:23:54', 'Post 2', 'This is our second test post', ARRAY ['']),
(2, false, '2020-9-06 10:23:54', 'Post 3', 'This is our third test post', ARRAY ['']),
(3, false, '2020-9-07 10:23:54', 'Post 4', 'This is our fourth test post', ARRAY ['']),
(5, false, '2020-9-08 10:23:54', 'Post 5', 'This is our fifth test post', ARRAY ['']),
(4, true, '2022-3-04 10:23:54', 'Post 5', 'Discord: -here-, Facebook: -here-', ARRAY ['']),
(4, false, '2022-5-07 10:23:54', 'Post 5', 'We''re in Alpha! Looking for members to help with video editing! ', ARRAY ['', 'JD', 'BZ']);

INSERT INTO comments (post_id, username, comment, date) VALUES 
(1, 'DylanL', 'Test comment 1', '2020-9-05 10:23:54'),
(1, 'BZ', 'Test comment 2', '2020-9-06 10:23:54'),
(1, 'RS', 'Test comment 3', '2020-9-05 10:23:54'),
(2, 'JD', 'Test comment 4', '2020-9-05 10:23:54'),
(2, 'DylanL', 'Test comment 5', '2020-9-05 10:23:54'),
(3, 'BZ', 'Test comment 6', '2020-9-05 10:23:54'),
(3, 'RS', 'Test comment 7', '2020-9-05 10:23:54'),
(4, 'JD', 'Test comment 8', '2020-9-05 10:23:54'),
(7, 'JD', 'Sounds good!', '2022-6-03 10:23:54'),
(7, 'BZ', 'Works for me!', '2022-6-04 10:23:54');
